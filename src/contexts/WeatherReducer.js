import { ALL_WEATHER } from "./types";

const weatherReducer = (state, action) => {
  switch (action.type) {
    case ALL_WEATHER:
      
      return {
        ...state,
        weather: action.payload,
      };

    default:
      throw Error("State Logic Error");
  }
};

export default weatherReducer;
