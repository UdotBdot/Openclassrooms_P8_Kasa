import React from "react";
import { Routes, Route } from 'react-router-dom';
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";
import Logement from "./Pages/Logement/Logement";
import "./Styles/main.css";


function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Home />
          </div>
        }
      />
      <Route
        path="/about"
        element={
          <div>
            <About />
          </div>
        }
      />
      <Route 
        path="*"
        element={
          <div><Error /></div>
        }
      />
      <Route 
        path="/flat/:flatId"
        element={
          <div>
            <Logement />
          </div>
        }
      />
    </Routes>
    
  );
}

export default App;
