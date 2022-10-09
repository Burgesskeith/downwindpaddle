import React, { useReducer, useContext, useEffect } from "react";
import { ALL_WEATHER } from "./types";
import WeatherContext from "./WeatherContext";
import weatherReducer from "./WeatherReducer";

const WeatherState = (props) => {
  const { setWeather } = useContext(WeatherContext);

  const initialState = {
    weather: [],
  };
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  const lat = 26.6809;
  const lng = 153.1217;
  const source = "noaa";
  const params =
    "swellDirection,swellHeight,swellPeriod,windDirection,windSpeed";

  const getWeather = async () => {
    await fetch(
      `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&source=${source}`,
      {
        headers: {
          Authorization: process.env.REACT_APP_WEATHER_API,
        },
      }
    )
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        dispatch({ type: ALL_WEATHER, jsonData });
        localStorage.setItem("Weather", JSON.stringify(jsonData));
        localStorage.setItem("lastUpdated", JSON.stringify(new Date.today()));
      });
  };

  return (
    <WeatherContext.Provider value={{ ...state, dispatch, getWeather }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
