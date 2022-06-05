import React, { useState, useEffect } from "react";
import "./style.css";
import { API } from "./data/api";
import MovieCard from "./components/movieCard";
import AddMovie from "./components/addMovie";
import EditMovie from "./components/editMovie";
import Header from "./components/Header";
import NotFound from "./components/notFound";
import MovieDetail from "./components/movieDetail";
import ColorGame from "./components/colorGame";
import { Routes, Route, Navigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";

const App = () => {
  const [movies, setMovies] = useState([]);

  function getMovies() {
    fetch(`${API}`, {
      method: "GET",
    }).then((res) => res.json().then((data) => setMovies(data)));
  }
  useEffect(() => {
    getMovies();
  }, []);

  function addMovie(newMovie) {
    fetch(`${API}`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { "Content-Type": "application/json" },
    }).then(() => getMovies());
  }

  function editMovie(movieDetails, id) {
    fetch(`${API}/${id}`, {
      method: "PUT",
      body: JSON.stringify(movieDetails),
      headers: { "Content-Type": "application/json" },
    }).then(() => getMovies());
  }

  function deleteMovie(id) {
    fetch(`${API}/${id}`, {
      method: "DELETE",
    }).then(() => getMovies());
  }

  const AllMovies = () => {
    return (
      <div className="ui grid ">
        {movies.map((movie, i) => {
          return (
            <MovieCard
              movie={movie}
              id={movie.id}
              key={movie.id}
              delete={
                <DeleteIcon
                  sx={{ color: red[500] }}
                  onClick={() => deleteMovie(movie.id)}
                >
                  Delete
                </DeleteIcon>
              }
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="ui container">
      <Header />
      <Routes>
        <Route path="/add" element={<AddMovie onAdd={addMovie} />} />
        <Route
          path="/movies/edit/:id"
          element={<EditMovie onSave={editMovie} />}
        />
        <Route path="/" element={<AllMovies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/colorgame" element={<ColorGame />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </div>
  );
};

export default App;
