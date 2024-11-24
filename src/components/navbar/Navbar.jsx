import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>
          <a href="#home" className="navbar-logo">Reciclub</a>
        </li>
        <li className="navbar-item"><a href="#score">Score</a></li>
        <li className="navbar-item"><a href="#sobre-nos">Sobre nós</a></li>
        <li className="navbar-item"><a href="#cadastre-se">Cadastre-se</a></li>
        <li className="navbar-item"><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
