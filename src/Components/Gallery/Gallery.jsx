import React from "react";
import { Link } from "react-router-dom";

function Gallery({ id, title, pictures }) {
  return (
    <Link to={`/flat/${id}`} className="gallery__card" id={id}>
      <img src={pictures[0]} alt={`Gallery ${id}`} />
      <p className="gallery__title">{title}</p>
    </Link>
  );
}

export default Gallery;
