import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("SearchInto Test Suite", () => {
  test("should validate component renders with correct movie ", () => {
    render(<App />);

    expect(screen.getByText(/viefinder/i)).toBeInTheDocument();
  });
});
