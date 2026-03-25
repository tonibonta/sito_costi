import React, { useState } from 'react';
import API from '../API';

const AlberoProblemi = (props) => {
  const [msg, setMsg] = useState(null);
  
  const [openAccordion, setOpenAccordion] = useState({
    albero: false
  });

  const toggleAccordion = (id) => {
    setOpenAccordion(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const [casi, setCasi] = useState([
    "Paziente anziano (78 anni) con recente protesi totale d'anca. A due settimane dalle dimissioni mostra una gravissima rigidità articolare e debolezza. Durante il colloquio emerge che vive solo in una casa con molte scale, ha paura di cadere, si nutre in modo inadeguato perché non riesce a fare la spesa e passa quasi tutta la giornata a letto.",
    "Sei al terzo anno di corso. Ti viene assegnata un'intera ala del reparto perché 'sei bravo e ormai sai fare tutto'. Ti ritrovi a gestire 6 pazienti complessi contemporaneamente senza che il tuo tutor sia presente nella stanza o disponibile per un confronto. Senti di stare lavorando come un dipendente non pagato piuttosto che come uno studente in formazione.",
    "Ti ritrovi a gestire un paziente da solo (perché il tutor è impegnato altrove) pur non avendo ancora l'abilitazione legale. Vivi con il terrore di sbagliare una manovra e causare un danno fisico, sapendo di non essere coperto adeguatamente.",
    "Sei uno studente di Logopedia o TNPEE (Psicomotricità) in un centro pediatrico. Segui da due mesi un bambino di 5 anni, Marco, che ha gravi difficoltà comunicative. Marco ha finalmente iniziato a fidarsi di te e ti accoglie ogni volta con un abbraccio. La madre di Marco, stremata dalla situazione familiare, inizia a usarti come confidente, raccontandoti i suoi problemi personali e chiedendoti consigli che esulano dalle tue competenze (es. ‘Secondo lei dovrei cambiare il farmaco che gli ha dato il neuropsichiatra?’).",
    "Sei al secondo anno di Fisioterapia. Il tuo tirocinio (8:00 - 16:00) è in un reparto di ortopedia molto frenetico. Il tuo tutor è bravissimo ma esigente: ti chiede di ripassare ogni sera la biomeccanica delle articolazioni che vedrete il giorno dopo. Tuttavia, tra tre settimane hai l'esame di Neurologia e il pomeriggio sei così stanco che le parole sul libro iniziano a danzare.",
    "Durante le lezioni hai imparato che per una determinata patologia l'esercizio attivo è la scelta più efficace secondo le ultime linee guida internazionali. Il tuo tutor di tirocinio, un professionista con 30 anni di esperienza, ti ordina invece di applicare solo terapie passive, dicendo: 'Le linee guida sono belle sulla carta, ma qui si è sempre fatto così e i pazienti non si lamentano'"
  ]);

  // NUOVO: Stato per tenere traccia dell'indice del caso attuale
  const [casoIndex, setCasoIndex] = useState(0);

  // 1. Creiamo lo stato per memorizzare i dati dell'Albero dei Problemi
  const [alberoData, setAlberoData] = useState(props.val == null ? {
    albero_caso: casi[0],
    albero_effetti: '',
    albero_tronco: '',
    albero_cause: ''
  } : JSON.parse(props.val.valore));

  // NUOVO: Funzioni per navigare tra i casi
  const handlePrevCaso = () => {
    const newIndex = casoIndex === 0 ? casi.length - 1 : casoIndex - 1;
    setCasoIndex(newIndex);
    setAlberoData(prev => ({ ...prev, albero_caso: casi[newIndex] }));
  };

  const handleNextCaso = () => {
    const newIndex = casoIndex === casi.length - 1 ? 0 : casoIndex + 1;
    setCasoIndex(newIndex);
    setAlberoData(prev => ({ ...prev, albero_caso: casi[newIndex] }));
  };

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
    e.preventDefault();
    
    console.log("Dati dell'Albero dei Problemi pronti per il server:", alberoData);
    
    const ora = new Date();
    const attivita = {
      date: ora,
      classe: "problem_solving",
      tipo: "albero_problemi",
      valore: JSON.stringify(alberoData),
      id_user: props.user.id
    };
    
    API.storeAttivita(attivita).then((data) => {
      setMsg("Completato!");
      setTimeout(() => { setMsg(null) }, 4000);
    });
  };

  // Determina se siamo nella pagina storico
  const isStorico = window.location.pathname === "/storico"; // o location.pathname a seconda del tuo setup router

  return (
    <>
      {/* --- L'ALBERO DEI PROBLEMI --- */}
      <div className={`accordion-item ${openAccordion?.albero ? 'active' : ''}`} id="accordion-albero">
        <div className="accordion-header" onClick={() => toggleAccordion('albero')}>
          <div className="header-title">
            <span className="icon">🌳</span>
            <h3>
              L'Albero dei Problemi {(isStorico && props.val != null) ? new Date(props.val.date).toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : ""}
            </h3>
          </div>
          <span className="toggle-icon">{openAccordion?.albero ? '−' : '+'}</span>
        </div>

        <div className="accordion-content">
          <div className="accordion-inner">
            
            <div className="instruction-box" style={{ backgroundColor: '#f0fff4', borderLeftColor: '#38a169', padding: '1rem', borderRadius: '8px' }}>
              <h4 style={{ color: '#276749' }}>Visualizza la struttura del problema</h4>
              <p style={{ color: '#4a5568', marginBottom: '1rem' }}>Scomponi una situazione complessa per capirne cause ed effetti:</p>
              <ul style={{ listStyleType: 'none', marginBottom: '1.5rem', color: '#4a5568' }}>
                <li style={{ marginBottom: '0.5rem' }}>🪵 <strong>Tronco:</strong> Il problema centrale, reale e tangibile.</li>
                <li style={{ marginBottom: '0.5rem' }}>🪢 <strong>Radici:</strong> Le cause. Si dividono in primarie (direttamente sotto il tronco) e secondarie (radici profonde).</li>
                <li>🍃 <strong>Chioma:</strong> Gli effetti. Le conseguenze visibili del problema sul paziente, la sua vita o l'ambiente.</li>
              </ul>

              {/* BOX CASO CLINICO MODIFICATO */}
              <div style={{ backgroundColor: '#ffffff', padding: '1rem', borderRadius: '8px', border: '1px solid #c6f6d5' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h5 style={{ color: '#2f855a', margin: 0 }}>
                    Caso Clinico {isStorico ? "" : `(${casoIndex + 1}/${casi.length})`}:
                  </h5>
                  
                  {/* Controlli di navigazione visibili solo se non siamo nello storico */}
                  {!isStorico && (
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button 
                        type="button" 
                        onClick={handlePrevCaso}
                        style={{ background: '#e2e8f0', border: 'none', borderRadius: '4px', padding: '0.2rem 0.6rem', cursor: 'pointer' }}
                      >
                        ◀
                      </button>
                      <button 
                        type="button" 
                        onClick={handleNextCaso}
                        style={{ background: '#e2e8f0', border: 'none', borderRadius: '4px', padding: '0.2rem 0.6rem', cursor: 'pointer' }}
                      >
                        ▶
                      </button>
                    </div>
                  )}
                </div>
                <p style={{ color: '#4a5568', fontSize: '0.95rem', fontStyle: 'italic', marginTop: '0.5rem' }}>
                  "{alberoData.albero_caso}"
                </p>
              </div>
            </div>

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
                  disabled={isStorico}
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
                  disabled={isStorico}
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
                  disabled={isStorico}
                ></textarea>
              </div>

              <div className="form-actions" style={{ marginTop: '2rem', textAlign: 'right' }}>
                {!isStorico ? (
                  msg == null ? (
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#38a169', border: 'none', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                      Salva l'Albero
                    </button>
                  ) : (
                    <button type="button" className="btn btn-primary" disabled style={{ backgroundColor: '#2d9102', border: 'none', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'default', fontWeight: 'bold' }}>
                      {msg}
                    </button>
                  )
                ) : (
                  <button type="button" onClick={() => props.handleDelete(props.val)} className="btn" style={{ backgroundColor: '#910202', border: 'none', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                    Cancella
                  </button>
                )}
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export { AlberoProblemi };