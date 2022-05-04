import React, { useState } from "react";
import "./style.css";
import MovieCard from "./components/movieCard";
import movieList from "./data/moviesList";
import AddMovie from "./components/addMovie";

const App = () => {
  const [movies, setMovies] = useState(movieList);

  function addMovie(newMovie) {
    setMovies((prevMovies) => {
      return [newMovie, ...prevMovies];
    });
  }
  return (
    <div className="ui container">
      <AddMovie onAdd={addMovie} />
      <div className="ui stackable four column grid">
        {movies.map((movie, i) => {
          return <MovieCard movie={movie} key={i} />;
        })}
      </div>
    </div>
  );
};

export default App;
