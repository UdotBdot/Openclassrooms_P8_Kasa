import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import BannerAbout from "../../Components/BannerAbout/BannerAbout";
import Footer from "../../Components/Footer/Footer";
import Collapse from "../../Components/Collapse/Collapse";
import CollapseJson from "../../Datas/CollapseJson.json"

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
		<>
			<Navbar />
      <BannerAbout />
			{CollapseJson.map((rule, id) => (
				<Collapse
					key={id}
					collapseTitle={rule.collapseTitle}
					collapseContent={rule.collapseContent}
				/>
			))}
      <Footer />
		</>
	);
}

export default About;
