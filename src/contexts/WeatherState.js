import React, { useReducer, useContext, useEffect } from "react";
import { ALL_WEATHER } from "./types";
import WeatherContext from "./WeatherContext";
import weatherReducer from "./WeatherReducer";
import WEATHER_API from "./types";

const WeatherState = (props) => {
  const { setWeather } = useContext(WeatherContext);

  const initialState = {
    weather: [],
  };
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  const lat = 26.6809;
  const lng = 153.1217;
  const params = "waveHeight,airTemperature";

  useEffect(() => {
    const getWeather = () => {
      fetch(
        `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
        {
          headers: {
            Authorization:
              "33daf96e-541f-11ec-be8b-0242ac130002-33daf9dc-541f-11ec-be8b-0242ac130002",
          },
        }
      )
        .then((response) => response.json())
        .then((jsonData) => {
          // console.log(jsonData);
          dispatch({ type: ALL_WEATHER, jsonData });
        });
    };
    getWeather();
  }, []);

  return (
    <WeatherContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
