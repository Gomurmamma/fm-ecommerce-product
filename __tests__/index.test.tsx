import React from "react";
import "@testing-library/jest-dom";
import App from "../pages/_app";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";
import HomePage from "../pages/index";

describe("HomePage", () => {
  const initialState = { cartmodal: false };
  const mockStore = configureStore();
  let store;

  it("renders without crashing", () => {
    store = mockStore(initialState);
    expect(() =>
      render(
        <Provider store={store}>
          <HomePage />
        </Provider>
      )
    ).not.toThrow();
  });
});
