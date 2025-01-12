import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  handleFormSubmitHelper,
  handleChangeForTitleHelper,
} from "../../helpers";
import "./Form.css";

function Form({ handleMovieSearch }) {
  const [userInput, setUserInput] = useState("");

  return (
    <form
      onSubmit={(e) =>
        handleFormSubmitHelper(e, userInput, handleMovieSearch, setUserInput)}
      className="form"
    >
      <input
        type="text"
        placeholder="Enter Your Movie Title..."
        name="movie"
        value={userInput}
        onChange={(e) => handleChangeForTitleHelper(e, setUserInput)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

Form.propTypes = {
  handleMovieSearch: PropTypes.func.isRequired,
};

export default Form;
