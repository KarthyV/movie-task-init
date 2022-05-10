import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import moviesList from "../data/moviesList";

const MovieDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const movie = moviesList[id];
  return (
    <div>
      <div className="ui segment">
        <div className="ui embed">
          <iframe src={movie.trailer} />
        </div>
        <div className="ui header">
          {movie.name}
          <div className="ui right aligned header">
            Rating: <i className="star icon" /> {movie.rating}
          </div>
        </div>
        <div className="description">{movie.description}</div>
      </div>
      <button onClick={() => navigate(-1)} className="ui black button">
        <i class="angle left icon"></i> Back
      </button>
    </div>
  );
};

export default MovieDetail;
