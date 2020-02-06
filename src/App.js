import React, { Component } from "react";
import Axios from "axios";
import Form from "./components/Form";
import Movies from "./components/Movies";
import "./App.css";

const OMDB_API_KEY = "39aae644";

/* 
  1. App Component for our application.

  2. Render a form which allows the user to submit data.

  3. Update the state of the App component with user input.
      - Some logic in the event the user writes.

  4. Retrieve data from API data using the OMDB_API_KEY.
      - Some logic in the event the user decides to search.

  5. Display the retrieved movie
*/

class App extends Component {
  state = {
    userInput: "",
    retrievedOMDBApiData: ""
  };

  // function that retrieves the user input and updates my state
  handleChangeForTitle = event => {
    this.setState({
      userInput: event.target.value
    });
  };

  // function that uses this.state.userInput and searches from OMDB API.
  handleClick = event => {
    event.preventDefault();

    Axios.get(
      `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${this.state.userInput}`
    )
      .then(response => this.setState({ retrievedOMDBApiData: response.data }))
      .catch(error => console.error(`Something went wrong ${error}`));
  };

  render() {
    return (
      <div className="App">
        <header className="App_header">
          <h1>Find Your Favorite Movie</h1>
          <Form
            handleClick={this.handleClick}
            handleChange={this.handleChangeForTitle}
          />
        </header>
        <section>
          <Movies movies={this.state.retrievedOMDBApiData} />
        </section>
      </div>
    );
  }
}

export default App;
