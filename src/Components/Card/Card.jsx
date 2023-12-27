import React from "react";
import { Link } from "react-router-dom";

function Card({ id, title, cover }) {
  return (
    <Link to={`/flat/${id}`} className="gallery__card" id={id}>
      <img src={cover} alt={`Gallery ${id}`} />
      <p className="gallery__title">{title}</p>
    </Link>
  );
}

export default Card;
