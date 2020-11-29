import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import Movies from "../Movies/Movies";
import "./App.css";
import { handleApiCallHelper } from "../../helpers";

const App = () => {
  const [retrievedMovie, setRetrievedMovie] = useState({});
  const [movieToSearch, setMovieToSearch] = useState("");

  useEffect(
    () =>
      movieToSearch && handleApiCallHelper(movieToSearch, setRetrievedMovie),
    [movieToSearch]
  );

  const handleMovieToSearch = (movieInput) => {
    setMovieToSearch(movieInput);
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

        <Form handleMovieSearch={handleMovieToSearch} />
      </header>
      <section>
        <Movies movies={retrievedMovie} />
      </section>
    </div>
  );
};

export default App;
