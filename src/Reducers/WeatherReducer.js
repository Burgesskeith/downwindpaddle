import { GET_WEATHER } from "../contexts/types";

const weatherReducer = (state, action) => {
  switch (action.type) {
    case GET_WEATHER:
      console.log(action);
      if (action.data.errors) {
        return console.log(action.data.errors.key);
      }
      console.log(action.data.hours);
      return {
        ...state,
        weather: action.data.hours,
      };

    default:
      throw Error("State Logic Error");
  }
};

export default weatherReducer;
