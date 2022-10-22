import React from "react";

const Card = ({ children, windDir, windSpeed, swellDir, swellHeight }) => {
  let score = 0;
  console.log(windDir);
  console.log(windSpeed);
  console.log(swellDir);
  console.log(swellHeight);

  switch (windDir) {
    case "S":
      score += 4;
      break;
    case "SSE":
      score += 3;
      break;
    case "SE":
      score += 2;
      break;
    default:
      score += 0;
  }

  switch (swellDir) {
    case "S":
      score += 4;
      break;
    case "SE":
      score += 2;
      break;
    case "ESE":
      score += 1;
      break;
    case "SSE":
      score += 3;
      break;
    default:
      score += 0;
  }

  if (windSpeed >= 10 && windSpeed <= 30) {
    score += 4;
  } else if (windSpeed > 5 && windSpeed < 10) {
    score += 2;
  }

  if (swellHeight > 1.5 && swellHeight <= 8) {
    score += 3;
  } else if (swellHeight > 0.5 && swellHeight <= 1.5) {
    score += 1;
  }

  console.log(score);
  return (
    <>
      <div
        className={`border border-slate-300 rounded-lg shadow-lg p-4 m-2 w-[280px] ${
          score > 9 && "bg-green-200"
        } `}
      >
        {children}
      </div>
    </>
  );
};

export default Card;
