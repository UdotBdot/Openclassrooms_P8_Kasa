import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import BannerHome from "../../Components/BannerHome/BannerHome";
import Footer from "../../Components/Footer/Footer";
import Gallery from "../../Components/Gallery/Gallery";
import Flat from "../../Datas/Flat.json";

function About() {
  return (
    <div>
      <Navbar />
      <BannerHome />
      <div className="gallery">
        {Flat.map((flat) => (
          <Gallery
            key={flat.id}
            id={flat.id}
            title={flat.title}
            pictures={flat.pictures}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default About;
