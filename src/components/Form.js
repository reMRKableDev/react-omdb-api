import React from "react";
import "./styles/Form.css";

function Form({ handleClick, handleChange }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Enter Your Movie Title..."
        name="movie"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Search</button>
    </form>
  );
}

export default Form;
