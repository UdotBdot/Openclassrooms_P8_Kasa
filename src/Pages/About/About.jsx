import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import BannerAbout from "../../Components/BannerAbout/BannerAbout";
import Footer from "../../Components/Footer/Footer";
import AboutCollapse from "../../Components/AboutCollapse/AboutCollapse";

function About() {
  useEffect(() => {
    const clickableElements = document.querySelectorAll(".accordion__title");

    clickableElements.forEach((element) => {
      element.addEventListener("click", () => {
        const checkbox = element.previousElementSibling;
        checkbox.checked = !checkbox.checked;
      });
    });
  }, []);
  const Content1 =
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les information sont régulièrement vérifiées par nos équipes.";
  const Content2= "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
  const Content4= "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
  
    return (
    <div>
      <Navbar />
      <BannerAbout />
      <div className="accordion">
        <ul className="accordion__ul">
          <AboutCollapse title="Fiabilité" content={Content1} />
          <AboutCollapse title="Respect" content={Content2} />
          <AboutCollapse title="Service" content={Content2} />
          <AboutCollapse title="Sécurité" content={Content4} />
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default About;
