import React, { useState, useEffect } from 'react';
import API from '../API';

const Biofeedback=(props)=> {
const {toggleAccordion,openAccordion}=props;

  const [isBreathing, setIsBreathing] = useState(false);
  const [phase, setPhase] = useState('Inizia'); // Inspira, Trattieni, Espira

  useEffect(() => {
    let interval;
    if (isBreathing) {
      setPhase('Inspira...');
      let cycle = 0;
      interval = setInterval(() => {
        cycle = (cycle + 1) % 4;
        if (cycle === 0) setPhase('Inspira...');
        else if (cycle === 1) setPhase('Trattieni...');
        else if (cycle === 2) setPhase('Espira...');
        else if (cycle === 3) setPhase('Trattieni...');
      }, 4000); // Cambia fase ogni 4 secondi
    } else {
      setPhase('Pronto per iniziare');
    }
    return () => clearInterval(interval);
  }, [isBreathing]);

  return (
    <div className={`accordion-item ${openAccordion.biofeedback ? 'active' : ''}`} id="accordion-biofeedback">
      <div className="accordion-header" onClick={()=>toggleAccordion('biofeedback')}>
        <div className="header-title">
          <span className="icon">🫁</span>
          <h3>Respirazione Guidata</h3>
        </div>
        <span className="toggle-icon">{openAccordion.biofeedback ? '−' : '+'}</span>
      </div>

      <div className="accordion-content">
        <div className="accordion-inner" style={{ textAlign: 'center' }}>
          <p style={{ color: '#4a5568', marginBottom: '2rem' }}>Esercizio di "Box Breathing": 4 secondi per ogni fase per calmare il sistema nervoso.</p>
          
          <div style={{ 
            width: '200px', height: '200px', margin: '0 auto', 
            borderRadius: '50%', backgroundColor: '#e6fffa', 
            border: '8px solid #38b2ac', display: 'flex', 
            alignItems: 'center', justifyContent: 'center',
            transition: 'all 4s ease-in-out',
            transform: phase === 'Inspira...' ? 'scale(1.2)' : phase === 'Espira...' ? 'scale(0.8)' : 'scale(1)'
          }}>
            <h4 style={{ color: '#2c7a7b', margin: 0 }}>{phase}</h4>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <button 
              onClick={() => setIsBreathing(!isBreathing)} 
              className="btn btn-primary" 
              style={{ backgroundColor: isBreathing ? '#e53e3e' : '#38b2ac', border: 'none' }}
            >
              {isBreathing ? 'Ferma Esercizio' : 'Inizia Respirazione'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export {Biofeedback}