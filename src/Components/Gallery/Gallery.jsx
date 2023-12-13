import React from "react";

function Gallery({ id, title, pictures }) {
  return (
    <div className="gallery__card" id={id}>
      <img src={pictures[0]} alt={`Gallery ${id}`} />
      <p className="gallery__title">{title}</p>
    </div>
  );
}

export default Gallery;
