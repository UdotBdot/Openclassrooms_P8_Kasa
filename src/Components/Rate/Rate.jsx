import React from 'react';
import emptyStar from "../../Svg/empty-star.svg";
import fullStar from "../../Svg/full-star.svg";

function Rate({ rating }) {
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
            {generateStars(rating)}
        </div>
    );
}

export default Rate;
