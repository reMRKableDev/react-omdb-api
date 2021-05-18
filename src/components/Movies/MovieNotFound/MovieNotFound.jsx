import React from "react";
import PropTypes from "prop-types";
import "../Movies.css";
import NotFoundIcon from "../../../assets/images/not-found.svg";

const MovieNotFound = ({ notFound }) => {
  const renderNotFoundNotice = `Sorry... ${notFound}`;

  return (
    <article>
      <h2>{renderNotFoundNotice}</h2>

      <figure className="figure_container">
        <img src={NotFoundIcon} alt="not-found-icon" />
      </figure>

      <p>But don&quot;t worry, it could be a typo! </p>

      <p>
        We really need you to spell the movie title exactly as it is originally
        written. Try again or search for a new movie
      </p>
    </article>
  );
};

export default MovieNotFound;

MovieNotFound.propTypes = {
  notFound: PropTypes.string.isRequired,
};
