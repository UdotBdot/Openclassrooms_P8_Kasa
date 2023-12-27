import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Collapse from "../../Components/Collapse/Collapse";
import CollapseJson from "../../Datas/CollapseJson.json";
import Banners from "../../Datas/Banners.json";

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

  return (
    <main>
        <Navbar />
        <Banner banners={[Banners[1]]} />
      <section className="about about--1">
        {CollapseJson.map((rule, id) => (
          <article className="about__container" key={id}>
            <Collapse
              collapseTitle={rule.collapseTitle}
              collapseContent={rule.collapseContent}
            />
          </article>
        ))}
      </section>
        <Footer />
    </main>
  );
}

export default About;
