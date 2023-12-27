import React, { useState } from 'react';
import LeftArrow from "../../Svg/arrow_back.svg";
import RightArrow from "../../Svg/arrow_forward.svg";

function Carrousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(2);

  const totalPictures = images.length;

  if (totalPictures === 1) {
    return (
      <div className="carrousel">
        <img src={images[0]} alt={`Slider 1`} className="carrousel__img" />
      </div>
    );
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 2 ? prevIndex - 1 : totalPictures));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < totalPictures ? prevIndex + 1 : 2));
  };

  return (
    <div className="carrousel">
      <img src={LeftArrow} alt="Left Arrow" onClick={goToPrevious} className="carrousel__arrow" />
      <img src={images[currentIndex - 1]} alt={`Slider ${currentIndex - 1}`} className="carrousel__img" />
      <span className="carrousel__count">{`${currentIndex - 1} / ${totalPictures - 1}`}</span>
      <img src={RightArrow} alt="Right Arrow" onClick={goToNext} className="carrousel__arrow--right" />
    </div>
  );
}

export default Carrousel;
