import React, { useState } from 'react';
import API from '../API'; // Assicurati che il percorso dell'API sia corretto
import { useLocation } from 'react-router';

const Negativopositivo = (props) => {
  const [msg, setMsg] = useState(null);
const location=useLocation();
  const [openAccordion, setOpenAccordion] = useState({
    dalnegativoalpositivo: false
  });

  const toggleAccordion = (id) => {
    setOpenAccordion(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const frasiNegative = [
    "Non sono portato per questa materia, è inutile che ci riprovi, tanto fallirò di nuovo.",
    "Ho perso troppo tempo questa settimana, ormai la sessione è saltata, non ha senso nemmeno iniziare a studiare oggi.",
    "Tutti i miei compagni hanno già finito la tesi, io sono l'unico indietro. Sono un fallimento totale rispetto a loro.",
    "Mi è venuta l'ansia e ho fatto scena muta su una domanda facile. Il professore penserà che sono un ignorante e non riuscirò mai a laurearmi.",
    "Oggi a lezione non ho capito nulla. È tutto troppo difficile, tanto vale che mollo questo corso."
  ];

  // 1. Creiamo lo stato per memorizzare i dati del form dinamicamente
  const [attivitaData, setAttivitaData] = useState(
    props.val == null 
      ? { 
          frase_0: '', frase_1: '', frase_2: '', frase_3: '', frase_4: '' 
        } 
      : JSON.parse(props.val.valore)
  );

  // 2. Funzione per aggiornare lo stato mentre l'utente digita
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAttivitaData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // 3. Funzione che intercetta il salvataggio per inviare i dati al server
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    const ora = new Date();
    const attivita = {
      date: ora,
      classe: "stili_attributivi", // Modifica con il nome dell'area corretto se diverso
      tipo: "dal_negativo_al_positivo",
      valore: JSON.stringify(attivitaData),
      id_user: props.user.id
    };

    API.storeAttivita(attivita).then((data) => {
      setMsg("Completato!");
      setTimeout(() => { setMsg(null) }, 4000);
    });
  };

  return (
    <>
      {/* DAL NEGATIVO AL POSITIVO */}
      <div className={`accordion-item ${openAccordion?.dalnegativoalpositivo ? 'active' : ''}`} id="accordion-dal-negativo">
        <div className="accordion-header" onClick={() => toggleAccordion('dalnegativoalpositivo')}>
          <div className="header-title">
            <span className="icon">🔄</span>
            <h3>Dal Negativo al Positivo {(window.location.pathname === "/storico" && props.val != null) ? new Date(props.val.date).toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : ""}</h3>
          </div>
          <span className="toggle-icon">{openAccordion?.dalnegativoalpositivo ? '−' : '+'}</span>
        </div>

        <div className="accordion-content">
          <div className="accordion-inner">
            <div className="instruction-box" style={{ backgroundColor: '#f0fff4', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #48bb78', marginBottom: '25px' }}>
              <p style={{ margin: 0, fontSize: '1.1rem', color: '#2f855a' }}>
                <strong>Prova a trasformare queste frasi negative in frasi positive e proattive.</strong><br/>
                Concentrati su ciò che è nel tuo controllo (locus interno) e su come puoi migliorare la situazione.
              </p>
            </div>
            
            <form id="form-dalnegativoalpositivo" className="dalnegativo-form" onSubmit={handleSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {frasiNegative.map((frase, index) => (
                  <div key={index} style={{ padding: '15px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                    <div style={{ marginBottom: '10px' }}>
                      <span style={{ display: 'inline-block', backgroundColor: '#fed7d7', color: '#c53030', padding: '3px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '8px' }}>
                        Pensiero Limitante
                      </span>
                      <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a5568', fontStyle: 'italic' }}>
                        "{frase}"
                      </p>
                    </div>
                    
                    <div style={{ marginTop: '15px' }}>
                      <textarea 
                        name={`frase_${index}`}
                        placeholder="Riscrivi qui la frase in chiave proattiva..."
                        value={attivitaData[`frase_${index}`]}
                        onChange={handleInputChange}
                        disabled={window.location.pathname === "/storico" ? true : false}
                        style={{ 
                          width: '100%', 
                          padding: '12px', 
                          borderRadius: '6px', 
                          border: '1px solid #cbd5e0', 
                          minHeight: '60px', 
                          fontFamily: 'inherit',
                          resize: 'vertical',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="form-actions" style={{ marginTop: '2rem', textAlign: 'right' }}>
                {location.pathname !== "/storico" ? (
                  msg == null ? (
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#48bb78', border: 'none', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                      Salva Riflessioni
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#2d9102ff', border: 'none', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                      {msg}
                    </button>
                  )
                ) : (
                  <button type="button" onClick={() => props.handleDelete(props.val)} className="btn" style={{ backgroundColor: '#910202ff', border: 'none', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                    Cancella
                  </button>
                )}
              </div>
            </form>

            <p style={{ textAlign: 'center', marginTop: '25px', fontWeight: 'bold', color: '#2d3748' }}>
              Riformulare i pensieri non significa ignorare le difficoltà, ma affrontarle con un atteggiamento costruttivo! 🚀
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { Negativopositivo };