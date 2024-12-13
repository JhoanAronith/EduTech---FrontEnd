import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">NutriPoint</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#services">Productos</a></li>
        <li><a href="#contact">Tiendas</a></li>
        <li><a href="#about">Acerca de</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
