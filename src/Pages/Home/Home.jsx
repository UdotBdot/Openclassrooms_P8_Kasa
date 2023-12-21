// Home.js
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Gallery from "../../Components/Gallery/Gallery";
import Flat from "../../Datas/Flat.json";
import Banners from "../../Datas/Banners.json";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner banners={Banners} />
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

export default Home;
