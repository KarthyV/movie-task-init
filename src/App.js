import React from "react";
import MovieCard from "./components/movieCard";
import "./style.css";
import movieList from "./data/moviesList";

const App = () => {
  return (
    <div className="ui container">
      <div className="ui stackable four column grid">
        {movieList.map((movie, i) => {
          return <MovieCard movie={movie} key={i} />;
        })}
      </div>
    </div>
  );
};

export default App;
