import React from "react";
import { render, screen } from "@testing-library/react";

import MovieNotFound from "./MovieNotFound";

describe("MovieNotFound Test Suite", () => {
  const notFound = "Movie Not Found!";

  beforeEach(() => {
    render(<MovieNotFound notFoundError={notFound} />);
  });

  test("should validate component renders with correct error message ", () => {
    expect(screen.getByText(`Sorry... ${notFound}`)).toBeInTheDocument();
    expect(screen.getByText(/originally written/i)).toBeInTheDocument();
  });
});
