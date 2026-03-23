import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Qui andremo ad aggiungere due righe di CSS
import { Container } from 'react-bootstrap';
import { LoginButton, LogoutButton } from './Loginform';
import logoImg from "../assets/logo.png"
const Navigation = (props) => {
  // Stato per il menu hamburger (sinistra)
  const [isMenuActive, setIsMenuActive] = useState(false);
  // Nuovo stato per la tendina (destra) su mobile
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const toggleMenu = () => setIsMenuActive(!isMenuActive);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

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
              justifyContent: 'space-between', 
              alignItems: 'center', 
            }}
          >
            {/* Sezione Sinistra: Menu Hamburger */}
            
            <div style={{ flex: '1 1 0%', display: 'flex', justifyContent: 'center'}}>
              {/*props.user?
              <div 
                className="menu-toggle" 
                id="mobile-menu" 
                onClick={toggleMenu} 
                style={{ cursor: 'pointer' }}
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
              :""*/}
                  {props.user?
                <>
                <div className="desktop-actions">
                <Link to="/" className="btn " style={{ backgroundColor: "transparent", color: "white", boxShadow: "none" }}>
                  HOME
                </Link>
                <Link to="/lab" className="btn" style={{ backgroundColor: "transparent", color: "white", boxShadow: "none" }}>
                  IL LAB
                </Link></div></>:""}
            </div>

            {/* Sezione Centrale: Titolo */}
            <h1 style={{ 
              margin: 0,
            
              textAlign: 'center',
              whiteSpace: 'nowrap'
            }}>
               <img style={{width:"200px",marginTop:"10px"}} src={logoImg} />
            </h1>

            {/* Sezione Destra: Pulsanti (PC) o Tendina (Mobile) */}
            <div style={{ flex: '1 1 0%', display: 'flex', justifyContent: 'center' }}>
              
              {/* --- VISTA PC (nascosta su mobile) --- */}
              
              <div className="desktop-actions" style={{ display: 'flex', gap: '15px' }}>
                {props.user?
                <>
              
                <Link to="/storico" className="btn btn-outline-primary btn-sm" style={{ backgroundColor: "transparent", color: "white", boxShadow: "none" }}>
                  PROFILO
                </Link></>:""}
               {props.loggedIn ? <LogoutButton logout={props.logOut} /> : <LoginButton />}  
              </div>
             
              {/* --- VISTA SMARTPHONE (nascosta su PC) --- */}
              <div className="mobile-dropdown-container" style={{ position: 'relative' }}>
                {/* Icona dei 3 pallini per aprire la tendina */}
                <button 
                  onClick={toggleDropdown}
                  style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer', padding: '0 5px' }}
                >
                  ⋮
                </button>
                
                {/* Il menu a tendina vero e proprio */}
                {isDropdownOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    right: -15,
                    marginTop: '5px',
                    backgroundColor: '#3A5F67', /* Sfondo scuro per far risaltare il testo bianco dei tuoi bottoni */
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                    
                    display: 'flex',
                    flexDirection: 'column',
                    
                    minWidth: '100px',
                    zIndex: 10
                  }}>
                    {props.user?<>
                    <Link to="/" className="btn btn-outline-primary btn-sm" onClick={() => setIsDropdownOpen(false)} style={{ backgroundColor: "transparent", color: "white", boxShadow: "none" }}>
                      HOME
                    </Link>
                    <Link to="/storico" className="btn btn-outline-primary btn-sm" onClick={() => setIsDropdownOpen(false)} style={{ backgroundColor: "transparent", color: "white", boxShadow: "none" }}>
                      IL LAB
                    </Link>
                    <Link to="/storico" className="btn btn-outline-primary btn-sm" onClick={() => setIsDropdownOpen(false)} style={{ backgroundColor: "transparent", color: "white", boxShadow: "none" }}>
                      PROFILO
                    </Link>
                    
                    </>:""}
                    <div onClick={() => setIsDropdownOpen(false)}>
                      {props.loggedIn ? <LogoutButton logout={props.logOut} /> : <LoginButton />}
                    </div>
                  </div>
                )}
              </div>

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