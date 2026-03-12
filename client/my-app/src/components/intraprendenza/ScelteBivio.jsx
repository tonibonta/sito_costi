import React, { useState, useEffect } from 'react';

// ATTIVITÀ 1: Scelte a Bivio
export const ScelteBivio = (props) => {
  const { toggleAccordion, openAccordion }=props;
  const [step, setStep] = useState(0);
  const [feedback, setFeedback] = useState(null); // Stato per il messaggio di feedback

  const scenari = [
    {
      testo: "Il docente chiede se qualcuno vuole esporre un argomento a piacere. Cosa fai?",
      scelte: [
        { testo: "Distolgo lo sguardo e spero non chiami me", proattivo: false },
        { testo: "Alzo la mano, è un'occasione per mettermi in gioco", proattivo: true }
      ]
    },
    {
      testo: "C'è un problema nel lavoro di gruppo clinico. Nessuno vuole prendere l'iniziativa.",
      scelte: [
        { testo: "Propongo una divisione chiara dei compiti", proattivo: true },
        { testo: "Aspetto che qualcun altro risolva la situazione", proattivo: false }
      ]
    }
  ];

  const handleChoice = (proattivo) => {
    // Impostiamo il messaggio di feedback invece dell'alert
    setFeedback({
      msg: proattivo ? "Ottima scelta! L'intraprendenza paga." : "Cerca di essere più proattivo la prossima volta!",
      color: proattivo ? "#38a169" : "#e53e3e"
    });
  
    // Cambiamo scenario dopo un breve delay per far leggere il feedback
    setTimeout(() => {
      setFeedback(null);
      if (step < scenari.length - 1) {
        setStep(step + 1);
      } else {
        setStep(0); // Reset
      }
    }, 2000);
  };

  return (
    <div className={`accordion-item ${openAccordion.sceltebivio ? 'active' : ''}`} id="accordion-bivio">
      <div className="accordion-header" onClick={() => toggleAccordion('sceltebivio')}>
        <div className="header-title">
          <span className="icon">🛤️</span>
          <h3>Scelte a Bivio</h3>
        </div>
        <span className="toggle-icon">{openAccordion.sceltebivio ? '−' : '+'}</span>
      </div>
      <div className="accordion-content">
        <div className="accordion-inner" style={{ textAlign: 'center', position: 'relative' }}>
          
          {/* Box Scenario */}
          <div style={{ padding: '10px', backgroundColor: '#edf2f7', borderRadius: '10px', marginBottom: '10px' }}>
            <h4 style={{ color: '#2d3748', margin: 0 }}>{scenari[step].testo}</h4>
          </div>

          {/* Area Messaggio di Feedback (appare solo se feedback esiste) */}
          <div style={{ 
            height: '40px', 
            marginBottom: '15px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}>
            {feedback && (
              <p style={{ 
                color: feedback.color, 
                fontWeight: 'bold', 
                backgroundColor: `${feedback.color}15`, // Trasparenza del colore scelto
                padding: '5px 15px',
                borderRadius: '20px',
                margin: 0
              }}>
                {feedback.msg}
              </p>
            )}
          </div>

          {/* Bottoni Scelta */}
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            {scenari[step].scelte.map((scelta, idx) => (
              <button 
                key={idx} 
                disabled={!!feedback} // Disabilita i tasti mentre il feedback è visibile
                onClick={() => handleChoice(scelta.proattivo)}
                style={{ 
                  padding: '15px', 
                  flex: 1, 
                  backgroundColor: feedback ? '#cbd5e0' : '#3182ce', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '8px', 
                  cursor: feedback ? 'default' : 'pointer',
                  transition: 'background-color 0.2s'
                }}
              >
                {scelta.testo}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};