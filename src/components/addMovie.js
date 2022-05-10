import React, { useState } from "react";

const AddMovie = (props) => {
  const [movieDetails, setMovieDetails] = useState({
    name: "",
    rating: "",
    description: "",
    image: "",
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
      !movieDetails.image
    ) {
      alert("Please enter all the required details");
    } else {
      props.onAdd(movieDetails);
      setMovieDetails({
        name: "",
        rating: "",
        description: "",
        image: "",
      });
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
        <button className="ui  black button" type="submit">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
