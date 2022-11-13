// Hook to prepare 10 days worth of data

const useGatherTenDays = () => {
  const weather = JSON.parse(localStorage.getItem("weather"));
  if (!weather) {
    return [];
  }

  const list = weather.weather;
  let newList = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].time.includes("T21")) {
      newList.push(list[i]);
    }
  }
  return newList;
};

export default useGatherTenDays;
