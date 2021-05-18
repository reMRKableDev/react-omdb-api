import React from "react";
import PropTypes from "prop-types";
import "../Movies.css";

const MovieFound = ({ foundMovie }) => (
  <article>
    <h2>
      <span role="img" aria-label="coder">
        🍿
      </span>
      {foundMovie?.Title}
      (
      {foundMovie?.Year}
      )
      <span role="img" aria-label="coder">
        🍿
      </span>
    </h2>
    <p className="red_text">
      <em>{foundMovie.Plot}</em>
    </p>
    <p>
      <strong>Cast:</strong> 
      {' '}
      <em>{foundMovie?.Actors}</em>
    </p>

    <section className="flex_row">
      <div className="flex_column">
        <figure className="figure_container">
          <img
            src={foundMovie.Poster}
            alt="movie-poster"
            data-testid="movie-image"
          />
        </figure>
      </div>
      <div className="flex_column justify_center description_align">
        <p>
          <strong>Rated:</strong> 
          {' '}
          <em>{foundMovie?.Rated}</em>
        </p>
        <p>
          <strong>Runtime:</strong> 
          {' '}
          <em>{foundMovie?.Runtime}</em>
        </p>
        <p>
          <strong>Genre:</strong> 
          {' '}
          <em>{foundMovie?.Genre}</em>
        </p>
        <p>
          <strong>Director:</strong> 
          {' '}
          <em>{foundMovie?.Director}</em>
        </p>
        <p>
          <strong>Country:</strong> 
          {' '}
          <em>{foundMovie?.Country}</em>
        </p>
        <p>
          <strong>Language:</strong> 
          {' '}
          <em>{foundMovie?.Language}</em>
        </p>
      </div>
    </section>
  </article>
);

export default MovieFound;

MovieFound.propTypes = {
  foundMovie: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  ).isRequired,
};
