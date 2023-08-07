// import usestate
import { useEffect, useState, useReducer } from "react";
// import BookingForm component
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../util/API";

const Main = () => {
  // const [availableTimes, setAvailableTimes] = useState([]);

  // state set fn to pass to useReducer
  const initializeTimes = () => {
    const dateString = "2023-10-10";
    const dateObject = new Date(dateString);
    let dataFetched = fetchAPI(dateObject);
    console.log(dataFetched);
    dispatch({
      type: "initialize",
      time: dataFetched,
    });
  };

  const updateTimes = (selectedTime) => {
    // console.log(dataFetched);
    // filter = dataFetched.filter((time) => time !== selectedTime);
    console.log(selectedTime);
    dispatch({
      type: "update",
      time: selectedTime,
    });
  };
  // reducer function
  const timeReducer = (availableTimes, action) => {
    // return time;
    switch (action.type) {
      case "initialize": {
        // take payload data and set to initializetimes
        return action.time;
      }

      case "update": {
        // filter action.time and return the times
        availableTimes = availableTimes.filter((time) => time !== action.time); //change to this later.
        return availableTimes;
        // return availableTimes; // send same time for testing
      }
      default: {
        throw Error("Unknown action: " + action.type);
      }
    }
  };
  // use useReducer instead of useState
  const [availableTimes, dispatch] = useReducer(timeReducer, []);
  useEffect(() => {
    initializeTimes();
  }, []);

  // console.log(availableTimes);
  // const updateAvailableTimes = (time) => {
  //   dispatch({
  //     type: 'update'
  //   });
  // }
  return (
    <div>
      <BookingForm
        availableTimes={availableTimes}
        // setSelectedTime={setSelectedTime}
        dispatch={dispatch}
        updateTimes={updateTimes}
      />
    </div>
  );
};

export default Main;
