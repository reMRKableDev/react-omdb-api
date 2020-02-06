import React, { Component } from "react";

class Movies extends Component {
  state = {
    movieToShow: ""
  };

  // Lifecyle method to check state status when updated
  componentDidUpdate(prevProps) {
    if (this.props.movies !== prevProps.movies) {
      this.setState({ movieToShow: this.props.movies });
    }
  }

  // Ternary operation that checks the state of this component and returns either the movie or some placeholder text
  render() {
    return this.state.movieToShow ? (
      <article>
        <h2>{this.state.movieToShow.Title}</h2>
        <figure>
          <img src={this.state.movieToShow.Poster} alt="" />
          <figcaption>Actors: {this.state.movieToShow.Actors}</figcaption>
        </figure>
      </article>
    ) : (
      <article>
        <h2>Search For Your Movie And I Will Change </h2>
        <p>
          <span role="img" aria-label="coder"> 👨🏾‍💻</span> reMRKable Dev &copy;... made with love <span role="img" aria-label="coder"> 👨🏾‍💻</span>
        </p>
      </article>
    );
  }
}

export default Movies;
