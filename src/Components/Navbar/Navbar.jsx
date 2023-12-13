import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <img
        src="./images/LOGO.PNG"
        alt="LOGO KASA"
        className="Navbar__img"
      ></img>
      <div className="Navbar__side">
        <div className="Navbar__side--link">
          <Link to="/">Accueil</Link>
        </div>
        <div className="Navbar__side--link">
          <Link to="/about">A Propos</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
