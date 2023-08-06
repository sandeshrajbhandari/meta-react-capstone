// import usestate
import { useEffect, useState, useReducer } from "react";
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
  const initializeTimes = "";
  useEffect(() => {
    initializeTimes = fetchDataFromApi();
  }, []);

  const fetchDataFromApi = () => {
    // Use the global function provided by the imported API script
    // In this example, the API function is named "fetchData"]
    const dateToFetch = "2023-10-10";
    fetchData(dateToFetch)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

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
