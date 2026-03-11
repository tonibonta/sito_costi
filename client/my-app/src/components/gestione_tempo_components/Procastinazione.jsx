import React, { useState, useEffect, useRef } from 'react';

const Procastinazione=(props)=>{
    const {toggleAccordion,openAccordion}=props;

    return (
        <>
          {/* LA PROCRASTINAZIONE */}
        <div className={`accordion-item ${openAccordion.procrastinazione ? 'active' : ''}`} id="accordion-procrastinazione">
          <div className="accordion-header" onClick={() => toggleAccordion('procrastinazione')}>
            <div className="header-title">
              <span className="icon">🐸</span>
              <h3>La Procrastinazione</h3>
            </div>
            <span className="toggle-icon">{openAccordion.procrastinazione ? '−' : '+'}</span>
          </div>

          <div className="accordion-content">
            <div className="accordion-inner">
              <div className="instruction-box" style={{ backgroundColor: '#e6fffa', borderLeftColor: '#38b2ac' }}>
                <h4 style={{ color: '#2c7a7b' }}>Strategie e tecniche per combatterla</h4>
                <p style={{ color: '#4a5568', marginBottom: '1rem' }}>Spesso il momento più difficile è iniziare. Ecco alcune strategie pratiche per sbloccarti:</p>
                <ul style={{ listStyleType: 'none', marginBottom: '1.5rem', color: '#4a5568' }}>
                  <li style={{ marginBottom: '0.8rem' }}>⏳ <strong>"Inizia per cinque minuti":</strong> impegnati a svolgere un compito temuto per soli cinque minuti...</li>
                  <li style={{ marginBottom: '0.8rem' }}>🧩 <strong>Microtask:</strong> suddividi i compiti complessi in micro-task (micro obiettivi).</li>
                  <li>🐸 <strong>"Eat the frog" (Mangia la rana):</strong>
                    <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
                      <li style={{ marginBottom: '0.3rem' }}>Identifica la tua "rana": l'attività più importante e complessa della giornata...</li>
                      <li style={{ marginBottom: '0.3rem' }}>Affrontala subito: esegui questo compito come primissima cosa al mattino...</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <form id="form-procrastinazione" className="procrastinazione-form" style={{ marginTop: '2rem' }}>
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="proc_rana" style={{ display: 'block', fontWeight: '600', color: 'var(--text-color)', marginBottom: '0.5rem' }}>Identifica la tua "Rana" di oggi</label>
                  <textarea id="proc_rana" name="proc_rana" rows="2" style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px', fontFamily: 'var(--font-family)' }} placeholder="Es: Devo iniziare a scrivere il primo paragrafo..."></textarea>
                </div>

                <div className="form-actions" style={{ marginTop: '2rem', textAlign: 'right' }}>
                  <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#38b2ac', border: 'none' }}>Salva la tua Rana</button>
                </div>
              </form>
            </div>
          </div>
        </div>

    
        </>
    );


}

export {Procastinazione}