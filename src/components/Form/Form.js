import React from "react";
import "./Form.css";

function Form({ handleClick, handleChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Movie Title..."
        name="movie"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default Form;
