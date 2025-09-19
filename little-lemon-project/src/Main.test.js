/* global fetchAPI */
import React from "react"; // needed for JSX
import { initializeTimes, updateTimes } from "./Main";

// Mock react-router-dom for Jest
jest.mock("react-router-dom", () => {
  const React = require("react");
  return {
    Routes: (props) =>
      React.createElement(React.Fragment, null, props.children),
    Route: (props) => props.element,
    useNavigate: () => jest.fn(),
  };
});

// Mock fetchAPI globally
beforeAll(() => {
  global.fetchAPI = jest.fn();
});

beforeEach(() => {
  fetchAPI.mockReset();
});

afterAll(() => {
  delete global.fetchAPI;
});

describe("Main component API functions", () => {
  test("initializeTimes returns correct array of available times", () => {
    fetchAPI.mockReturnValue(["17:00", "18:00", "19:00", "20:00", "21:00"]);
    const times = initializeTimes();
    expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
    expect(fetchAPI).toHaveBeenCalledTimes(1);
  });

  test("updateTimes returns times for selected date", () => {
    fetchAPI.mockReturnValue(["17:00", "18:00", "19:00", "20:00", "21:00"]);
    const state = ["17:00", "18:00"];
    const action = { type: "update_times", date: "2023-05-01" };
    const result = updateTimes(state, action);
    expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
    expect(fetchAPI).toHaveBeenCalledWith(new Date("2023-05-01"));
  });
});
