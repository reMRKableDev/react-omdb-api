import React, { Component } from "react";
import Axios from "axios";
import Form from "./Form";
import Movies from "./Movies";
import "./styles/App.css";

const API_KEY = "39aae644";

class App extends Component {
  state = {
    userInput: "",
    retrievedMovieData: ""
  };

  handleChangeForTitle = event => {
    this.setState({
      userInput: event.target.value
    });
  };

  handleClick = event => {
    event.preventDefault();

    Axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&t=${this.state.userInput}`
    )
      .then(response => this.setState({ retrievedMovieData: response.data }))
      .catch(error => console.error(`Something went wrong ${error}`));
  };

  render() {
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
            handleClick={this.handleClick}
            handleChange={this.handleChangeForTitle}
          />
        </header>
        <section>
          <Movies movies={this.state.retrievedMovieData} />
        </section>
      </div>
    );
  }
}

export default App;
