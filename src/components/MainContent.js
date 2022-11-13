import { useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// import Spinner from "./Spinner";
import Card from "./Card";
import { WeatherContext } from "../contexts/WeatherContext";
import useGatherTenDays from "../hooks/useGatherTenDays";
import { useGetDirection } from "../hooks/useGetDirection";

const MainContent = () => {
  const { weather, getWeather } = useContext(WeatherContext);
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
  let newList;

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
      if (Math.round(todayDate - lastStoredDate) / oneDay > 0) {
        setClickAllowed(true);
      }
    }
  }, [clickAllowed]);

  newList = useGatherTenDays();
  const getDirection = useGetDirection;

  const paddleDays = newList.map((item) => {
    let newDate = new Date(Date.parse(item.time));
    let dow = days[newDate.getDay()];
    let showDate = dow + " " + newDate.toLocaleDateString().toString(); // dow + " " + [day, mth, year].join("/");
    let showTime = newDate.toLocaleTimeString().toString();
    let windDir = getDirection(item.windDirection.noaa);
    let swellDir = getDirection(item.swellDirection.noaa);
    let windSpeedKMH = Math.round(item.windSpeed.noaa * 3.6); // convert metres per second to km/hr
    let swellHeight = item.swellHeight.noaa;
    let waveHeight = item.waveHeight.noaa;

    return (
      <Card
        windSpeed={windSpeedKMH}
        windDir={windDir}
        swellDir={swellDir}
        swellHeight={swellHeight}
        key={uuidv4()}
      >
        <div className="flex gap-6">
          <div className="">
            <div className="text-lg text-center mb-2 font-bold ">
              {showDate}
            </div>
            <div className="text-sm text-center mb-2 ">{showTime}</div>
            <div className="mb-2">
              <hr />
            </div>
            <div className="flex">
              <div className="font-bold w-32 mr-6">Wind Speed:</div>
              <div className="text-gray-800">{windSpeedKMH} km/h</div>
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
              <div className="text-gray-800">{swellHeight} m</div>
            </div>
            <div className="flex">
              <div className="font-bold mr-6 w-32">Wave Height:</div>
              <div className="text-gray-800">{waveHeight} m</div>
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
    console.log("let's run the get data function");
    getWeather();
    setClickAllowed(false);
  };

  return (
    <>
      <div className="mt-4 p-8 text-primaryCol w-[300px] sm:w-full md:w-[700px] 2xl:w-full mx-auto">
        <div className="text-2xl mb-4">Paddling Forecast</div>
        <p className="mb-4">
          The forecast is for downwind conditions to Mooloolaba beach from the
          North.
        </p>

        <>
          <div className="text-lg mb-4 ">
            A green coloured tile suggests a good day for paddling downwind is
            forecast.
          </div>
          {paddleDays && (
            <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-5">
              {paddleDays}
            </div>
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
