import { useEffect, useReducer, useState } from "react";
import BookingForm from "../components/bookingForm/BookingForm";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { fetchAPI, submitAPI } from "../utils/api";
import { useNavigate } from "react-router-dom";

export const updateTimes = (date) => {
  const firstDash = date.indexOf("-");
  const secondDash = date.indexOf("-", firstDash + 1);
  const year = Number(date.slice(0, firstDash));
  const month = Number(date.slice(firstDash + 1, secondDash));
  const day = Number(date.slice(secondDash + 1));

  const dateObj = new Date();
  dateObj.setFullYear(year, month, day);
  const times = fetchAPI(dateObj);

  return times;
};

export const initializeTimes = () => {
  const todayDate = new Date();
  const newTimes = fetchAPI(todayDate);
  return newTimes;
};

const reducer = (state, action) => {
  if (action.type === "updateTimes") {
    return updateTimes(action.date);
  }
  if (action.type === "initializeTimes") {
    return action.times;
  }
  return state;
};

const BookingPage = () => {
  const [initialTimes, setInitialTimes] = useState(["19:00", "20:00"]);
  const [availableTimes, dispatchTimes] = useReducer(reducer, initialTimes);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/courseraap/capstone/main/api.js")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((textResponse) => {
        const scriptFunction = new Function(textResponse);
        scriptFunction();
        const todayDate = new Date();
        const newTimes = fetchAPI(todayDate);

        setInitialTimes(newTimes);
      });
  }, []);

  useEffect(() => {
    dispatchTimes({ type: "initializeTimes", times: initialTimes });
  }, [initialTimes]);

  return (
    <>
      <Header />
      <BookingForm
        availableTimes={availableTimes}
        onDateChanged={(date) => {
          dispatchTimes({ type: "updateTimes", date });
        }}
        onSubmit={(form) => {
          const submitted = submitAPI(form);
          if (submitted) {
            navigate("/confirmed");
          }
        }}
      />
      <Footer />
    </>
  );
};

export default BookingPage;
