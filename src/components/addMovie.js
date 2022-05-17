import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
impo;

const AddMovie = (props) => {
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState({
    name: "",
    rating: "",
    description: "",
    image: "",
    trailer: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setMovieDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    if (
      !movieDetails.name ||
      !movieDetails.rating ||
      !movieDetails.description ||
      !movieDetails.image ||
      !movieDetails.trailer
    ) {
      alert("Please enter all the required details");
    } else {
      props.onAdd(movieDetails);
      setMovieDetails({
        name: "",
        rating: "",
        description: "",
        image: "",
        trailer: "",
      });
      navigate("/");
    }
  }

  return (
    <div className="addMovie">
      <form action="#" onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Movie Name</label>
          <input
            name="name"
            onChange={handleChange}
            value={movieDetails.name}
            type="text"
            placeholder="Enter movie name"
          />
        </div>
        <div className="field">
          <label>Give Rating</label>
          <input
            name="rating"
            onChange={handleChange}
            value={movieDetails.rating}
            type="text"
            placeholder="Enter the Rating"
          />
        </div>
        <div className="field">
          <label>Poster Link</label>
          <input
            name="image"
            onChange={handleChange}
            value={movieDetails.image}
            type="text"
            placeholder="Paste poster link here"
          />
        </div>

        <div className="field">
          <label>About Movie</label>
          <input
            name="description"
            onChange={handleChange}
            value={movieDetails.description}
            type="text"
            placeholder="description"
          />
        </div>
        <div className="field">
          <label>Trailer Link</label>
          <input
            name="trailer"
            onChange={handleChange}
            value={movieDetails.trailer}
            type="text"
            placeholder="Trailer Link"
          />
        </div>
        <button className="ui  black button" type="submit">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
