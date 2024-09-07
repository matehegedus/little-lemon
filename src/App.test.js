import { fireEvent, render, screen } from "@testing-library/react";

import BookingForm from "./components/bookingForm/BookingForm";
import { initializeTimes, updateTimes } from "./pages/BookingPage";
import { BrowserRouter } from "react-router-dom";

test("Renders the bookingForm heading and tests submit button", () => {
  let newDates = [];
  render(
    <BrowserRouter>
      <BookingForm
        availableTimes={["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]}
        onSubmit={() => {
          newDates = ["17:00", "18:00"];
        }}
      />
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Book Now");

  expect(headingElement).toBeInTheDocument();

  const reserveButton = screen.getByText("Make Your reservation");

  fireEvent.click(reserveButton);

  expect(JSON.stringify(newDates)).toBe(JSON.stringify(["17:00", "18:00"]));
});

test("tests initializeTimes and updateTimes", () => {
  const todayTimes = initializeTimes();
  localStorage.setItem("todayDate", todayTimes);

  const todayTimes2 = initializeTimes();
  localStorage.setItem("todayDate2", todayTimes2);

  expect(JSON.stringify(localStorage.getItem("todayDate"))).toBe(
    JSON.stringify(localStorage.getItem("todayDate2"))
  );

  const updatedTimes = updateTimes("2024-09-12");
  localStorage.setItem("updatedTimes", updatedTimes);
  const updatedTimes2 = updateTimes("2024-09-12");
  localStorage.setItem("updatedTimes2", updatedTimes2);

  expect(JSON.stringify(localStorage.getItem("updatedTimes"))).toBe(
    JSON.stringify(localStorage.getItem("updatedTimes2"))
  );
});

test("tests bookingForm validation", () => {
  let passedForm = {};
  render(
    <BrowserRouter>
      <BookingForm
        availableTimes={["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]}
        onSubmit={(form) => {
          passedForm = form;
        }}
      />
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();

  const reserveButton = screen.getByText("Make Your reservation");

  fireEvent.click(reserveButton);
  expect(passedForm.date.length).toBe(0);

  const noOfGuests = screen.getByTestId("guests");
  fireEvent.change(noOfGuests, { target: { value: 4 } });
  fireEvent.click(reserveButton);
  expect(passedForm.guests).toBe(4);

  const occasion = screen.getByTestId("occasion");
  fireEvent.change(occasion, { target: { value: "Anniversary" } });
  fireEvent.click(reserveButton);
  expect(passedForm.occasion).toBe("Anniversary");
});
