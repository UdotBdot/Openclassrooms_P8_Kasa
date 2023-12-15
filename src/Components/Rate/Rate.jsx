import React from 'react';
import Flat from '../../Datas/Flat.json';
import emptyStar from "../../Svg/empty-star.svg";
import fullStar from "../../Svg/full-star.svg";

function Rate({ flatId }) {
    const flat = Flat.find(item => item.id === flatId);
    
    const generateStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <img
                key={index + 1}
                src={index + 1 <= rating ? fullStar : emptyStar}
                alt={index + 1 <= rating ? "Full Star" : "Empty Star"}
            />
        ));
    };

    return (
        <div className="rating">
                {generateStars(flat.rating)}
        </div>
    );
}

export default Rate;
