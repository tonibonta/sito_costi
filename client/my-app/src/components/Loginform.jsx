import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Loginform(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  function handleClear() {
    setUsername("");
    setPassword("");
    setErrorMessage("");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const credentials = { username, password };
   
    if (!username) {
      setErrorMessage('Inserisci un indirizzo email valido.');
    } else if (!password) {
      setErrorMessage('La password non può essere vuota.');
    } else {
      props.login(credentials)
        .then((data) => {
            if(data==="correct"){
                navigate("/");
            }else{
                setErrorMessage(err.error || 'Credenziali non valide. Riprova.'); 
            }
           })
        .catch((err) => { 
          setErrorMessage(err.error || 'Credenziali non valide. Riprova.'); 
        });
    }
  };
  
  return (
    <div className="fade-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: '2rem' }}>
      
      {/* Contenitore stile "Card" */}
      <div style={{ backgroundColor: '#ffffff', padding: '3rem 2.5rem', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', width: '100%', maxWidth: '450px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--primary-dark, #2b6cb0)', margin: '0 0 0.5rem 0', fontSize: '2rem' }}>Bentornato!</h2>
          <p style={{ color: '#718096', margin: 0 }}>Accedi alla tua area personale Soft Skills</p>
        </div>

        {/* Messaggio di Errore Custom */}
        {errorMessage && (
          <div style={{ backgroundColor: '#fff5f5', color: '#c53030', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #f56565', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{errorMessage}</span>
            <button 
              type="button" 
              onClick={() => setErrorMessage('')} 
              style={{ background: 'none', border: 'none', color: '#c53030', fontSize: '1.2rem', cursor: 'pointer', padding: '0 0.5rem' }}
            >
              &times;
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          
          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="username" style={{ display: 'block', fontWeight: '600', color: 'var(--text-color)', marginBottom: '0.5rem' }}>
              Email Istituzionale
            </label>
            <input 
              type="email" 
              id="username"
              placeholder="mario.rossi@edu.unito.it" 
              value={username} 
              onChange={event => setUsername(event.target.value)} 
              style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px', fontFamily: 'var(--font-family)' }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: '2rem' }}>
            <label htmlFor="password" style={{ display: 'block', fontWeight: '600', color: 'var(--text-color)', marginBottom: '0.5rem' }}>
              Password
            </label>
            <input 
              type="password" 
              id="password"
              placeholder="Inserisci la password" 
              value={password} 
              onChange={event => setPassword(event.target.value)}
              style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px', fontFamily: 'var(--font-family)' }}
            />
          </div>

          <div className="form-actions" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%', padding: '0.9rem', fontSize: '1.1rem', backgroundColor: '#3182ce', border: 'none', borderRadius: '8px', color: '#fff', cursor: 'pointer', fontWeight: '600' }}
            >
              Accedi
            </button>
            
            <button 
              type="button" 
              onClick={handleClear} 
              className="btn btn-secondary" 
              style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', backgroundColor: '#edf2f7', border: 'none', borderRadius: '8px', color: '#4a5568', cursor: 'pointer', fontWeight: '500' }}
            >
              Svuota campi
            </button>
          </div>
          {/* Link per tornare al login */}
          <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: '#718096' }}>
            Non hai un account?{' '}
            <Link to="/registrazione" style={{ color: '#3182ce', textDecoration: 'none', fontWeight: '600' }}>
              Clicca qui
            </Link>
          </div>

        </form>

      </div>
    </div>
  );
}

function LogoutButton(props) {
  return (
    <button 
    
      onClick={props.logout}
      className="btn btn-outline-primary btn-sm"
     style={{  backgroundColor: "transparent",color:"white",boxShadow:"none",border:"none"}}  >
      Esci
    </button>
  );
}

function LoginButton(props) {
  const navigate = useNavigate();
  return (
    <button 
      className="btn btn-outline-primary btn-sm"
      style={{  backgroundColor: "transparent",color:"white",boxShadow:"none",border:"none"}}
      onClick={() => navigate('/login')}
     >
      Accedi
    </button>
  );
}

export { Loginform, LogoutButton, LoginButton };