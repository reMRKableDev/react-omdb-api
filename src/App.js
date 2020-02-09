import React, { Component } from "react";
import Axios from "axios";
import Form from "./components/Form";
import Movies from "./components/Movies";
import "./App.css";
/* 
  1. Base App Component for our application.

  2. Render a form which allows the user to submit data.

  3. Update the state of the App component with user input.
      - Some logic in the event the user writes.

  4. Retrieve data from API data using the API_KEY.
      - Some logic in the event the user decides to search.

  5. Display the retrieved movie
*/

const API_KEY = "39aae644";

// 1. Base Component
class App extends Component {
  state = {
    userInput: "",
    retrievedMovieData: ""
  };

  // 3. function that retrieves the user input and updates my state
  handleChangeForTitle = event => {
    this.setState({
      userInput: event.target.value
    });
  };

  // 4. function that uses this.state.userInput and searches from OMDB API.
  handleClick = event => {
    event.preventDefault();

    Axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&t=${this.state.userInput}`
    )
      .then(response => this.setState({ retrievedMovieData: response.data }))
      .catch(error => console.error(`Something went wrong ${error}`));
  };

  render() {
    return (
      <div className="App">
        <header className="App_header">
          <h1>M<span role="img" aria-label="coder">🎥</span>vieFinder</h1>

          {/* 2. Form for submitting data*/}
          <Form
            handleClick={this.handleClick}
            handleChange={this.handleChangeForTitle}
          />
        </header>
        <section>
          {/* 5. Display retrieved movie */}
          <Movies movies={this.state.retrievedMovieData} />
        </section>
      </div>
    );
  }
}

export default App;
