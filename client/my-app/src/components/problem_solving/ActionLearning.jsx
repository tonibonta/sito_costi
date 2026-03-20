import React, { useEffect, useState } from 'react';
import API from '../API';
import { useLocation } from 'react-router';

const ActionLearning = (props) => {
 const location=useLocation();
 const [msg,setMsg]=useState(null);

const toggleAccordion = (id) => {
   setOpenAccordion(prev => ({
     ...prev,
     [id]: !prev[id]
   }));
 };
  const [openAccordion, setOpenAccordion] = useState({
      action:  false
    });
  // 1. Creiamo lo stato per memorizzare i dati dei 5 scenari
  const [actionData, setActionData] = useState(props.val==null?{
    scenario_1: '',
    scenario_2: '',
    scenario_3: '',
    scenario_4: '',
    scenario_5: ''
  }:JSON.parse(props.val.valore));

  // 2. Funzione per aggiornare lo stato mentre l'utente digita
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setActionData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // 3. Funzione che intercetta il salvataggio per l'invio al server
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita il ricaricamento della pagina
    
    // Ecco la tua variabile pronta con le riflessioni del gruppo!
    console.log("Dati Action Learning pronti per il server:", actionData);
const ora = new Date();
    const attivita={
      date:ora,
      classe:"problem_solving",
      tipo:"action_learning",
      valore:JSON.stringify(actionData),
      id_user:props.user.id
    }
    API.storeAttivita(attivita).then((data)=>{
     setMsg("Completato!");
     setTimeout(()=>{setMsg(null)},4000);
    });
  };
  
  // Array con i 5 scenari proposti per l'Action Learning
  const scenari = [
    "Un tuo collega eccellente inizia a mostrare segni di insofferenza: risponde in modo brusco ai pazienti, dimentica di compilare le cartelle e si isola durante le pause. Il clima sta diventando teso.",
    "La palestra riabilitativa è stata parzialmente chiusa per lavori. Vi trovate a lavorare in un corridoio stretto con tre pazienti che usano il deambulatore contemporaneamente. Lo spazio è caotico e rumoroso.",
    "La figlia di una paziente colpita da ictus pretende che la madre torni a camminare perfettamente entro due settimane per portarla a un matrimonio, ignorando i deficit cognitivi e motori severi. Accusa il team di 'non impegnarsi abbastanza'.",
    "In un reparto di riabilitazione intensiva, l'età media dei pazienti è salita drasticamente. Molti pazienti che hanno terminato il percorso clinico e hanno raggiunto il plateau riabilitativo (non possono migliorare oltre) restano occupando i posti letto per settimane perché le famiglie dichiarano di 'non essere pronte' o le strutture territoriali sono piene.",
    "Il medico preme per dimettere il paziente perché i parametri clinici sono stabili (ferita guarita, esami del sangue ok), ignorando il parere dei professionisti sanitari che segnalano che il paziente non è ancora sicuro per l'ambiente domestico."
  ];

  return (
    <div className={`accordion-item ${openAccordion?.action ? 'active' : ''}`} id="accordion-action-learning">
      
      <div className="accordion-header" onClick={() => toggleAccordion('action')}>
        <div className="header-title">
          <span className="icon">👥</span>
          <h3>Action Learning {(location.pathname==="/storico" && props.val!=null)?new Date(props.val.date).toLocaleDateString('it-IT',{  day: '2-digit',  month: '2-digit',   year: 'numeric',   hour: '2-digit',   minute: '2-digit'}):""}
 </h3>
        </div>
        <span className="toggle-icon">{openAccordion?.action ? '−' : '+'}</span>
      </div>

      <div className="accordion-content">
        <div className="accordion-inner">
          
          {/* Spiegazione dell'attività */}
          <div className="instruction-box" style={{ backgroundColor: '#fff5f7', borderLeftColor: '#d53f8c' }}>
            <h4 style={{ color: '#97266d' }}>Lavorare in Gruppo su Casi Reali</h4>
            <p style={{ color: '#4a5568', marginBottom: '1rem' }}>
              I gruppi di action learning lavorano su problemi individuali o collettivi focalizzandosi sull'uso di domande e riflessioni per estendere la propria capacità di pensiero, prendere coscienza del proprio livello di conoscenza e delle informazioni realmente disponibili, e creare nuove idee.
            </p>
            <p style={{ color: '#4a5568', fontWeight: 'bold' }}>
              Svolgi questi problemi coi tuoi compagni di corso, dividendovi in piccoli gruppi.
            </p>
          </div>

          {/* Aggiunto onSubmit al form */}
          <form className="action-learning-form" style={{ marginTop: '2rem' }} onSubmit={handleSubmit}>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
              
              {/* Generazione dinamica dei 5 box degli scenari */}
              {scenari.map((scenario, index) => {
                const fieldName = `scenario_${index + 1}`;
                return (
                  <div key={index} style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #fbb6ce', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                    <h5 style={{ color: '#b83280', marginBottom: '0.8rem', fontSize: '1.05rem' }}>Scenario {index + 1}</h5>
                    <p style={{ color: '#2d3748', marginBottom: '1.2rem', fontStyle: 'italic', fontSize: '0.95rem' }}>
                      "{scenario}"
                    </p>
                    
                    <label style={{ display: 'block', fontWeight: '600', color: '#4a5568', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                      La vostra riflessione / piano d'azione:
                    </label>
                    <textarea 
                      name={fieldName} 
                      rows="3" 
                      style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '6px', fontFamily: 'var(--font-family)' }} 
                      placeholder="Quali domande vi ponete? Quali informazioni mancano? Come agireste come team?"
                      value={actionData[fieldName]}
                      onChange={handleInputChange}


                    disabled={location.pathname==="/storico"?true:false}
                    ></textarea>
                  </div>
                );
              })}

            </div>

            <div className="form-actions" style={{ marginTop: '2rem', textAlign: 'right' }}>
              {location.pathname!=="/storico"?
              msg==null?
              <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#d53f8c', border: 'none', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                Salva Riflessioni di Gruppo
              </button>
                 : <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#2d9102ff', border: 'none', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>{msg}</button>
              :""}
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};

export { ActionLearning };