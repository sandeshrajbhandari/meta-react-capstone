// import usestate
import { useEffect, useState, useReducer } from "react";
// import BookingForm component
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../util/API";
// import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Main = () => {
  // const [availableTimes, setAvailableTimes] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  // state set fn to pass to useReducer
  const initializeTimes = () => {
    const dateObject = new Date(); // get current date
    let dataFetched = fetchAPI(dateObject);
    console.log(dataFetched);
    dispatch({
      type: "initialize",
      timeList: dataFetched,
    });
  };

  const updateTimes = (selectedDate) => {
    // console.log(dataFetched);
    // filter = dataFetched.filter((time) => time !== selectedTime);
    // let updatedTimes = availableTimes.filter((time) => time !== selectedTime); //change to this later.
    function convertDateStringToDate(dateString) {
      const [year, month, day] = dateString.split("-").map(Number);
      return new Date(year, month - 1, day);
    }
    const dateObject = convertDateStringToDate(selectedDate);
    // fetchAPI requires a dateObject not a date string like "2022-12-10"
    // so converting it to dateObject
    let newAvailableTimesforNewDate = fetchAPI(dateObject);
    dispatch({
      type: "update",
      timeList: newAvailableTimesforNewDate,
    });
  };

  // reducer function
  const timeReducer = (availableTimes, action) => {
    // return time;
    switch (action.type) {
      case "initialize": {
        // take payload data and set to initializetimes
        return action.timeList;
      }

      case "update": {
        // filter action.time and return the times
        return action.timeList;
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
  function submitForm(form_data) {
    console.log(form_data);
    console.log("submitAPI returns " + submitAPI(form_data));
    if (submitAPI(form_data))
      // navigate("/booking-confirm", { state: { form_data } });
      setFormSubmitted(true);
  }
  return (
    <>
      <BookingForm
        availableTimes={availableTimes}
        // setSelectedTime={setSelectedTime}
        dispatch={dispatch}
        updateTimes={updateTimes}
        submitForm={submitForm}
      />
      {formSubmitted && <Navigate to="/booking-confirm" />}
    </>
  );
};

export default Main;
