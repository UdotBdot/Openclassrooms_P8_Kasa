import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Carrousel from "../../Components/Carrousel/Carrousel";
import Title from "../../Components/Title/Title";

function Logement() {
  const { flatId } = useParams();

  return (
    <div>
      <Navbar />
      <Carrousel flatId={flatId} />
      <Title flatId={flatId} />
      <Footer />
    </div>
  );
}

export default Logement;
