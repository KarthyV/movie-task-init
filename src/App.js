import React, { useState } from "react";
import "./style.css";
import MovieCard from "./components/movieCard";
import movieList from "./data/moviesList";
import AddMovie from "./components/addMovie";
import Header from "./components/Header";
import NotFound from "./components/notFound";
import MovieDetail from "./components/movieDetail";
import ColorGame from "./components/colorGame";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const [movies, setMovies] = useState(movieList);

  function addMovie(newMovie) {
    setMovies((prevMovies) => {
      return [newMovie, ...prevMovies];
    });
  }

  const AllMovies = () => {
    return (
      <div className="ui stackable four column grid">
        {movies.map((movie, i) => {
          return <MovieCard movie={movie} id={i} key={i} />;
        })}
      </div>
    );
  };

  return (
    <div className="ui container">
      <Header />
      <Routes>
        <Route path="/add" element={<AddMovie onAdd={addMovie} />} />
        <Route path="/" element={<AllMovies />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/colorgame" element={<ColorGame />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </div>
  );
};

export default App;
