import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Header = () => {
  const [home, setHome] = useState(true);
  const [add, setAdd] = useState(false);
  const [game, setGame] = useState(false);

  const onClick = (e) => {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML === "Home") {
      setAdd(false);
      setGame(false);
      setHome(true);
    }
    if (e.target.innerHTML === "Add New Movie") {
      setAdd(true);
      setHome(false);
      setGame(false);
    }
    if (e.target.innerHTML === "Color Game") {
      setAdd(false);
      setHome(false);
      setGame(true);
    }
  };

  return (
    <div className="ui secondary pointing menu">
      <Link to="/" onClick={onClick} className={`item ${home ? "active" : ""}`}>
        Home
      </Link>
      <Link
        to="/add"
        onClick={onClick}
        className={`item ${add ? "active" : ""}`}
      >
        Add New Movie
      </Link>
      <Link
        to="/colorgame"
        onClick={onClick}
        className={`item ${game ? "active" : ""}`}
      >
        Color Game
      </Link>
    </div>
  );
};

export default Header;
