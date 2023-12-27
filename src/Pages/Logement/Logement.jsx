import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Carrousel from "../../Components/Carrousel/Carrousel";
import Title from "../../Components/Title/Title";
import Tags from "../../Components/Tags/Tags";
import Host from "../../Components/Host/Host";
import Rate from "../../Components/Rate/Rate";
import Collapse from "../../Components/Collapse/Collapse";
import Flat from "../../Datas/Flat.json";
import Error from "../../Pages/Error/Error";


function Logement() {
  const { flatId } = useParams();
  const navigate = useNavigate();

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

  if (!flatData) {
    // Si l'ID ne correspond à aucun logement, rediriger vers la page 404
    navigate("/404");
    return <Error />;
  }

  return (
    <main>
      <Navbar />
      <section>
        <Carrousel flatId={flatId} />
        <div className="container">
          <div>
            <Title flatId={flatId} />
            <Tags flatId={flatId} />
          </div>
          <div className="mobile-responsive">
            <Host flatId={flatId} />
            <Rate flatId={flatId} />
          </div>
        </div>
      </section>

      <section className="container2">
        <article className="container2__collapse">
          {/* Onglet "Description" */}
          <Collapse
            collapseTitle="Description"
            collapseContent={flatData.description}
          />
        </article>

        <article className="container2__collapse">
          {/* Onglet "Equipements" */}
          <Collapse
            collapseTitle="Equipements"
            collapseContent={
              <div className="equipments-container">
                {flatData.equipments.map((equipment, index) => (
                  <p key={index}>{equipment}</p>
                ))}
              </div>
            }
          />
        </article>
      </section>
      <Footer />
    </main>
  );
}

export default Logement;
