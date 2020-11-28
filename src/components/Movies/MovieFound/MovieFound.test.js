import React from "react";
import { render, screen } from "@testing-library/react";
import MovieFound from "./MovieFound";
import { sampleMovie } from "../../../fixtures";

describe("MovieFound Test Suite", () => {
  beforeEach(() => {
    render(<MovieFound foundMovie={sampleMovie} />);
  });

  test("should validate component renders with correct values ", () => {
    expect(
      screen.getByText(`${sampleMovie.Title}(${sampleMovie.Year})`)
    ).toBeInTheDocument();
    expect(screen.getByText(sampleMovie.Plot)).toBeInTheDocument();
    expect(screen.getByText(sampleMovie.Actors)).toBeInTheDocument();
    expect(screen.getByTestId("movie-image").src).toMatch(sampleMovie.Poster);
    expect(screen.getByText(sampleMovie.Rated)).toBeInTheDocument();
    expect(screen.getByText(sampleMovie.Runtime)).toBeInTheDocument();
    expect(screen.getByText(sampleMovie.Genre)).toBeInTheDocument();
    expect(screen.getByText(sampleMovie.Director)).toBeInTheDocument();
    expect(screen.getByText(sampleMovie.Country)).toBeInTheDocument();
    expect(screen.getByText(sampleMovie.Language)).toBeInTheDocument();
  });
});
