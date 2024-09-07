import React, { useEffect, useState } from "react";
import "./BookingForm.css";
import { Link } from "react-router-dom";

const BookingForm = ({
  availableTimes,
  onDateChanged = () => {},
  onSubmit = () => {},
}) => {
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState("");

  const occasions = ["Birthday", "Anniversary"];
  const [occasion, setOccasion] = useState(occasions[0]);

  const [time, setTime] = useState(availableTimes[0]);

  useEffect(() => {}, []);

  useEffect(() => {
    if (date.length > 0) {
      onDateChanged(date);
    }
  }, [date]);

  return (
    <section className="booking-form-container">
      <h1>Book Now</h1>
      <form
        className="booking-form"
        onSubmit={(e) => {
          e.preventDefault();

          onSubmit({
            date,
            time,
            occasion,
            guests,
          });
        }}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          className="booking-form-date"
          required
          type="date"
          id="res-date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          className="booking-form-select"
          required
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
          className="booking-form-number"
          data-testid="guests"
          required
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
          className="booking-form-select"
          required
          id="occasion"
          data-testid="occasion"
          onChange={(e) => {
            setOccasion(e.target.value);
          }}
        >
          {occasions.map((occasion) => (
            <option key={occasion} value={occasion}>
              {occasion}
            </option>
          ))}
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
      <Link className="button" aria-label="On Click" to="/home">
        Go back to home
      </Link>
    </section>
  );
};
export default BookingForm;
