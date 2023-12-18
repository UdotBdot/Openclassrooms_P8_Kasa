// Logement.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Carrousel from "../../Components/Carrousel/Carrousel";
import Title from "../../Components/Title/Title";
import Tags from "../../Components/Tags/Tags";
import Host from "../../Components/Host/Host";
import Rate from "../../Components/Rate/Rate";
import AboutCollapse from "../../Components/AboutCollapse/AboutCollapse";
import Flat from "../../Datas/Flat.json";

function Logement() {
  const { flatId } = useParams();

  useEffect(() => {
    const clickableElements = document.querySelectorAll(".accordion__title");

    clickableElements.forEach((element) => {
      element.addEventListener("click", () => {
        const checkbox = element.previousElementSibling;
        checkbox.checked = !checkbox.checked;
      });
    });
  }, []);

  // Trouver le logement correspondant à l'ID dans Flat.json
  const flatData = Flat.find((flat) => flat.id === flatId);

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
          {/* Onglet "Description" */}
          <AboutCollapse
            collapseTitle="Description"
            collapseContent={flatData.description}
          />
          {/* Onglet "Equipements" */}
          <AboutCollapse
            collapseTitle="Equipements"
            collapseContent={flatData.equipments.join(" ")}
          />
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Logement;
