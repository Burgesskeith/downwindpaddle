import { useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Spinner from "./Spinner";
import Card from "./Card";
import WeatherContext from "../contexts/WeatherContext";
import useGatherTenDays from "../hooks/useGatherTenDays";

const MainContent = () => {
  const weatherContext = useContext(WeatherContext);
  const [clickAllowed, setClickAllowed] = useState(false);
  const todayDate = Date.parse(new Date());
  const oneDay = 1000 * 60 * 60 * 24;
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  useEffect(() => {
    if (localStorage.getItem("lastUpdated") === null) {
      setClickAllowed(true);
      let lastUpdated = { date: new Date() };
      localStorage.setItem("lastUpdated", JSON.stringify(lastUpdated));
      setClickAllowed(false);
    } else {
      let storedDateObject = JSON.parse(localStorage.getItem("lastUpdated"));
      let lastStoredDate = Date.parse(storedDateObject.date);
      // check that data has not been collected within last 4 days
      if (Math.round(todayDate - lastStoredDate) / oneDay > 4) {
        setClickAllowed(true);
      }
    }
  }, [clickAllowed]);

  let newList = useGatherTenDays();

  const paddleDays = newList.map((item) => {
    let newDate = new Date(Date.parse(item.time));
    let dow = days[newDate.getDay()];
    let day = newDate.getDate();
    let mth = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let showDate = dow + " " + [day, mth, year].join("/");
    let windDir = mapDirection(item.windDirection.noaa);
    let swellDir = mapDirection(item.swellDirection.noaa);
    let bgColor;

    return (
      <Card
        windSpeed={item.windSpeed.noaa}
        windDir={windDir}
        swellDir={swellDir}
        swellHeight={item.swellHeight.noaa}
        key={uuidv4()}
      >
        <div className="flex gap-6">
          <div className="">
            <div className="text-lg text-center mb-4 font-bold underline">
              {showDate}
            </div>
            <div className="flex">
              <div className="font-bold w-32 mr-6">Wind Speed:</div>
              <div className="text-gray-800">{item.windSpeed.noaa} km/h</div>
            </div>
            <div className="flex">
              <div className="font-bold mr-6 w-32">Wind Direction:</div>
              <div className="text-gray-800">{windDir}</div>
            </div>
            <div className="flex">
              <div className="font-bold mr-6 w-32">Swell Direction:</div>
              <div className="text-gray-800">{swellDir}</div>
            </div>
            <div className="flex">
              <div className="font-bold mr-6 w-32">Swell Height:</div>
              <div className="text-gray-800">{item.swellHeight.noaa} m</div>
            </div>
          </div>
        </div>
      </Card>
    );
  });

  const handleClick = () => {
    if (!clickAllowed) {
      return alert("No reed to update data as it's sufficiently up to date.");
    }
    weatherContext.getWeather();
    setClickAllowed(false);
  };
  return (
    <>
      <div className="mt-4 p-8 text-primaryCol">
        <div className="text-2xl mb-4">Paddling Forecast</div>
        <p className="mb-4">
          The forecast is for downwind conditions to Mooloolaba from the North.
        </p>

        <>
          <div className="text-lg mb-4 font-bold">
            Here's the data for 7am each day...
          </div>
          {paddleDays && (
            <div className="flex justify-around flex-wrap">{paddleDays}</div>
          )}
        </>
      </div>

      {clickAllowed && (
        <div
          onClick={handleClick}
          className="mx-12 bg-blue-500 w-60 lg:w-1/4 py-2 px-6 rounded hover: cursor-pointer hover:shadow-lg text-center text-white text-lg min-w-40"
        >
          Get Fresh Data
        </div>
      )}
    </>
  );
};

export default MainContent;

const mapDirection = (deg) => {
  if (deg >= 0 && deg < 11.25) {
    return "N";
  } else if (deg >= 11.25 && deg < 33.75) {
    return "NNE";
  } else if (deg >= 33.75 && deg < 56.25) {
    return "NE";
  } else if (deg >= 56.25 && deg < 78.75) {
    return "ENE";
  } else if (deg >= 78.75 && deg < 101.25) {
    return "E";
  } else if (deg >= 101.25 && deg < 123.75) {
    return "ESE";
  } else if (deg >= 123.75 && deg < 146.25) {
    return "SE";
  } else if (deg >= 146.25 && deg < 168.75) {
    return "SSE";
  } else if (deg >= 168.75 && deg < 191.25) {
    return "S";
  } else if (deg >= 191.25 && deg < 213.75) {
    return "SSW";
  } else if (deg >= 213.75 && deg < 236.25) {
    return "SW";
  } else if (deg >= 236.25 && deg < 258.75) {
    return "WSW";
  } else if (deg >= 258.75 && deg < 281.25) {
    return "W";
  } else if (deg >= 281.25 && deg < 303.75) {
    return "WNW";
  } else if (deg >= 303.75 && deg < 326.25) {
    return "NW";
  } else if (deg >= 326.25 && deg < 348.75) {
    return "NNW";
  } else if (deg >= 348.75 && deg <= 360) {
    return "N";
  } else {
    return "Error";
  }
};
