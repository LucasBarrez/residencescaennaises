import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <div className="flexCenter h-menu">
          <a href="">Accueil</a>
          <a href="">Construction</a>
          <a href="">Agrandissement</a>
          <a href="">Rénovation</a>
          <a href="">Actus</a>
          <button className="button">Contact</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
