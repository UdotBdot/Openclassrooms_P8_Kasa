import React from "react";
import { Routes, Route } from 'react-router-dom';
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";
import Logement from "./Pages/Logement/Logement";
import "./Styles/main.scss";


function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
            <Home />
        }
      />
      <Route
        path="/about"
        element={
            <About />
        }
      />
      <Route 
        path="*"
        element={
          <Error />
        }
      />
      <Route 
        path="/flat/:flatId"
        element={
            <Logement />
        }
      />
    </Routes>
    
  );
}

export default App;
