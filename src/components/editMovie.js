import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../data/api";

const EditMovie = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState({
    name: "",
    rating: "",
    description: "",
    image: "",
    trailer: "",
  });

  useEffect(() => {
    fetch(`${API}/${id}`)
      .then((response) => response.json())
      .then((data) =>
        setMovieDetails({
          name: data.name,
          rating: data.rating,
          description: data.description,
          image: data.image,
          trailer: data.trailer,
        })
      );
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setMovieDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  }

  function onSave(event) {
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
      props.onSave(movieDetails, id);
      navigate("/");
    }
  }

  return (
    <div className="editMovie">
      <form action="#" onSubmit={onSave} className="ui form">
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
        <button className="ui green button" type="submit">
          Save
        </button>
        <button
          onClick={() => navigate(-1)}
          className="ui negative button"
          type="submit"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditMovie;
