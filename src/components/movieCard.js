import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { pink } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";

const MovieCard = (props) => {
  const [show, setShow] = useState(false);
  const { name, image, description, rating } = props.movie;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="eight wide tablet five wide computer sixteen wide mobile column">
      <div className="ui link cards">
        <div className="card black">
          <div onClick={() => navigate(`/movie/${props.id}`)} className="image">
            <img src={image} alt={name} />
          </div>
          <div className="content">
            <div
              onClick={() => setShow(!show)}
              className="ui styled accordion black"
            >
              <div className={`${show ? "active title" : "title"}  black`}>
                <div className="header black">{name}</div>

                <i className="dropdown icon" />
              </div>

              <div className={`${show ? "active content" : "content"}`}>
                <em>{description}</em>
              </div>
            </div>
          </div>

          <div className="content">
            <Badge
              onClick={() => setLike(like + 1)}
              badgeContent={like}
              color="primary"
              className="like"
            >
              <FavoriteIcon sx={{ color: pink[700] }} />
            </Badge>
            <Badge
              onClick={() => setDislike(dislike + 1)}
              badgeContent={dislike}
              color="primary"
              className="like"
            >
              <ThumbDownAltIcon color="primary" />
            </Badge>
            <Badge className="like">{props.delete}</Badge>
            <Badge color="primary" className="like">
              <EditIcon
                onClick={() => navigate(`/movie/edit/${props.id}`)}
                color="primary"
              />
            </Badge>
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
