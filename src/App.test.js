import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import Homepage from "./pages/Homepage";
import BookingForm from "./components/bookingForm/BookingForm";
import { initializeTimes, updateTimes } from "./pages/BookingPage";

test("Renders the bookingForm heading and tests submit button", () => {
  let newDates = [];
  render(
    <BookingForm
      availableTimes={["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]}
      onSubmit={() => {
        newDates = ["17:00", "18:00"];
      }}
    />
  );
  const headingElement = screen.getByText("Book Now");

  expect(headingElement).toBeInTheDocument();

  const reserveButton = screen.getByText("Make Your reservation");

  fireEvent.click(reserveButton);

  expect(JSON.stringify(newDates)).toBe(JSON.stringify(["17:00", "18:00"]));
});

test("tests initializeTimes and updateTimes", () => {
  const initializedTimes = initializeTimes();
  expect(JSON.stringify(initializedTimes)).toBe(
    JSON.stringify(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])
  );

  const updatedTimes = updateTimes("2024-09-12");
  expect(JSON.stringify(updatedTimes)).toBe(
    JSON.stringify(["17:00", "18:00", "19:00", "22:00"])
  );
});
