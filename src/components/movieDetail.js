import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../data/api";

const MovieDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`${API}/${id}`).then((res) =>
      res.json().then((data) => setMovie(data))
    );
  }, [id]);

  return (
    <div>
      <div className="ui segment">
        <div className="ui embed">
          <iframe title={movie.name} src={movie.trailer} />
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
        <i className="angle left icon"></i> Back
      </button>
    </div>
  );
};

export default MovieDetail;
