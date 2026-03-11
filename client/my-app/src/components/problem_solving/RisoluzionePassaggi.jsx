import React, { useState, useEffect, useRef } from 'react';

const RisoluzionePassaggi=(props)=>{
const {toggleAccordion,openAccordion}=props;


return (
    <>
    
        {/* --- RISOLUZIONE IN 6 PASSAGGI --- */}
        <div className={`accordion-item ${openAccordion.seiStep ? 'active' : ''}`} id="accordion-6step">
          <div className="accordion-header" onClick={() => toggleAccordion('seiStep')}>
            <div className="header-title">
              <span className="icon">🧩</span>
              <h3>Risoluzione dei problemi in 6 passaggi</h3>
            </div>
            <span className="toggle-icon">{openAccordion.seiStep ? '−' : '+'}</span>
          </div>

          <div className="accordion-content">
            <div className="accordion-inner">
              
              <div className="instruction-box" style={{ backgroundColor: '#ebf8ff', borderLeftColor: '#3182ce' }}>
                <h4 style={{ color: '#2b6cb0' }}>Il ciclo del Problem Solving</h4>
                <p style={{ color: '#4a5568' }}>Un approccio strutturato ti permette di non saltare a conclusioni affrettate e di adottare la soluzione più efficace.</p>
              </div>

              <form id="form-6step" className="step-form" style={{ marginTop: '2rem' }}>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                  {[
                    { step: 1, title: 'Definisci il problema', placeholder: 'Descrivi chiaramente cosa non va.' },
                    { step: 2, title: 'Trova la causa', placeholder: 'Perché sta succedendo? (Puoi usare i 5 Perché)' },
                    { step: 3, title: 'Sviluppa varie soluzioni', placeholder: 'Fai brainstorming: quali sono le opzioni possibili?' },
                    { step: 4, title: 'Scegli una soluzione', placeholder: "Qual è l'opzione migliore in termini di risorse/risultati?" },
                    { step: 5, title: 'Attua una soluzione', placeholder: 'Come e quando la metterai in pratica?' },
                    { step: 6, title: 'Valuta i risultati', placeholder: 'Ha funzionato? Cosa puoi migliorare la prossima volta?' }
                  ].map(({ step, title, placeholder }) => (
                    <div key={step} style={{ backgroundColor: '#f7fafc', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #4299e1' }}>
                      <label style={{ fontWeight: '600', color: '#2d3748', marginBottom: '0.5rem', display: 'block' }}>
                        {step}. {title}
                      </label>
                      <input type="text" name={`step_${step}`} style={{ width: '100%', padding: '0.5rem', border: '1px solid #cbd5e0', borderRadius: '4px' }} placeholder={placeholder} />
                    </div>
                  ))}
                </div>

                <div className="form-actions" style={{ marginTop: '2rem', textAlign: 'right' }}>
                  <button type="button" className="btn btn-primary" style={{ backgroundColor: '#3182ce', border: 'none' }}>Salva Piano d'Azione</button>
                </div>
              </form>

            </div>
          </div>
        </div>
    </>
);


}

export {RisoluzionePassaggi}