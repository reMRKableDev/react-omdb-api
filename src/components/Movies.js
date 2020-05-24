import React, { Component } from "react";
import "./styles/Movies.css";

import MovieNotFound from "./MovieNotFound";
import MovieFound from "./MovieFound";
import SearchInfo from "./SearchInfo";

class Movies extends Component {
  state = {
    movieToShow: ""
  };

  componentDidUpdate(prevProps) {
    if (this.props.movies !== prevProps.movies) {
      this.setState({ movieToShow: this.props.movies });
    }
  }

  displayMovieResults = () => {
    return this.state.movieToShow.Error ? (
      <MovieNotFound notFound={this.state.movieToShow.Error} />
    ) : (
      <MovieFound foundMovie={this.state.movieToShow} />
    );
  };

  render() {
    return this.state.movieToShow ? this.displayMovieResults() : <SearchInfo />;
  }
}

export default Movies;
