import React, { useState } from "react";
import Axios from "axios";
import Form from "../Form/Form";
import Movies from "../Movies/Movies";
import "./App.css";

const { REACT_APP_API_KEY } = process.env;

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [retrievedMovie, setRetrievedMovie] = useState("");

  const handleChangeForTitle = (event) => {
    setUserInput(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    Axios.get(
      `https://www.omdbapi.com/?apikey=${REACT_APP_API_KEY}&t=${userInput}`
    )
      .then((response) => setRetrievedMovie(response.data))
      .catch((error) => console.error(`Something went wrong ${error}`));
  };

  return (
    <div className="App">
      <header className="App_header">
        <h1>
          M
          <span role="img" aria-label="coder">
            🎥
          </span>
          vieFinder
        </h1>

        <Form
          handleClick={(e) => handleClick(e)}
          handleChange={(e) => handleChangeForTitle(e)}
        />
      </header>
      <section>
        <Movies movies={retrievedMovie} />
      </section>
    </div>
  );
};

export default App;
