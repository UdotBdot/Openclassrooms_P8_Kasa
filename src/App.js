import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";
import Logement from "./Pages/Logement/Logement";
import "./Styles/main.scss";
import Flat from "./Datas/Flat.json";

function App() {
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    // Chargez les données du fichier JSON (Flat.json) ici
    setFlats(Flat);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home flats={flats} />} 
      />
      <Route
        path="/about"
        element={<About />}
      />
      <Route 
        path="*"
        element={<Error />}
      />
      <Route 
        path="/flat/:flatId"
        element={<Logement flats={flats} />}
      />
    </Routes>
  );
}

export default App;
