import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";

describe("Form Test Suite", () => {
  const handleMovieSearchMock = jest.fn();

  beforeEach(() => {
    render(<Form handleMovieSearch={handleMovieSearchMock} />);
  });

  test("should validate component renders with correct values ", () => {
    const expectedPlaceholderValue = "Enter Your Movie Title...";
    const expectedButtonValue = "Search";

    expect(screen.getByText(expectedButtonValue)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(expectedPlaceholderValue)
    ).toBeInTheDocument();
  });

  test("should validate input behavior ", () => {
    const inputValue = "bad boys";

    fireEvent.change(screen.getByPlaceholderText(/Movie/i), {
      target: { value: inputValue },
    });

    fireEvent.click(screen.getByText(/search/i));

    expect(handleMovieSearchMock).toBeCalled();
  });
});
