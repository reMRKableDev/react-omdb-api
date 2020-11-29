import React from "react";
import { render, screen } from "@testing-library/react";
import MovieFound from "./MovieFound";
import { fakeSampleMovie }  from "../../../fixtures";

describe("MovieFound Test Suite", () => {
  beforeEach(() => {
    render(<MovieFound foundMovie={fakeSampleMovie} />);
  });

  test("should validate component renders with correct values ", () => {
    expect(
      screen.getByText(`${fakeSampleMovie.Title}(${fakeSampleMovie.Year})`)
    ).toBeInTheDocument();
    expect(screen.getByText(fakeSampleMovie.Plot)).toBeInTheDocument();
    expect(screen.getByText(fakeSampleMovie.Actors)).toBeInTheDocument();
    expect(screen.getByTestId("movie-image").src).toMatch(fakeSampleMovie.Poster);
    expect(screen.getByText(fakeSampleMovie.Rated)).toBeInTheDocument();
    expect(screen.getByText(fakeSampleMovie.Runtime)).toBeInTheDocument();
    expect(screen.getByText(fakeSampleMovie.Genre)).toBeInTheDocument();
    expect(screen.getByText(fakeSampleMovie.Director)).toBeInTheDocument();
    expect(screen.getByText(fakeSampleMovie.Country)).toBeInTheDocument();
    expect(screen.getByText(fakeSampleMovie.Language)).toBeInTheDocument();
  });
});
