import React from "react";

function Banner({ banners }) {
  const firstBanner = banners[0];

  return (
    <div className="Banner">
      <img
        key={firstBanner.key}
        className="Banner__img"
        src={firstBanner.bannerImg}
        alt="Banner HOME"
      />
      <div className="Banner__text">
        {firstBanner.bannerContent && <p>{firstBanner.bannerContent}</p>}
      </div>
    </div>
  );
}

export default Banner;
