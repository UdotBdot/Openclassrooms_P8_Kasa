import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
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
    </Routes>
  );
}

export default App;
