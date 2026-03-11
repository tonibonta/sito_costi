import React, { useState } from 'react';

// ATTIVITÀ 1: Goal Setter (Metodo SMART)
export const GoalSetter = ({ toggleAccordion, openAccordion }) => {
  const [goal, setGoal] = useState({ vago: '', S: '', M: '', A: '', R: '', T: '' });
  const[showCard, setShowCard] = useState(false);

  return (
    <div className={`accordion-item ${openAccordion.goalsetter ? 'active' : ''}`} id="accordion-goal">
      <div className="accordion-header" onClick={() => toggleAccordion('goalsetter')}>
        <div className="header-title">
          <span className="icon">🎯</span>
          <h3>Goal Setter (Metodo SMART)</h3>
        </div>
        <span className="toggle-icon">{openAccordion.goalsetter ? '−' : '+'}</span>
      </div>
      <div className="accordion-content">
        <div className="accordion-inner">
          {!showCard ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <p>Trasforma un obiettivo vago in un piano d'azione.</p>
              <input type="text" placeholder="Scrivi il tuo obiettivo vago (es. Voglio studiare di più)" 
                style={{ padding: '10px', width: '100%' }} onChange={e => setGoal({...goal, vago: e.target.value})} />
              
              {goal.vago && (
                <div style={{ padding: '15px', backgroundColor: '#f0fff4', borderRadius: '8px', marginTop: '10px' }}>
                  <h4 style={{ color: '#2f855a' }}>Ora rendiamolo SMART:</h4>
                  <input type="text" placeholder="Specifico (S) - Cosa vuoi esattamente?" style={{ width: '100%', margin: '5px 0', padding: '8px' }} onChange={e => setGoal({...goal, S: e.target.value})} />
                  <input type="text" placeholder="Misurabile (M) - Come misurerai il successo?" style={{ width: '100%', margin: '5px 0', padding: '8px' }} onChange={e => setGoal({...goal, M: e.target.value})} />
                  <input type="text" placeholder="Raggiungibile (A) - È realistico?" style={{ width: '100%', margin: '5px 0', padding: '8px' }} onChange={e => setGoal({...goal, A: e.target.value})} />
                  <input type="text" placeholder="Rilevante (R) - Perché è importante per te?" style={{ width: '100%', margin: '5px 0', padding: '8px' }} onChange={e => setGoal({...goal, R: e.target.value})} />
                  <input type="text" placeholder="Temporizzato (T) - Entro quando lo farai?" style={{ width: '100%', margin: '5px 0', padding: '8px' }} onChange={e => setGoal({...goal, T: e.target.value})} />
                  <button onClick={() => setShowCard(true)} className="btn" style={{ marginTop: '15px', backgroundColor: '#38b2ac', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Genera Scheda</button>
                </div>
              )}
            </div>
          ) : (
            <div style={{ border: '2px dashed #38b2ac', padding: '20px', borderRadius: '10px', backgroundColor: '#fff' }}>
              <h3 style={{ color: '#2c7a7b', textAlign: 'center' }}>Scheda Obiettivo Personale</h3>
              <p><strong>Da:</strong> {goal.vago}</p>
              <ul>
                <li><strong>Specifico:</strong> {goal.S}</li>
                <li><strong>Misurabile:</strong> {goal.M}</li>
                <li><strong>Raggiungibile:</strong> {goal.A}</li>
                <li><strong>Rilevante:</strong> {goal.R}</li>
                <li><strong>Entro il:</strong> {goal.T}</li>
              </ul>
              <div style={{ textAlign: 'center', marginTop: '15px' }}>
                <button onClick={() => setShowCard(false)} style={{ backgroundColor: '#cbd5e0', padding: '8px 15px', border: 'none', borderRadius: '5px' }}>Modifica / Nuovo</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
