// import usestate
import { useState, useReducer } from "react";
// import BookingForm component
import BookingForm from "../components/BookingForm";

const Main = () => {
  // const [availableTimes, setAvailableTimes] = useState([
  //   "17:00",
  //   "18:00",
  //   "19:00",
  //   "20:00",
  //   "21:00",
  //   "22:00",
  // ]);

  // state set fn to pass to useReducer
  const initializeTimesFN = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  };
  const initializeTimes = initializeTimesFN();

  // reducer function
  const updateTimes = (availableTimes, action) => {
    // return time;
    switch (action.type) {
      case "update": {
        // filter action.time and return the times
        // return availableTimes.filter((time) => time !== action.time); ## change to this later.
        return availableTimes; // send same time for testing
      }
      default: {
        throw Error("Unknown action: " + action.type);
      }
    }
  };

  // use useReducer instead of useState
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  // const updateAvailableTimes = (time) => {
  //   dispatch({
  //     type: 'update'
  //   });
  // }
  return (
    <div>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
};

export default Main;
