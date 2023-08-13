import { useState, useEffect } from "react";

const BookingForm = ({ availableTimes, dispatch, updateTimes, submitForm }) => {
  //use useState to create a state for the date, guests number and occasion
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;

  const [date, setDate] = useState(formattedDate);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("birthday");
  const [selectedTime, setSelectedTime] = useState("");
  if (availableTimes.length > 0 && selectedTime === "") {
    setSelectedTime(availableTimes[0]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit working");
    console.log({ date, guests, occasion, selectedTime });
    submitForm({ date, guests, occasion, selectedTime });
    // dispatch an action to add a reservation
  }

  return (
    <>
      <h1>BookingForm</h1>
      <form
        style={{
          display: "grid",
          maxWidth: "200px",
          gap: "20px",
        }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="date"
          id="res-date"
          value={date}
          required
          onChange={(e) => {
            console.log(e.target.value, typeof e.target.value);
            setDate(e.target.value);
            updateTimes(e.target.value);
          }}
          min={new Date().toISOString().split("T")[0]}
        />
        <label htmlFor="res-date">Choose date</label>

        <label htmlFor="res-time">Choose time</label>
        <select
          defaultValue={selectedTime}
          id="res-time"
          onChange={(e) => {
            setSelectedTime(e.target.options[e.target.selectedIndex].text);
            // console.log(e.target.options[e.target.selectedIndex].text);
          }}
        >
          {/* <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option> */}
          {availableTimes.map((time, i) => {
            return (
              <option value={time} key={i}>
                {time}
              </option>
            );
          })}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(parseFloat(e.target.value))}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          value={occasion}
          id="occasion"
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
        {/* // create a submit button with preventDefault */}
        <input
          type="submit"
          value="Make Your reservation"
          aria-label="On Click"
        />
      </form>
    </>
  );
};

export default BookingForm;
