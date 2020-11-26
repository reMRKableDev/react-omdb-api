import React, { useState, useEffect } from "react";
import MovieNotFound from "./MovieNotFound/MovieNotFound";
import MovieFound from "./MovieFound/MovieFound";
import SearchInfo from "../../pages/SearchInfoPage/SearchInfo";
import "./Movies.css";

const Movies = (props) => {
  const { movies } = props;
  const [movieToShow, setMovieToShow] = useState("");

  const displayMovieResults = () => {
        return movieToShow.Error ? (
          <MovieNotFound notFound={movieToShow.Error} />
        ) : (
          <MovieFound foundMovie={movieToShow} />
        );
      };

  useEffect(() => {
      setMovieToShow(movies)
  }, [movies])
  return (
    movieToShow ? displayMovieResults() : <SearchInfo />
  );
}

export default Movies;
