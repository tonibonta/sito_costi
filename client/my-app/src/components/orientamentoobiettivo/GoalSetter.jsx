import React, { useState } from 'react';

// ATTIVITÀ 1: Goal Setter (Metodo SMART)
const GoalSetter = ({ toggleAccordion, openAccordion }) => {
  // 1. Stato per memorizzare i dati dell'obiettivo
  const [goal, setGoal] = useState({ vago: '', S: '', M: '', A: '', R: '', T: '' });
  const [showCard, setShowCard] = useState(false);

  // 2. Funzione per aggiornare lo stato mentre l'utente digita
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGoal((prevGoal) => ({
      ...prevGoal,
      [name]: value
    }));
  };

  // 3. Funzione che intercetta il salvataggio per l'invio al server e mostra la scheda
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita il ricaricamento della pagina
    
    setShowCard(true); // Passa alla visualizzazione della scheda
    
    // Ecco la tua variabile pronta con l'obiettivo SMART!
    console.log("Dati del Goal Setter pronti per il server:", goal);
    
    // Se passi una funzione dal componente padre, la chiami qui:
    // if (props.onSave) props.onSave(goal);
  };

  return (
    <div className={`accordion-item ${openAccordion?.goalsetter ? 'active' : ''}`} id="accordion-goal">
      <div className="accordion-header" onClick={() => toggleAccordion('goalsetter')}>
        <div className="header-title">
          <span className="icon">🎯</span>
          <h3>Goal Setter (Metodo SMART)</h3>
        </div>
        <span className="toggle-icon">{openAccordion?.goalsetter ? '−' : '+'}</span>
      </div>
      
      <div className="accordion-content">
        <div className="accordion-inner">
          {!showCard ? (
            /* Aggiunto il form attorno ai campi di input */
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <p>Trasforma un obiettivo vago in un piano d'azione.</p>
              <input 
                type="text" 
                name="vago"
                value={goal.vago}
                onChange={handleInputChange}
                placeholder="Scrivi il tuo obiettivo vago (es. Voglio studiare di più)" 
                style={{ padding: '10px', width: '100%', border: '1px solid #cbd5e0', borderRadius: '5px' }} 
              />
              
              {goal.vago && (
                <div style={{ padding: '15px', backgroundColor: '#f0fff4', borderRadius: '8px', marginTop: '10px' }}>
                  <h4 style={{ color: '#2f855a' }}>Ora rendiamolo SMART:</h4>
                  
                  <input type="text" name="S" value={goal.S} onChange={handleInputChange} placeholder="Specifico (S) - Cosa vuoi esattamente?" style={{ width: '100%', margin: '5px 0', padding: '8px', border: '1px solid #cbd5e0', borderRadius: '5px' }} required />
                  <input type="text" name="M" value={goal.M} onChange={handleInputChange} placeholder="Misurabile (M) - Come misurerai il successo?" style={{ width: '100%', margin: '5px 0', padding: '8px', border: '1px solid #cbd5e0', borderRadius: '5px' }} required />
                  <input type="text" name="A" value={goal.A} onChange={handleInputChange} placeholder="Raggiungibile (A) - È realistico?" style={{ width: '100%', margin: '5px 0', padding: '8px', border: '1px solid #cbd5e0', borderRadius: '5px' }} required />
                  <input type="text" name="R" value={goal.R} onChange={handleInputChange} placeholder="Rilevante (R) - Perché è importante per te?" style={{ width: '100%', margin: '5px 0', padding: '8px', border: '1px solid #cbd5e0', borderRadius: '5px' }} required />
                  <input type="text" name="T" value={goal.T} onChange={handleInputChange} placeholder="Temporizzato (T) - Entro quando lo farai?" style={{ width: '100%', margin: '5px 0', padding: '8px', border: '1px solid #cbd5e0', borderRadius: '5px' }} required />
                  
                  {/* Cambiato in type="submit" */}
                  <button type="submit" className="btn" style={{ marginTop: '15px', backgroundColor: '#38b2ac', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
                    Genera Scheda e Salva
                  </button>
                </div>
              )}
            </form>
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
                <button type="button" onClick={() => setShowCard(false)} style={{ backgroundColor: '#cbd5e0', padding: '8px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                  Modifica / Nuovo
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { GoalSetter };