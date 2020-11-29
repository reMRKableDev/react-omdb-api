import React from "react";
import { render, screen } from "@testing-library/react";
import Movies from "./Movies";
import sampleMovie from "../../fixtures";

describe("Movies Test Suite", () => {
  test("should validate component renders with correct movie ", () => {
    render(<Movies movies={sampleMovie} />);

    expect(screen.getByText(sampleMovie.Plot)).toBeInTheDocument();
  });

  test("should validate component renders with correct movie ", () => {
    const movieError = { Error: "Movie Not Found!" };
    render(<Movies movies={movieError} />);

    expect(
      screen.getByText(`Sorry... ${movieError.Error}`)
    ).toBeInTheDocument();
  });
});
