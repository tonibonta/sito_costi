import React, { useState } from 'react';

export const GeneratoreOpportunita = ({ toggleAccordion, openAccordion }) => {
  const opportunita =[
    "Cerca un corso extra per migliorare una skill clinica.",
    "Proponi un gruppo di studio ai tuoi colleghi.",
    "Chiedi feedback a un docente su un tuo lavoro recente.",
    "Leggi un articolo scientifico fuori dal tuo programma di studi.",
    "Offriti volontario per un progetto speciale in reparto/tirocinio."
  ];
  
  const [currentIdea, setCurrentIdea] = useState("Clicca il pulsante per generare un'opportunità!");

  return (
    <div className={`accordion-item ${openAccordion.generatoreopportunita ? 'active' : ''}`} id="accordion-opportunita">
      <div className="accordion-header" onClick={() => toggleAccordion('generatoreopportunita')}>
        <div className="header-title">
          <span className="icon">🎲</span>
          <h3>Generatore di Opportunità</h3>
        </div>
        <span className="toggle-icon">{openAccordion.generatoreopportunita ? '−' : '+'}</span>
      </div>
      <div className="accordion-content">
        <div className="accordion-inner" style={{ textAlign: 'center' }}>
          <p style={{ color: '#718096', marginBottom: '20px' }}>L'intraprendenza richiede azione. Genera un'idea proattiva per la tua giornata.</p>
          
          <div style={{ padding: '30px', border: '2px solid #38b2ac', borderRadius: '10px', backgroundColor: '#e6fffa', minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
            <h3 style={{ color: '#2c7a7b', margin: 0 }}>{currentIdea}</h3>
          </div>
          
          <button 
            onClick={() => setCurrentIdea(opportunita[Math.floor(Math.random() * opportunita.length)])}
            className="btn btn-primary" style={{ backgroundColor: '#ed8936', border: 'none', padding: '12px 24px', fontSize: '1.1rem', borderRadius: '8px' }}
          >
            Genera Nuova Opportunità
          </button>
        </div>
      </div>
    </div>
  );
};