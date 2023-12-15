import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Carrousel from "../../Components/Carrousel/Carrousel";
import Title from "../../Components/Title/Title";
import Tags from "../../Components/Tags/Tags";
import Host from "../../Components/Host/Host";
import Rate from "../../Components/Rate/Rate";
import AboutCollapse from "../../Components/AboutCollapse/AboutCollapse";

function Logement() {
  const { flatId } = useParams();

  return (
    <div>
      <Navbar />
      <Carrousel flatId={flatId} />
      <div className="container">
        <div>
          <Title flatId={flatId} />
          <Tags flatId={flatId} />
        </div>
        <div>
          <Host flatId={flatId} />
          <Rate flatId={flatId} />
        </div>
      </div>
      <div className="accordion">
        <ul className="accordion__ul">
          <AboutCollapse />
          <AboutCollapse />
          </ul>
      </div>
        
      <Footer />
    </div>
  );
}

export default Logement;
