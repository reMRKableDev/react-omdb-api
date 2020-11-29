import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MovieNotFound from "./MovieNotFound/MovieNotFound";
import MovieFound from "./MovieFound/MovieFound";
import SearchInfo from "../../pages/SearchInfoPage/SearchInfo";
import "./Movies.css";

const Movies = ({ movies }) => {
  const [movieToShow, setMovieToShow] = useState({});

  const displayMovieResults = () => {
    return movieToShow.Error ? (
      <MovieNotFound notFound={movieToShow.Error} />
    ) : (
      <MovieFound foundMovie={movieToShow} />
    );
  };

  useEffect(() => {
    setMovieToShow(movies);
  }, [movies]);

  return Object.entries(movieToShow).length === 0 &&
    movieToShow.constructor === Object ? (
    <SearchInfo />
  ) : (
    displayMovieResults()
  );
};

export default Movies;

Movies.propTypes = {
  movies: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  ).isRequired,
};
