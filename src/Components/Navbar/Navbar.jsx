import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="Navbar">
      <NavLink to="/">
      <img
        src="../images/LOGO.PNG"
        alt="LOGO KASA"
        className="Navbar__img"
      ></img>
      </NavLink>
      <div className="Navbar__side">
        <div className="Navbar__side--link">
          <NavLink to="/">Accueil</NavLink>
        </div>
        <div className="Navbar__side--link">
          <NavLink to="/about">A Propos</NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
