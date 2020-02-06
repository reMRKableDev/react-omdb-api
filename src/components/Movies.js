import React, { Component } from "react";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: ""
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.movies !== prevProps.movies) {
      this.setState({ movieList: this.props.movies });
    }
  }

  render() {
    return this.state.movieList ? (
      <article>
        <h2>{this.state.movieList.Title}</h2>
        <figure>
          <img src={this.state.movieList.Poster} alt="movie-poster" />
          <figcaption>{this.state.movieList.Plot}</figcaption>
        </figure>
      </article>
    ) : (
      <p>bye</p>
    );
  }
}

export default Movies;
