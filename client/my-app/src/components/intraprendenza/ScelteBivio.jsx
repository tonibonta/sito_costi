import React, { useState } from 'react';

// ATTIVITÀ 1: Scelte a Bivio
export const ScelteBivio = ({ toggleAccordion, openAccordion }) => {
  const [step, setStep] = useState(0);

  const scenari =[
    {
      testo: "Il docente chiede se qualcuno vuole esporre un argomento a piacere. Cosa fai?",
      scelte:[
        { testo: "Distolgo lo sguardo e spero non chiami me", proattivo: false },
        { testo: "Alzo la mano, è un'occasione per mettermi in gioco", proattivo: true }
      ]
    },
    {
      testo: "C'è un problema nel lavoro di gruppo clinico. Nessuno vuole prendere l'iniziativa.",
      scelte:[
        { testo: "Propongo una divisione chiara dei compiti", proattivo: true },
        { testo: "Aspetto che qualcun altro risolva la situazione", proattivo: false }
      ]
    }
  ];

  const handleChoice = (proattivo) => {
    alert(proattivo ? "Ottima scelta! L'intraprendenza paga." : "Cerca di essere più proattivo la prossima volta!");
    if(step < scenari.length - 1) setStep(step + 1);
    else setStep(0); // Reset
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
        <div className="accordion-inner" style={{ textAlign: 'center' }}>
          <div style={{ padding: '20px', backgroundColor: '#edf2f7', borderRadius: '10px', marginBottom: '20px' }}>
            <h4 style={{ color: '#2d3748' }}>{scenari[step].testo}</h4>
          </div>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            {scenari[step].scelte.map((scelta, idx) => (
              <button 
                key={idx} 
                onClick={() => handleChoice(scelta.proattivo)}
                style={{ padding: '15px', flex: 1, backgroundColor: '#3182ce', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
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