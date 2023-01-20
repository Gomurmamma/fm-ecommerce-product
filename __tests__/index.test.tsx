import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomePage from "../pages/index";

describe("HomePage", () => {
  it("renders without crashing", () => {
    expect(() => render(<HomePage />)).not.toThrow();
  });
});
