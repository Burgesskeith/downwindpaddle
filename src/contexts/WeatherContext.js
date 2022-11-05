import { useEffect } from "react";
import { createContext, useReducer } from "react";
import weatherReducer from "../Reducers/WeatherReducer";
import { GET_WEATHER } from "./types";

export const WeatherContext = createContext();

const WeatherContextProvider = (props) => {
  const initialState = {
    weather: [],
  };
  const [weather, dispatch] = useReducer(
    weatherReducer,
    { weather: [] },
    () => {
      const localData = localStorage.getItem("weather");
      return localData ? JSON.parse(localData) : { weather: [] };
    }
  );

  const lat = 26.6809;
  const lng = 153.1217;
  const source = "noaa";
  const params =
    "swellDirection,swellHeight,swellPeriod,windDirection,windSpeed";

  useEffect(() => {
    const getWeather = async () => {
      const todayDate = Date.parse(new Date());
      const oneDay = 1000 * 60 * 60 * 24;
      const dataUpToDate = JSON.parse(localStorage.getItem("lastUpdated"));

      if (!dataUpToDate || Math.round(todayDate - dataUpToDate) / oneDay > 4) {
        await fetch(
          `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&source=${source}`,
          {
            headers: {
              Authorization: process.env.REACT_APP_WEATHER_API,
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            dispatch({ type: GET_WEATHER, data });
          });
      }
    };
    getWeather();
  }, []);

  useEffect(() => {
    localStorage.setItem("weather", JSON.stringify(weather));
  }, [weather]);

  return (
    <WeatherContext.Provider value={{ weather, dispatch }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
