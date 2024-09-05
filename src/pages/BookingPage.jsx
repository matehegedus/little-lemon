import { useReducer, useState } from "react";
import BookingForm from "../components/bookingForm/BookingForm";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Main from "../components/main/Main";

export const updateTimes = (date) => {
  return ["17:00", "18:00", "19:00", "22:00"];
};

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const reducer = (state, action) => {
  if (action.type === "updateTimes") return updateTimes(action.date);
  return state;
};

const BookingPage = () => {
  const [availableTimes, dispatchTimes] = useReducer(
    reducer,
    initializeTimes()
  );

  return (
    <>
      <Header />
      <BookingForm
        availableTimes={availableTimes}
        onDateChanged={(date) => {
          dispatchTimes({ type: "updateTimes", date });
        }}
      />
      <Footer />
    </>
  );
};

export default BookingPage;
