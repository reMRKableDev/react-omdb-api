import React, { Component } from "react";
import MovieNotFound from "./MovieNotFound/MovieNotFound";
import MovieFound from "./MovieFound/MovieFound";
import SearchInfo from "../../pages/SearchInfoPage/SearchInfo";
import "./Movies.css";

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
