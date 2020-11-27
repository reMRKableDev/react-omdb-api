import React from "react";
import "./Form.css";

function Form({ handleClick, handleChange }) {
  return (
    <section className='form'>
      <input
        type="text"
        placeholder="Enter Your Movie Title..."
        name="movie"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Search</button>
    </section>
  );
}

export default Form;
