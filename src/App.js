import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBookingPage from "./pages/ConfirmedBookingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/confirmed" element={<ConfirmedBookingPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
