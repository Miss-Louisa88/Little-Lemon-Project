/* global fetchAPI, submitAPI */
import React, { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";

// --- Step 1: Initialize times for today ---
const initializeTimes = () => {
  const today = new Date();
  if (typeof fetchAPI === "function") {
    return fetchAPI(today);
  }
  // fallback times
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
};

// --- Step 2: Reducer to update times ---
const updateTimes = (state, action) => {
  if (action.type === "update_times") {
    if (typeof fetchAPI === "function") {
      return fetchAPI(new Date(action.date));
    } else {
      // fallback times
      return ["17:00", "18:00", "19:00", "20:00", "21:00"];
    }
  }
  return state;
};

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const navigate = useNavigate();

  // --- Step 3: submitForm function ---
  const submitForm = (formData) => {
    if (typeof submitAPI === "function" && submitAPI(formData)) {
      navigate("/confirmed-booking");
    } else {
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm} // pass to BookingPage
            />
          }
        />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;
