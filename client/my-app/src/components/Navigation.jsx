import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Assicurati di importare il tuo CSS qui

import { Navbar, Container, Row, Col,Form } from 'react-bootstrap';
const Navigation = (props) => {
    const [isMenuActive, setIsMenuActive] = useState(false);

  // Funzione per alternare lo stato del menu
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <>
      <Container fluid >
      <div 
        className={`overlay`} 
        id="overlay" 
        onClick={toggleMenu}
      ></div>

      {/* Header con Hamburger Menu */}
      <header>
        <div className="nav-container">
          <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <h1 >Soft Skills Lab</h1>
        </div>
      </header>

      {/* Menu laterale a comparsa */}
      <nav className={`sidebar ${isMenuActive ? 'active' : ''}`} id="sidebar">
        <div className="sidebar-header">
          <h2>Menu</h2>
          <button className="close-btn" id="close-btn" onClick={toggleMenu}>
            &times;
          </button>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/gestione-tempo">Gestione del Tempo</Link></li>
            <li><Link to="/problem-solving">Problem Solving</Link></li>
            <li><Link to="/autoregolazione-emotiva">Autoregolazione emotiva</Link></li>
          <li><Link to="/valorizzazione-di-se">Valorizzazione di sè (autostima)</Link></li>
          <li><Link to="/orientamento-obiettivo">Orientamento all'obiettivo</Link></li>
          <li><Link to="/intraprendenza">Intraprendenza</Link></li>
          <li><Link to="/attribuzione-causale">Attribuzione causale del successo e dell'insuccesso</Link></li>
          <li><Link to="/risorse-avanzate">Risorse Avanzate</Link></li>
        </ul>
      </nav>

     
   
      </Container>
    </>
  );
};

export  {Navigation};