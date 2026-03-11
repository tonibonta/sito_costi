import React, { useState } from 'react';

const AlberoProblemi = (props) => {
  const { toggleAccordion, openAccordion } = props;

  // 1. Creiamo lo stato per memorizzare i dati dell'Albero dei Problemi
  const [alberoData, setAlberoData] = useState({
    albero_effetti: '',
    albero_tronco: '',
    albero_cause: ''
  });

  // 2. Funzione per aggiornare lo stato mentre l'utente digita
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAlberoData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // 3. Funzione che intercetta il salvataggio per l'invio al server
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita il ricaricamento della pagina
    
    // Ecco la tua variabile pronta con l'analisi dell'Albero!
    console.log("Dati dell'Albero dei Problemi pronti per il server:", alberoData);
    
    // Se passi una funzione dal componente padre, la chiami qui:
    // if (props.onSave) props.onSave(alberoData);
  };

  return (
    <>
       {/* --- L'ALBERO DEI PROBLEMI --- */}
        <div className={`accordion-item ${openAccordion?.albero ? 'active' : ''}`} id="accordion-albero">
          <div className="accordion-header" onClick={() => toggleAccordion('albero')}>
            <div className="header-title">
              <span className="icon">🌳</span>
              <h3>L'Albero dei Problemi</h3>
            </div>
            <span className="toggle-icon">{openAccordion?.albero ? '−' : '+'}</span>
          </div>

          <div className="accordion-content">
            <div className="accordion-inner">
              
              <div className="instruction-box" style={{ backgroundColor: '#f0fff4', borderLeftColor: '#38a169' }}>
                <h4 style={{ color: '#276749' }}>Visualizza la struttura del problema</h4>
                <p style={{ color: '#4a5568', marginBottom: '1rem' }}>Scomponi una situazione complessa per capirne cause ed effetti:</p>
                <ul style={{ listStyleType: 'none', marginBottom: '1.5rem', color: '#4a5568' }}>
                  <li style={{ marginBottom: '0.5rem' }}>🪵 <strong>Tronco:</strong> Il problema centrale, reale e tangibile.</li>
                  <li style={{ marginBottom: '0.5rem' }}>🪢 <strong>Radici:</strong> Le cause. Si dividono in primarie (direttamente sotto il tronco) e secondarie (radici profonde).</li>
                  <li>🍃 <strong>Chioma:</strong> Gli effetti. Le conseguenze visibili del problema sul paziente, la sua vita o l'ambiente.</li>
                </ul>

                <div style={{ backgroundColor: '#ffffff', padding: '1rem', borderRadius: '8px', border: '1px solid #c6f6d5' }}>
                  <h5 style={{ color: '#2f855a', marginBottom: '0.5rem' }}>Caso Clinico da analizzare:</h5>
                  <p style={{ color: '#4a5568', fontSize: '0.95rem', fontStyle: 'italic' }}>"Paziente anziano (78 anni) con recente protesi totale d'anca. A due settimane dalle dimissioni mostra una gravissima rigidità articolare e debolezza. Durante il colloquio emerge che vive solo in una casa con molte scale, ha paura di cadere, si nutre in modo inadeguato perché non riesce a fare la spesa e passa quasi tutta la giornata a letto."</p>
                </div>
              </div>

              {/* Aggiunto onSubmit al form */}
              <form id="form-albero" className="albero-form" style={{ marginTop: '2rem' }} onSubmit={handleSubmit}>
                
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontWeight: '600', color: '#2f855a', marginBottom: '0.5rem' }}>🍃 Chioma (Effetti / Conseguenze)</label>
                  <textarea 
                    name="albero_effetti" 
                    rows="2" 
                    style={{ width: '100%', padding: '0.8rem', border: '1px solid #9ae6b4', borderRadius: '8px' }} 
                    placeholder="Quali sono gli impatti visibili di questo problema?"
                    value={alberoData.albero_effetti}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontWeight: '600', color: '#744210', marginBottom: '0.5rem' }}>🪵 Tronco (Problema Centrale)</label>
                  <textarea 
                    name="albero_tronco" 
                    rows="2" 
                    style={{ width: '100%', padding: '0.8rem', border: '1px solid #d69e2e', borderRadius: '8px' }} 
                    placeholder="Qual è il problema principale di questo paziente?"
                    value={alberoData.albero_tronco}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontWeight: '600', color: '#b7791f', marginBottom: '0.5rem' }}>🪢 Radici (Cause primarie e secondarie)</label>
                  <textarea 
                    name="albero_cause" 
                    rows="3" 
                    style={{ width: '100%', padding: '0.8rem', border: '1px solid #ecc94b', borderRadius: '8px' }} 
                    placeholder="Quali fattori stanno generando il problema? (Es. Paura di cadere, barriere architettoniche...)"
                    value={alberoData.albero_cause}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="form-actions" style={{ marginTop: '2rem', textAlign: 'right' }}>
                  {/* Cambiato type="button" in type="submit" */}
                  <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#38a169', border: 'none', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                    Salva l'Albero
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
    </>
  );
};

export { AlberoProblemi };