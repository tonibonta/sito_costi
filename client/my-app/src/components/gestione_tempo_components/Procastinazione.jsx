import React, { useState } from 'react';
import API from '../API';

const Procastinazione = (props) => {


 const [msg,setMsg]=useState(null);

 const toggleAccordion = (id) => {
    setOpenAccordion(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
   const [openAccordion, setOpenAccordion] = useState({
       procrastinazione:  false
     });

  // 1. Creiamo lo stato per memorizzare i dati del form
  const [procrastinazioneData, setProcrastinazioneData] = useState(props.val==null?{
    proc_rana: ''
  }:JSON.parse(props.val.valore));

  // 2. Funzione per aggiornare lo stato mentre l'utente digita
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProcrastinazioneData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // 3. Funzione che intercetta il salvataggio per inviare i dati al server
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita il ricaricamento della pagina
    
    // Ecco la tua variabile pronta con il testo della "rana"!
    console.log("Dati Procrastinazione pronti per il server:", procrastinazioneData);
 const ora = new Date();
    const attivita={
      date:ora,
      classe:"gestione_tempo",
      tipo:"procastinazione",
      valore:JSON.stringify(procrastinazioneData),
      id_user:props.user.id
    }
    API.storeAttivita(attivita).then((data)=>{
       setMsg("Completato!");
     setTimeout(()=>{setMsg(null)},4000);
    })

  };

  return (
    <>
      {/* LA PROCRASTINAZIONE */}
      <div className={`accordion-item ${openAccordion?.procrastinazione ? 'active' : ''}`} id="accordion-procrastinazione">
        <div className="accordion-header" onClick={() => toggleAccordion('procrastinazione')}>
          <div className="header-title">
            <span className="icon">🐸</span>
            <h3>La Procrastinazione  {(location.pathname==="/storico" && props.val!=null)?new Date(props.val.date).toLocaleDateString('it-IT',{  day: '2-digit',  month: '2-digit',   year: 'numeric',   hour: '2-digit',   minute: '2-digit'}):""}</h3>
          </div>
          <span className="toggle-icon">{openAccordion?.procrastinazione ? '−' : '+'}</span>
        </div>

        <div className="accordion-content">
          <div className="accordion-inner">
            <div className="instruction-box" style={{ backgroundColor: '#e6fffa', borderLeftColor: '#38b2ac' }}>
              <h4 style={{ color: '#2c7a7b' }}>Strategie e tecniche per combatterla</h4>
              <p style={{ color: '#4a5568', marginBottom: '1rem' }}>Spesso il momento più difficile è iniziare. Ecco alcune strategie pratiche per sbloccarti:</p>
              <ul style={{ listStyleType: 'none', marginBottom: '1.5rem', color: '#4a5568' }}>
                <li style={{ marginBottom: '0.8rem' }}>⏳ <strong>"Inizia per cinque minuti":</strong> impegnati a svolgere un compito temuto per soli cinque minuti...</li>
                <li style={{ marginBottom: '0.8rem' }}>🧩 <strong>Microtask:</strong> suddividi i compiti complessi in micro-task (micro obiettivi).</li>
                <li>🐸 <strong>"Eat the frog" (Mangia la rana):</strong>
                  <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
                    <li style={{ marginBottom: '0.3rem' }}>Identifica la tua "rana": l'attività più importante e complessa della giornata...</li>
                    <li style={{ marginBottom: '0.3rem' }}>Affrontala subito: esegui questo compito come primissima cosa al mattino...</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Aggiunto onSubmit al form */}
            <form id="form-procrastinazione" className="procrastinazione-form" style={{ marginTop: '2rem' }} onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="proc_rana" style={{ display: 'block', fontWeight: '600', color: 'var(--text-color)', marginBottom: '0.5rem' }}>Identifica la tua "Rana" di oggi</label>
                <textarea 
                  id="proc_rana" 
                  name="proc_rana" 
                  rows="2" 
                  style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px', fontFamily: 'var(--font-family)' }} 
                  placeholder="Es: Devo iniziare a scrivere il primo paragrafo..."
                  value={procrastinazioneData.proc_rana}
                  onChange={handleInputChange}
                  disabled={location.pathname==="/storico"?true:false}
                ></textarea>
              </div>


              
              <div className="form-actions" style={{ marginTop: '2rem', textAlign: 'right' }}>
              {location.pathname!=="/storico"?
              msg==null?
                <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#38b2ac', border: 'none', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                  Salva la tua Rana
                </button>
                 : <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#2d9102ff', border: 'none', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>{msg}</button>
                 : <button type="button" onClick={()=>props.handleDelete(props.val)} className="btn " style={{ backgroundColor: '#910202ff', border: 'none', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Cancella</button>
              }
              
              </div>
            
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { Procastinazione };