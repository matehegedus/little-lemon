import React, { useEffect, useState } from "react";
import "./BookingForm.css";

const BookingForm = ({
  availableTimes,
  onDateChanged = () => {},
  onSubmit = () => {},
}) => {
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState(null);

  const [time, setTime] = useState("");

  console.log("availableTimes :>> ", availableTimes);

  useEffect(() => {
    if (date.length > 0) {
      onDateChanged(date);
    }
  }, [date]);

  return (
    <>
      <h1>Book Now</h1>
      <form className="booking-form">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          onChange={(e) => {
            setTime(Number(e.target.value));
          }}
          id="res-time "
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          min="1"
          max="10"
          value={guests}
          id="guests"
          onChange={(e) => {
            setGuests(Number(e.target.value));
          }}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          onChange={(e) => {
            setOccasion(e.target.value);
          }}
        >
          <option value={"birthday"}>Birthday</option>
          <option value={"anniversary"}>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" onClick={onSubmit} />
      </form>
    </>
  );
};
export default BookingForm;
