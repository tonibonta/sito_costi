import React, { useState, useEffect, useRef } from 'react';

const MatriceEisenhower=(props)=>{
    const {toggleAccordion,openAccordion,risultato,risposte,risultatoRef}=props;

    return (
        <>
        {/* MATRICE DI EISENHOWER */}
        <div className={`accordion-item ${openAccordion.eisenhower ? 'active' : ''}`} id="accordion-eisenhower">
          <div className="accordion-header" onClick={() => toggleAccordion('eisenhower')}>
            <div className="header-title">
              <span className="icon">📊</span>
              <h3>Matrice di Eisenhower</h3>
            </div>
            <span className="toggle-icon">{openAccordion.eisenhower ? '−' : '+'}</span>
          </div>

          <div className="accordion-content">
            <div className="accordion-inner">
              <div className="instruction-box" style={{ backgroundColor: '#ebf8ff', borderLeftColor: '#3182ce' }}>
                <h4 style={{ color: '#2b6cb0' }}>Cos'è la Matrice di Eisenhower?</h4>
                <p style={{ color: '#4a5568' }}>Pensa alle tue attività e classificale utilizzando questa matrice di priorità. Inserisci i tuoi compiti nei quadranti corretti.</p>
              </div>

              <form id="form-eisenhower" className="eisenhower-form" style={{ marginTop: '2rem' }}>
                <div className="eisenhower-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  
                  <div className="matrix-box" style={{ backgroundColor: '#fff5f5', border: '2px solid #fc8181', borderRadius: '12px', padding: '1.5rem' }}>
                    <h5 style={{ color: '#c53030', fontSize: '1.1rem', marginBottom: '0.5rem' }}>1. Importante e Urgente (FAI)</h5>
                    <p style={{ fontSize: '0.85rem', color: '#718096', marginBottom: '1rem' }}>Attività con scadenze immediate che non possono essere delegate.</p>
                    <textarea name="eis_fai" rows="3" style={{ width: '100%', padding: '0.8rem', border: '1px solid #feb2b2', borderRadius: '8px' }} placeholder="Es: Consegnare la tesi entro domani..."></textarea>
                  </div>

                  <div className="matrix-box" style={{ backgroundColor: '#f0fff4', border: '2px solid #68d391', borderRadius: '12px', padding: '1.5rem' }}>
                    <h5 style={{ color: '#2f855a', fontSize: '1.1rem', marginBottom: '0.5rem' }}>2. Importante, NON Urgente (PIANIFICA)</h5>
                    <p style={{ fontSize: '0.85rem', color: '#718096', marginBottom: '1rem' }}>Attività strategiche a lungo termine, essenziali per la crescita.</p>
                    <textarea name="eis_pianifica" rows="3" style={{ width: '100%', padding: '0.8rem', border: '1px solid #9ae6b4', borderRadius: '8px' }} placeholder="Es: Studiare 2 ore al giorno per l'esame del mese prossimo..."></textarea>
                  </div>

                  <div className="matrix-box" style={{ backgroundColor: '#fffff0', border: '2px solid #f6e05e', borderRadius: '12px', padding: '1.5rem' }}>
                    <h5 style={{ color: '#b7791f', fontSize: '1.1rem', marginBottom: '0.5rem' }}>3. Urgente, NON Importante (DELEGA)</h5>
                    <p style={{ fontSize: '0.85rem', color: '#718096', marginBottom: '1rem' }}>Compiti che richiedono attenzione immediata ma non aiutano i tuoi obiettivi.</p>
                    <textarea name="eis_delega" rows="3" style={{ width: '100%', padding: '0.8rem', border: '1px solid #fef08a', borderRadius: '8px' }} placeholder="Es: Rispondere a email di poco conto..."></textarea>
                  </div>

                  <div className="matrix-box" style={{ backgroundColor: '#edf2f7', border: '2px solid #a0aec0', borderRadius: '12px', padding: '1.5rem' }}>
                    <h5 style={{ color: '#4a5568', fontSize: '1.1rem', marginBottom: '0.5rem' }}>4. NON Urgente, NON Importante (ELIMINA)</h5>
                    <p style={{ fontSize: '0.85rem', color: '#718096', marginBottom: '1rem' }}>Attività superflue o distrazioni da eliminare.</p>
                    <textarea name="eis_elimina" rows="3" style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px' }} placeholder="Es: Scrollare i social per 3 ore..."></textarea>
                  </div>
                </div>

                <div className="form-actions" style={{ marginTop: '2rem', textAlign: 'right' }}>
                  <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#3182ce', border: 'none' }}>Salva Matrice</button>
                </div>
              </form>
            </div>
          </div>
        </div>
   
        </>
    );


}

export {MatriceEisenhower}