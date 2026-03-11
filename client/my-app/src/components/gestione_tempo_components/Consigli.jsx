import React, { useState, useEffect, useRef } from 'react';

const Consigli=(props)=>{
    const {toggleAccordion,openAccordion,risultato,risposte,risultatoRef}=props;

    return (
        <>
        {/* CONSIGLI */}
        <div className={`accordion-item ${openAccordion.consigli ? 'active' : ''}`} id="accordion-consigli">
          <div className="accordion-header" onClick={() => toggleAccordion('consigli')}>
            <div className="header-title">
              <span className="icon">💡</span>
              <h3>Consigli</h3>
            </div>
            <span className="toggle-icon">{openAccordion.consigli ? '−' : '+'}</span>
          </div>

          <div className="accordion-content">
            <div className="accordion-inner">
              <div className="instruction-box" style={{ backgroundColor: '#fffff0', borderLeftColor: '#d69e2e' }}>
                <h4 style={{ color: '#b7791f' }}>Ottimizza il tuo studio e il lavoro</h4>
                <p style={{ color: '#4a5568', marginBottom: '1rem' }}>Ecco dei consigli pratici da inserire nella vita di tutti i giorni:</p>
                <ul style={{ listStyleType: 'none', marginBottom: '1.5rem', color: '#4a5568' }}>
                  <li style={{ marginBottom: '0.8rem' }}>⏸️ Programma brevi intervalli tra le sessioni di studio</li>
                  <li style={{ marginBottom: '0.8rem' }}>🛌 Rispetta un ciclo di sonno regolare</li>
                  <li style={{ marginBottom: '0.8rem' }}>🔕 Disattiva le notifiche o imposta la modalità “aereo”</li>
                  <li>🧹 Organizza uno spazio di lavoro ordinato</li>
                </ul>
              </div>

              <form id="form-consigli" className="consigli-form" style={{ marginTop: '2rem' }}>
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="consiglio_impegno" style={{ display: 'block', fontWeight: '600', color: 'var(--text-color)', marginBottom: '0.5rem' }}>Il tuo impegno</label>
                  <textarea id="consiglio_impegno" name="consiglio_impegno" rows="2" style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px', fontFamily: 'var(--font-family)' }} placeholder="Es: Da oggi proverò a mettere il telefono in un'altra stanza mentre studio..."></textarea>
                </div>

                <div className="form-actions" style={{ marginTop: '2rem', textAlign: 'right' }}>
                  <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#d69e2e', border: 'none' }}>Salva Impegno</button>
                </div>
              </form>
            </div>
          </div>
        </div>

  
        </>
    );


}

export {Consigli}