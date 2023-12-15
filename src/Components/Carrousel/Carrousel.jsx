import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Flat from '../../Datas/Flat.json';
import LeftArrow from "../../Svg/arrow_back.svg";
import RightArrow from "../../Svg/arrow_forward.svg";

function Carrousel({ flatId }) {
  const [currentIndex, setCurrentIndex] = useState(2); 

  const flat = Flat.find(item => item.id === flatId);

  if (!flat) {
    return <Navigate to="/404" />;
  }

  const totalPictures = flat.pictures.length;

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex > 2 ? prevIndex - 1 : totalPictures));
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex < totalPictures ? prevIndex + 1 : 2));
  };

  return (
    <div className="carrousel">
        <img src={LeftArrow} alt="Left Arrow" onClick={goToPrevious} className="carrousel__arrow" />
        <img src={flat.pictures[currentIndex - 1]} alt={`${flat.title} - ${currentIndex - 1}`} className="carrousel__img" />
        <span className="carrousel__count">{`${currentIndex - 1} / ${totalPictures - 1}`}</span>
        <img src={RightArrow} alt="Right Arrow" onClick={goToNext} className="carrousel__arrow--right" />
    </div>
  );
}

export default Carrousel;
