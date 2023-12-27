import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Card from "../../Components/Card/Card";
import Banners from "../../Datas/Banners.json";

function Home({ flats }) {
  return (
    <main>
      <Navbar />
      <Banner banners={Banners} />
      <section className="gallery">
        {flats.map((flat) => (
          <Card
            key={flat.id}
            id={flat.id}
            title={flat.title}
            cover={flat.cover} 
          />
        ))}
      </section>
      <Footer />
    </main>
  );
}

export default Home;
