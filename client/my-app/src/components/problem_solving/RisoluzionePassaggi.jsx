import React, { useState } from 'react';
import API from '../API';
import { useLocation } from 'react-router';

const RisoluzionePassaggi = (props) => {
  const location=useLocation();
 const toggleAccordion = (id) => {
   setOpenAccordion(prev => ({
     ...prev,
     [id]: !prev[id]
   }));
 };
  const [openAccordion, setOpenAccordion] = useState({
      seiStep:  false
    });


  // 1. Creiamo lo stato per memorizzare i dati dei 6 passaggi
  const [stepData, setStepData] = useState(props.val==null?{
    step_1: '',
    step_2: '',
    step_3: '',
    step_4: '',
    step_5: '',
    step_6: ''
  }:JSON.parse(props.val.valore));

  // 2. Funzione per aggiornare lo stato mentre l'utente digita
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStepData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // 3. Funzione che intercetta il salvataggio per l'invio al server
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita il ricaricamento della pagina
    
    // Ecco la tua variabile pronta con il piano d'azione!
    console.log("Dati del Problem Solving in 6 passaggi pronti per il server:", stepData);
    
const ora = new Date();
    const attivita={
      date:ora,
      classe:"problem_solving",
      tipo:"risoluzione_passaggi",
      valore:JSON.stringify(stepData),
      id_user:props.user.id
    }
    API.storeAttivita(attivita).then((data)=>{
      console.log(data);
    });
  };

  const stepsArray = [
    { step: 1, title: 'Definisci il problema', placeholder: 'Descrivi chiaramente cosa non va.' },
    { step: 2, title: 'Trova la causa', placeholder: 'Perché sta succedendo? (Puoi usare i 5 Perché)' },
    { step: 3, title: 'Sviluppa varie soluzioni', placeholder: 'Fai brainstorming: quali sono le opzioni possibili?' },
    { step: 4, title: 'Scegli una soluzione', placeholder: "Qual è l'opzione migliore in termini di risorse/risultati?" },
    { step: 5, title: 'Attua una soluzione', placeholder: 'Come e quando la metterai in pratica?' },
    { step: 6, title: 'Valuta i risultati', placeholder: 'Ha funzionato? Cosa puoi migliorare la prossima volta?' }
  ];

  return (
    <>
      {/* --- RISOLUZIONE IN 6 PASSAGGI --- */}
      <div className={`accordion-item ${openAccordion?.seiStep ? 'active' : ''}`} id="accordion-6step">
        <div className="accordion-header" onClick={() => toggleAccordion('seiStep')}>
          <div className="header-title">
            <span className="icon">🧩</span>
            <h3>Risoluzione dei problemi in 6 passaggi {(location.pathname==="/storico" && props.val!=null)?new Date(props.val.date).toLocaleDateString('it-IT',{  day: '2-digit',  month: '2-digit',   year: 'numeric',   hour: '2-digit',   minute: '2-digit'}):""}</h3>
          </div>
          <span className="toggle-icon">{openAccordion?.seiStep ? '−' : '+'}</span>
        </div>

        <div className="accordion-content">
          <div className="accordion-inner">
            
            <div className="instruction-box" style={{ backgroundColor: '#ebf8ff', borderLeftColor: '#3182ce' }}>
              <h4 style={{ color: '#2b6cb0' }}>Il ciclo del Problem Solving</h4>
              <p style={{ color: '#4a5568' }}>Un approccio strutturato ti permette di non saltare a conclusioni affrettate e di adottare la soluzione più efficace.</p>
            </div>

            {/* Aggiunto onSubmit al form */}
            <form id="form-6step" className="step-form" style={{ marginTop: '2rem' }} onSubmit={handleSubmit}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                {stepsArray.map(({ step, title, placeholder }) => {
                  const fieldName = `step_${step}`;
                  return (
                    <div key={step} style={{ backgroundColor: '#f7fafc', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #4299e1' }}>
                      <label style={{ fontWeight: '600', color: '#2d3748', marginBottom: '0.5rem', display: 'block' }}>
                        {step}. {title}
                      </label>
                      <input 
                        type="text" 
                        name={fieldName} 
                        style={{ width: '100%', padding: '0.5rem', border: '1px solid #cbd5e0', borderRadius: '4px' }} 
                        placeholder={placeholder} 
                        value={stepData[fieldName]}
                        onChange={handleInputChange}
                        disabled={location.pathname==="/storico"?true:false}

                      />
                    </div>
                  );
                })}
              </div>

              <div className="form-actions" style={{ marginTop: '2rem', textAlign: 'right' }}>
                

                  {location.pathname!=="/storico"?

                <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#3182ce', border: 'none', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                  Salva Piano d'Azione
                </button>
                :""}
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export { RisoluzionePassaggi };