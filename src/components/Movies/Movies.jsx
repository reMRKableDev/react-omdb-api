import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Movies.css";

import { isMovieObjectEmptyHelper } from "../../helpers";

import MovieNotFound from "./MovieNotFound/MovieNotFound";
import MovieFound from "./MovieFound/MovieFound";
import SearchInfo from "../../pages/SearchInfoPage/SearchInfo";

function Movies({ movies }) {
  const [movieToShow, setMovieToShow] = useState({});

  const displayMovieResults = () =>
    movieToShow.Error ? (
      <MovieNotFound notFoundError={movieToShow.Error} />
    ) : (
      <MovieFound foundMovie={movieToShow} />
    );

  useEffect(() => {
    setMovieToShow(movies);
  }, [movies]);

  return isMovieObjectEmptyHelper(movieToShow) ? (
    <SearchInfo />
  ) : (
    displayMovieResults()
  );
}

export default Movies;

Movies.propTypes = {
  movies: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  ).isRequired,
};
