import React, { useState } from 'react';

const CinquePerche = (props) => {
  const { toggleAccordion, openAccordion } = props;

  // 1. Creiamo lo stato per memorizzare i dati del form
  const [percheData, setPercheData] = useState({
    p_problema: '',
    p_1: '',
    p_2: '',
    p_3: '',
    p_4: '',
    p_5: ''
  });

  // 2. Funzione per aggiornare lo stato mentre l'utente digita
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPercheData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // 3. Funzione che intercetta il salvataggio per inviare i dati al server
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita il ricaricamento della pagina
    
    // Ecco la tua variabile pronta con l'analisi completa!
    console.log("Dati de I Cinque Perché pronti per il server:", percheData);
const ora = new Date();
    const attivita={
      date:ora,
      classe:"problem_solving",
      tipo:"cinque_perche",
      valore:JSON.stringify(percheData),
      id_user:1
    }
    API.storeAttivita(attivita).then((data)=>{
      console.log(data);
    });
  };

  return (
    <>
      {/* --- I CINQUE PERCHÉ --- */}
      <div className={`accordion-item ${openAccordion?.cinquePerche ? 'active' : ''}`} id="accordion-cinque-perche">
        <div className="accordion-header" onClick={() => toggleAccordion('cinquePerche')}>
          <div className="header-title">
            <span className="icon">🔍</span>
            <h3>I Cinque Perché</h3>
          </div>
          <span className="toggle-icon">{openAccordion?.cinquePerche ? '−' : '+'}</span>
        </div>

        <div className="accordion-content">
          <div className="accordion-inner">
            
            <div className="instruction-box" style={{ backgroundColor: '#faf5ff', borderLeftColor: '#805ad5' }}>
              <h4 style={{ color: '#553c9a' }}>Rintraccia le origini del problema</h4>
              <p style={{ color: '#4a5568', marginBottom: '1rem' }}>Quando c'è un problema, chiediti “perché?” cinque volte consecutive per scavare oltre i sintomi superficiali e trovare la vera causa radice.</p>
              
              <div style={{ backgroundColor: '#ffffff', padding: '1rem', borderRadius: '8px', border: '1px solid #e9d8fd' }}>
                <h5 style={{ color: '#6b46c1', marginBottom: '0.5rem' }}>Esempio in ambito riabilitativo:</h5>
                <p style={{ color: '#4a5568', fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Problema:</strong> Il paziente non esegue gli esercizi assegnati a casa.</p>
                <ul style={{ listStyleType: 'none', fontSize: '0.9rem', color: '#4a5568' }}>
                  <li>1. <em>Perché?</em> Lamenta troppo dolore durante l'esecuzione.</li>
                  <li>2. <em>Perché?</em> L'articolazione è troppo infiammata.</li>
                  <li>3. <em>Perché?</em> Carica troppo peso sull'arto lesionato durante la giornata lavorativa.</li>
                  <li>4. <em>Perché?</em> Non usa le stampelle come prescritto.</li>
                  <li>5. <em>Perché?</em> <strong>Causa radice:</strong> Si vergogna di usare le stampelle sul posto di lavoro. (La soluzione dovrà quindi agire sull'accettazione dell'ausilio o su alternative terapeutiche, non solo sul prescrivere "più esercizi").</li>
                </ul>
              </div>
            </div>

            {/* Aggiunto onSubmit al form */}
            <form id="form-5perche" className="perche-form" style={{ marginTop: '2rem' }} onSubmit={handleSubmit}>
              
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: '600', color: 'var(--text-color)', marginBottom: '0.5rem' }}>Identifica il tuo Problema</label>
                <input 
                  type="text" 
                  name="p_problema" 
                  style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px', fontFamily: 'var(--font-family)' }} 
                  placeholder="Es: Il paziente arriva sempre in ritardo alle sedute..." 
                  value={percheData.p_problema}
                  onChange={handleInputChange}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginLeft: '1rem', borderLeft: '2px solid #e9d8fd', paddingLeft: '1rem' }}>
                <input 
                  type="text" 
                  name="p_1" 
                  style={{ width: '100%', padding: '0.6rem', border: '1px solid #cbd5e0', borderRadius: '6px' }} 
                  placeholder="1. Perché?" 
                  value={percheData.p_1}
                  onChange={handleInputChange}
                />
                <input 
                  type="text" 
                  name="p_2" 
                  style={{ width: '100%', padding: '0.6rem', border: '1px solid #cbd5e0', borderRadius: '6px' }} 
                  placeholder="2. Perché?" 
                  value={percheData.p_2}
                  onChange={handleInputChange}
                />
                <input 
                  type="text" 
                  name="p_3" 
                  style={{ width: '100%', padding: '0.6rem', border: '1px solid #cbd5e0', borderRadius: '6px' }} 
                  placeholder="3. Perché?" 
                  value={percheData.p_3}
                  onChange={handleInputChange}
                />
                <input 
                  type="text" 
                  name="p_4" 
                  style={{ width: '100%', padding: '0.6rem', border: '1px solid #cbd5e0', borderRadius: '6px' }} 
                  placeholder="4. Perché?" 
                  value={percheData.p_4}
                  onChange={handleInputChange}
                />
                <input 
                  type="text" 
                  name="p_5" 
                  style={{ width: '100%', padding: '0.6rem', border: '1px solid #805ad5', borderRadius: '6px', backgroundColor: '#faf5ff' }} 
                  placeholder="5. Perché? (Causa Radice)" 
                  value={percheData.p_5}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-actions" style={{ marginTop: '2rem', textAlign: 'right' }}>
                {/* Cambiato type="button" in type="submit" */}
                <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#805ad5', border: 'none', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                  Salva Analisi
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export { CinquePerche };