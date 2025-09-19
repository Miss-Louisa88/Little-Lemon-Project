import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock react-router-dom for BrowserRouter
jest.mock("react-router-dom", () => ({
  BrowserRouter: ({ children }) => <>{children}</>,
}));

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
