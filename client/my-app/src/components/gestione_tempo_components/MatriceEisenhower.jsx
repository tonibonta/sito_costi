import React, { useState } from 'react';

const MatriceEisenhower = (props) => {
  const { toggleAccordion, openAccordion } = props;

  // 1. Creiamo lo stato per memorizzare i dati dei 4 quadranti
  const [eisenhowerData, setEisenhowerData] = useState({
    eis_fai: '',
    eis_pianifica: '',
    eis_delega: '',
    eis_elimina: ''
  });

  // 2. Funzione per aggiornare lo stato mentre l'utente digita
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEisenhowerData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // 3. Funzione che intercetta il salvataggio (qui farai la chiamata al server)
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita il ricaricamento della pagina
    
    // Ecco la tua variabile pronta con i dati dei 4 quadranti!
    console.log("Dati della matrice pronti per il server:", eisenhowerData);
    
    // Se passi una funzione dal componente padre (es. App.js), puoi chiamarla qui:
    // if (props.onSave) props.onSave(eisenhowerData);
  };

  return (
    <>
      {/* MATRICE DI EISENHOWER */}
      <div className={`accordion-item ${openAccordion?.eisenhower ? 'active' : ''}`} id="accordion-eisenhower">
        <div className="accordion-header" onClick={() => toggleAccordion('eisenhower')}>
          <div className="header-title">
            <span className="icon">📊</span>
            <h3>Matrice di Eisenhower</h3>
          </div>
          <span className="toggle-icon">{openAccordion?.eisenhower ? '−' : '+'}</span>
        </div>

        <div className="accordion-content">
          <div className="accordion-inner">
            <div className="instruction-box" style={{ backgroundColor: '#ebf8ff', borderLeftColor: '#3182ce' }}>
              <h4 style={{ color: '#2b6cb0' }}>Cos'è la Matrice di Eisenhower?</h4>
              <p style={{ color: '#4a5568' }}>Pensa alle tue attività e classificale utilizzando questa matrice di priorità. Inserisci i tuoi compiti nei quadranti corretti.</p>
            </div>

            {/* Aggiunto onSubmit al form */}
            <form id="form-eisenhower" className="eisenhower-form" style={{ marginTop: '2rem' }} onSubmit={handleSubmit}>
              <div className="eisenhower-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                
                <div className="matrix-box" style={{ backgroundColor: '#fff5f5', border: '2px solid #fc8181', borderRadius: '12px', padding: '1.5rem' }}>
                  <h5 style={{ color: '#c53030', fontSize: '1.1rem', marginBottom: '0.5rem' }}>1. Importante e Urgente (FAI)</h5>
                  <p style={{ fontSize: '0.85rem', color: '#718096', marginBottom: '1rem' }}>Attività con scadenze immediate che non possono essere delegate.</p>
                  <textarea 
                    name="eis_fai" 
                    rows="3" 
                    style={{ width: '100%', padding: '0.8rem', border: '1px solid #feb2b2', borderRadius: '8px' }} 
                    placeholder="Es: Consegnare la tesi entro domani..."
                    value={eisenhowerData.eis_fai}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="matrix-box" style={{ backgroundColor: '#f0fff4', border: '2px solid #68d391', borderRadius: '12px', padding: '1.5rem' }}>
                  <h5 style={{ color: '#2f855a', fontSize: '1.1rem', marginBottom: '0.5rem' }}>2. Importante, NON Urgente (PIANIFICA)</h5>
                  <p style={{ fontSize: '0.85rem', color: '#718096', marginBottom: '1rem' }}>Attività strategiche a lungo termine, essenziali per la crescita.</p>
                  <textarea 
                    name="eis_pianifica" 
                    rows="3" 
                    style={{ width: '100%', padding: '0.8rem', border: '1px solid #9ae6b4', borderRadius: '8px' }} 
                    placeholder="Es: Studiare 2 ore al giorno per l'esame del mese prossimo..."
                    value={eisenhowerData.eis_pianifica}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="matrix-box" style={{ backgroundColor: '#fffff0', border: '2px solid #f6e05e', borderRadius: '12px', padding: '1.5rem' }}>
                  <h5 style={{ color: '#b7791f', fontSize: '1.1rem', marginBottom: '0.5rem' }}>3. Urgente, NON Importante (DELEGA)</h5>
                  <p style={{ fontSize: '0.85rem', color: '#718096', marginBottom: '1rem' }}>Compiti che richiedono attenzione immediata ma non aiutano i tuoi obiettivi.</p>
                  <textarea 
                    name="eis_delega" 
                    rows="3" 
                    style={{ width: '100%', padding: '0.8rem', border: '1px solid #fef08a', borderRadius: '8px' }} 
                    placeholder="Es: Rispondere a email di poco conto..."
                    value={eisenhowerData.eis_delega}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="matrix-box" style={{ backgroundColor: '#edf2f7', border: '2px solid #a0aec0', borderRadius: '12px', padding: '1.5rem' }}>
                  <h5 style={{ color: '#4a5568', fontSize: '1.1rem', marginBottom: '0.5rem' }}>4. NON Urgente, NON Importante (ELIMINA)</h5>
                  <p style={{ fontSize: '0.85rem', color: '#718096', marginBottom: '1rem' }}>Attività superflue o distrazioni da eliminare.</p>
                  <textarea 
                    name="eis_elimina" 
                    rows="3" 
                    style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px' }} 
                    placeholder="Es: Scrollare i social per 3 ore..."
                    value={eisenhowerData.eis_elimina}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>

              <div className="form-actions" style={{ marginTop: '2rem', textAlign: 'right' }}>
                <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#3182ce', border: 'none', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Salva Matrice</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { MatriceEisenhower };