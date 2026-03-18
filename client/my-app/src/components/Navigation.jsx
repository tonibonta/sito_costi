import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Assicurati di importare il tuo CSS qui
import { Container } from 'react-bootstrap';
import { LoginButton,LogoutButton } from './Loginform';

const Navigation = (props) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  // Funzione per alternare lo stato del menu
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <>
      <Container fluid>
        <div 
          className={`overlay ${isMenuActive ? 'active' : ''}`} 
          id="overlay" 
          onClick={toggleMenu}
        ></div>

        <header style={{ padding: '15px 0', borderBottom: '1px solid #eaeaea' }}>
          <div 
            className="nav-container" 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', // Spinge gli elementi ai lati opposti
              alignItems: 'center', 
              position: 'relative', 
              height: '100%' 
            }}
          >
            {/* Sezione Sinistra: Menu Hamburger */}
            <div style={{ zIndex: 2,}}>
              <div 
                className="menu-toggle" 
                id="mobile-menu" 
                onClick={toggleMenu} 
                style={{ cursor: 'pointer', }}
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                
              </div>
              
            </div>

            {/* Sezione Centrale: Titolo */}
            <h1 style={{ 
              position: 'absolute', 
              left: '50%', 
              transform: 'translateX(-50%)', 
              margin: 0,
              fontSize: '2rem',
              whiteSpace: 'nowrap',
              zIndex: 1 
            }}>
              Soft Skills Lab
            </h1>

            {/* Sezione Destra: Pulsanti Home e Dashboard */}
            <div style={{ display: 'flex', gap: '15px', zIndex: 2 }}>
              <Link 
                to="/" 
                className="btn btn-outline-primary btn-sm"
                style={{ backgroundColor: "transparent",color:"white",boxShadow:"none",marginLeft:"10%"}}
              >
                Home
              </Link>
              <Link 
                to="/dashboard" 
                className="btn btn-outline-primary btn-sm"
                style={{  backgroundColor: "transparent",color:"white",boxShadow:"none"}}
              >
                Dashboard
              </Link>
              
               {props.loggedIn ? <LogoutButton logout={props.logOut} /> : <LoginButton />}
            </div>

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
            <li><Link to="/storico">Storico</Link></li>
            <li><Link to="/gestione-tempo">Gestione del Tempo</Link></li>
            <li><Link to="/problem-solving">Problem Solving</Link></li>
            <li><Link to="/autoregolazione-emotiva">Autoregolazione emotiva</Link></li>
            <li><Link to="/valorizzazione-di-se">Valorizzazione di sè</Link></li>
            <li><Link to="/orientamento-obiettivo">Orientamento all'obiettivo</Link></li>
            <li><Link to="/intraprendenza">Intraprendenza</Link></li>
            <li><Link to="/attribuzione-causale">Attribuzione causale del successo e dell'insuccesso</Link></li>
            <li><Link to="/resilienza">Resilienza</Link></li>
            <li><Link to="/lavoriingruppo">Lavoro in gruppo</Link></li>
            <li><Link to="/comunicazione">Comunicazione</Link></li>
            <li><Link to="/gestioneconflitto">Gestione del conflitto</Link></li>
            

          </ul>
        </nav>
      </Container>
    </>
  );
};

export { Navigation };