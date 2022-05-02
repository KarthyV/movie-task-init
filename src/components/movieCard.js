import React from "react";

const MovieCard = (props) => {
  const { name, image, description, rating } = props.movie;

  return (
    <div className="column">
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img src={image} alt={name} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
            <div className="description">
              <em>{description}</em>
            </div>
          </div>
          <div className="extra content">
            <span className="right floated">
              Rating: <i className="star icon" /> {rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
