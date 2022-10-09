import React from "react";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Spinner from "./Spinner";
import WeatherContext from "../contexts/WeatherContext";

const MainContent = () => {
  const [wait, setWait] = useState(false);
  const weatherContext = useContext(WeatherContext);
  console.log(weatherContext);
  let clickAllowed = false;
  const todayDate = new Date();

  // check that data has not been collected within last 4 days
  if (localStorage.getItem("lastUpdated") === null) {
    clickAllowed = true;
  } else {
    let lastUpdated = localStorage.getItem(JSON.parse("lastUpdated"));
    lastUpdated.setDate(todayDate.getDate() + 4);
    if (lastUpdated - todayDate < 345600000) {
      clickAllowed = false;
    }
    console.log(todayDate);
    console.log(lastUpdated);
    console.log(lastUpdated - todayDate);
  }

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // const weather = JSON.parse(localStorage.getItem("Weather"));
  // weather && console.log(weather);
  // const list = weather.hours;
  // let newList = [];
  // for (let i = 0; i < list.length; i++) {
  //   if (list[i].time.includes("T21")) {
  //     newList.push(list[i]);
  //   }
  // }
  // console.log(newList);
  // const paddleDays = newList.map((item) => {
  //   let newDate = new Date(Date.parse(item.time));
  //   let dow = days[newDate.getDay()];
  //   let day = newDate.getDate();
  //   let mth = newDate.getMonth() + 1;
  //   let year = newDate.getFullYear();
  //   let showDate = dow + " " + [day, mth, year].join("/");
  //   let windDir = mapDirection(item.winDirection);
  //   let swellDir = mapDirection(item.swellDirection);
  //   return (
  //     <div key={uuidv4()} className="flex gap-6">
  //       <p>{showDate}</p>
  //       <p>{item.windSpeed}</p>
  //       <p>{windDir}</p>
  //       <p>{item.waveHeight}</p>
  //       <p>{swellDir}</p>
  //       <p>{item.waveHeight}</p>
  //     </div>
  //   );
  // });

  const handleClick = () => {
    if (!clickAllowed) {
      return alert("No reed to update data as it's sufficiently up to date.");
    }
    console.log("About to set wait");
    setWait(true);
    setTimeout(() => {
      console.log("I was clicked");
      setWait(false);
    }, 3000);
    weatherContext.getWeather();
  };
  return (
    <>
      <div className="mt-32 md:mt-20 p-8 text-primaryCol">
        <div className="text-2xl mb-4">Paddling Forecast</div>
        <p className="mb-4">
          The forecast is for downwind conditions to Mooloolaba from North and
          South depending on wind and swell direction.
        </p>
        {wait ? (
          <Spinner />
        ) : (
          <>
            <div>Here's the data...</div>
            <div>{wait ? <p>Waiting</p> : <p>Going</p>}</div>
          </>
        )}
      </div>

      <div
        onClick={handleClick}
        className="mx-12 bg-blue-500 w-60 lg:w-1/4 py-2 px-6 rounded hover: cursor-pointer hover:shadow-lg text-center text-white text-lg min-w-40"
      >
        Get Fresh Data
      </div>
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
