import React, { Component } from "react";

class Movies extends Component {
  state = {
    moviesToShow: ""
  };

  // Lifecyle method to check state status when updated
  componentDidUpdate(prevProps) {
    if (this.props.movies !== prevProps.movies) {
      this.setState({ moviesToShow: this.props.movies });
    }
  }

  render() {
    return this.state.moviesToShow ? (
      <article>
        <h2>{this.state.moviesToShow.Title}</h2>
        <figure>
          <img src={this.state.moviesToShow.Poster} alt="" />
          <figcaption>Actors: {this.state.moviesToShow.Actors}</figcaption>
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
