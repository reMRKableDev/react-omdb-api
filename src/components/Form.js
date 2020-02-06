import React from "react";
import "./Form.css";

function Form({ handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="movie"
        placeholder="Enter Movie name"
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Form;
