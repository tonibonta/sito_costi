import React, { useState } from 'react';

// ATTIVITÀ 2: Consigli
export const ConsigliAutostima = ({ toggleAccordion, openAccordion }) => {
  const consigliList =[
    "Sorridi",
    "Impara a dire di no",
    "Crea una rete di supporto: trova un compagno di fiducia",
    "Identifica e analizza le tue insicurezze",
    "Non paragonarti agli altri",
    "Aiuta gli altri",
    "Elimina i sensi di colpa",
    "Vivi nel presente"
  ];

  return (
    <div className={`accordion-item ${openAccordion.consigli ? 'active' : ''}`} id="accordion-consigli">
      <div className="accordion-header" onClick={() => toggleAccordion('consigli')}>
        <div className="header-title">
          <span className="icon">💡</span>
          <h3>Consigli per l'Autostima</h3>
        </div>
        <span className="toggle-icon">{openAccordion.consigli ? '−' : '+'}</span>
      </div>
      <div className="accordion-content">
        <div className="accordion-inner">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
            {consigliList.map((consiglio, idx) => (
              <div key={idx} style={{ backgroundColor: '#ebf8fa', padding: '15px', borderRadius: '8px', border: '1px solid #b2ebf2', color: '#2c7a7b', fontWeight: '500' }}>
                ✨ {consiglio}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};