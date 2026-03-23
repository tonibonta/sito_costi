import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from './API';

function Registerform(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [course, setCourse] = useState(''); // Corso di laurea
  const [Message, setMessage] = useState('');

  const navigate = useNavigate();

  function handleClear() {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setCourse('');
    setMessage('');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validazione dei campi
    if (!email) {
      setMessage("Inserisci un indirizzo email valido.");
      return;
    } 
    if (!course) {
      setMessage("Inserisci il tuo corso di laurea.");
      return;
    }
    if (!password) {
      setMessage("La password non può essere vuota.");
      return;
    } 
    if (password !== confirmPassword) {
      setMessage("Le password non coincidono. Riprova.");
      return;
    }

    const userData = { email, password, course };
   
    // Chiamata alla funzione passata tramite props per la registrazione
    API.registrazione(userData)
      .then((data) => {
          if(data.risultato === "correct"){
            setMessage("Registrazione avventuta con successo,reindirizzamento in corso...");
            setTimeout(()=>{navigate("/login")},4000);
              
          } else {
              setMessage('Errore durante la registrazione. Riprova.'); 
          }
         })
      .catch((err) => { 
        setMessage(err.error || 'Errore di connessione. Riprova.'); 
      });
  };
  
  return (
    <div className="fade-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: '2rem' }}>
      
      {/* Contenitore stile "Card" */}
      <div style={{ backgroundColor: '#ffffff', padding: '3rem 2.5rem', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', width: '100%', maxWidth: '450px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--primary-dark, #2b6cb0)', margin: '0 0 0.5rem 0', fontSize: '2rem' }}>Nuovo Account</h2>
          <p style={{ color: '#718096', margin: 0 }}>Registrati per accedere a Soft Skills Lab</p>
        </div>

        {/* Messaggio di Errore Custom */}
        {Message?
        Message==="Registrazione avventuta con successo,reindirizzamento in corso..."?
        
          <div style={{ backgroundColor: '#fff5f5', color: '#26c000ff', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #26c000ff', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{Message}</span>
            <button 
              type="button" 
              onClick={() => setMessage('')} 
              style={{ background: 'none', border: 'none', color: '#26c000ff', fontSize: '1.2rem', cursor: 'pointer', padding: '0 0.5rem' }}
            >
              &times;
            </button>
          </div>
        : <div style={{ backgroundColor: '#fff5f5', color: '#c53030', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #f56565', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{Message}</span>
            <button 
              type="button" 
              onClick={() => setMessage('')} 
              style={{ background: 'none', border: 'none', color: '#c53030', fontSize: '1.2rem', cursor: 'pointer', padding: '0 0.5rem' }}
            >
              &times;
            </button>
          </div>:""}

        <form onSubmit={handleSubmit}>
          
          {/* Email */}
          <div className="form-group" style={{ marginBottom: '1.2rem' }}>
            <label htmlFor="email" style={{ display: 'block', fontWeight: '600', color: 'var(--text-color)', marginBottom: '0.5rem' }}>
              Matricola
            </label>
            <input 
              type="text" 
              id="email"
              placeholder="123456" 
              value={email} 
              onChange={event => setEmail(event.target.value)} 
              style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px', fontFamily: 'var(--font-family)' }}
            />
          </div>

          {/* Corso di Laurea */}
          <div className="form-group" style={{ marginBottom: '1.2rem' }}>
            <label htmlFor="course" style={{ display: 'block', fontWeight: '600', color: 'var(--text-color)', marginBottom: '0.5rem' }}>
              Corso di Laurea
            </label>
            <input 
              type="text" 
              id="course"
              placeholder="Es. Informatica, Psicologia..." 
              value={course} 
              onChange={event => setCourse(event.target.value)} 
              style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px', fontFamily: 'var(--font-family)' }}
            />
          </div>

          {/* Password */}
          <div className="form-group" style={{ marginBottom: '1.2rem' }}>
            <label htmlFor="password" style={{ display: 'block', fontWeight: '600', color: 'var(--text-color)', marginBottom: '0.5rem' }}>
              Password
            </label>
            <input 
              type="password" 
              id="password"
              placeholder="Crea una password" 
              value={password} 
              onChange={event => setPassword(event.target.value)}
              style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px', fontFamily: 'var(--font-family)' }}
            />
          </div>

          {/* Conferma Password */}
          <div className="form-group" style={{ marginBottom: '2rem' }}>
            <label htmlFor="confirmPassword" style={{ display: 'block', fontWeight: '600', color: 'var(--text-color)', marginBottom: '0.5rem' }}>
              Conferma Password
            </label>
            <input 
              type="password" 
              id="confirmPassword"
              placeholder="Ripeti la password" 
              value={confirmPassword} 
              onChange={event => setConfirmPassword(event.target.value)}
              style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px', fontFamily: 'var(--font-family)' }}
            />
          </div>

          {/* Pulsanti */}
          <div className="form-actions" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%', padding: '0.9rem', fontSize: '1.1rem', backgroundColor: '#3182ce', border: 'none', borderRadius: '8px', color: '#fff', cursor: 'pointer', fontWeight: '600' }}
            >
              Registrati
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
            Hai già un account?{' '}
            <Link to="/login" style={{ color: '#3182ce', textDecoration: 'none', fontWeight: '600' }}>
              Accedi qui
            </Link>
          </div>

        </form>

      </div>
    </div>
  );
}

export { Registerform };