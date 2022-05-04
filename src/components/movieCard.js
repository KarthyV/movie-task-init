import React, { useState } from "react";

const MovieCard = (props) => {
  const [show, setShow] = useState(false);
  const { name, image, description, rating } = props.movie;

  return (
    <div className="column">
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img src={image} alt={name} />
          </div>
          <div className="content">
            <div onClick={() => setShow(!show)} className="ui styled accordion">
              <div className={`${show ? "active title" : "title"}`}>
                <div className="header">{name}</div>

                <i className="dropdown icon" />
              </div>

              <div className={`${show ? "active content" : "content"}`}>
                <em>{description}</em>
              </div>
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
