import React, { Component } from "react";
import Axios from "axios";
import Form from "./components/Form";
import Movies from "./components/Movies";
import "./App.css";

const OMDB_API_KEY = "39aae644";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "",
      movieApiData: ""
    };
  }

  handleInputChange = event => {
    this.setState({ movieName: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    Axios.get(
      `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${this.state.movieName}`
    ).then(response => this.setState({ movieApiData: response.data }));
  };

  render() {
    return (
      <div className="App">
        <header className="App_header">
          <h1>Search For Your Favorite Movie</h1>
          <Form
            handleChange={this.handleInputChange}
            handleSubmit={this.handleFormSubmit}
          />
        </header>
        <section>
          <Movies movies={this.state.movieApiData} />
        </section>
      </div>
    );
  }
}

export default App;
