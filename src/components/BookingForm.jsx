import { useState } from "react";

const BookingForm = ({ availableTimes, dispatch }) => {
  //use useState to create a state for the date, guests number and occasion
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  //moved availableTimes state to Main.js component
  const [time, setTime] = useState("");
  //
  function handleSubmit(e) {
    e.preventDefault();
  }
  // console.log("tesrtttttttttttttttttttttt");
  // console.log(availableTimes);
  return (
    <>
      <h1>BookingForm</h1>
      <form
        // style="display: grid; max-width: 200px; gap: 20px"
        onSubmit={handleSubmit}
      >
        <input
          type="date"
          id="res-date"
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="res-date">Choose date</label>

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          onChange={(e) =>
            dispatch({
              type: "update",
              time: e.target.options[e.target.selectedIndex].text,
            })
          }
        >
          {/* <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option> */}
          {availableTimes.map((time, i) => {
            return <option key={i}>{time}</option>;
          })}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={(e) => setGuests(parseFloat(e.target.value))}
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={(e) => setOccasion(e.target.value)}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {/* // create a submit button with preventDefault */}
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
};

export default BookingForm;
