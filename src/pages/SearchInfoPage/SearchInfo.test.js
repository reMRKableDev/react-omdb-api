import React from "react";
import { render, screen } from "@testing-library/react";
import SearchInfo from "./SearchInfo";

describe("SearchInto Test Suite", () => {
  beforeEach(() => {
    render(<SearchInfo />);
  });

  test("should validate component renders with correct title ", () => {
    const expectedValue = "Search For Your Movie And I Will Change";
    
    expect(screen.getByText(expectedValue)).toBeInTheDocument();
  });

  test("should validate component renders with emojis correctly ", async () => {
    const results = await screen.findAllByRole("img");

    expect(results).not.toBeNull();
    expect(typeof results).toBe("object");
    expect(results instanceof Array).toBe(true);
    expect(results.length).toBe(2);
  });
});
