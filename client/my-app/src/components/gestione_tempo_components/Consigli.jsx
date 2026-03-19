import React, { useState } from 'react';
import API from '../API';

const Consigli = (props) => {
  const [msg,setMsg]=useState(null);
 const toggleAccordion = (id) => {
    setOpenAccordion(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
   const [openAccordion, setOpenAccordion] = useState({
       consigli:  false
     });

  // 1. Creiamo lo stato per memorizzare il dato del form
  const [consigliData, setConsigliData] = useState(props.val==null?{
    consiglio_impegno: ''
  }:JSON.parse(props.val.valore));

  // 2. Funzione per aggiornare lo stato mentre l'utente digita
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConsigliData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // 3. Funzione che intercetta il salvataggio per inviare i dati al server
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita il ricaricamento della pagina
    
    // Ecco la tua variabile pronta con il testo dell'impegno!
    console.log("Dati Consigli pronti per il server:", consigliData);
  const ora = new Date();
    const attivita={
      date:ora,
      classe:"gestione_tempo",
      tipo:"consigli",
      valore:JSON.stringify(consigliData),
      id_user:props.user.id
    }
    API.storeAttivita(attivita).then((data)=>{
      setMsg("Completato!");
      setTimeout(()=>{setMsg(null)},4000);
    });

  };

  return (
    <>
      {/* CONSIGLI */}
      <div className={`accordion-item ${openAccordion?.consigli ? 'active' : ''}`} id="accordion-consigli">
        <div className="accordion-header" onClick={() => toggleAccordion('consigli')}>
          <div className="header-title">
            <span className="icon">💡</span>
            <h3>Consigli {(location.pathname==="/storico" && props.val!=null)?new Date(props.val.date).toLocaleDateString('it-IT',{  day: '2-digit',  month: '2-digit',   year: 'numeric',   hour: '2-digit',   minute: '2-digit'}):""}</h3>
          </div>
          <span className="toggle-icon">{openAccordion?.consigli ? '−' : '+'}</span>
        </div>

        <div className="accordion-content">
          <div className="accordion-inner">
            <div className="instruction-box" style={{ backgroundColor: '#fffff0', borderLeftColor: '#d69e2e' }}>
              <h4 style={{ color: '#b7791f' }}>Ottimizza il tuo studio e il lavoro</h4>
              <p style={{ color: '#4a5568', marginBottom: '1rem' }}>Ecco dei consigli pratici da inserire nella vita di tutti i giorni:</p>
              <ul style={{ listStyleType: 'none', marginBottom: '1.5rem', color: '#4a5568' }}>
                <li style={{ marginBottom: '0.8rem' }}>⏸️ Programma brevi intervalli tra le sessioni di studio</li>
                <li style={{ marginBottom: '0.8rem' }}>🛌 Rispetta un ciclo di sonno regolare</li>
                <li style={{ marginBottom: '0.8rem' }}>🔕 Disattiva le notifiche o imposta la modalità “aereo”</li>
                <li>🧹 Organizza uno spazio di lavoro ordinato</li>
              </ul>
            </div>

            {/* Aggiunto onSubmit al form */}
            <form id="form-consigli" className="consigli-form" style={{ marginTop: '2rem' }} onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="consiglio_impegno" style={{ display: 'block', fontWeight: '600', color: 'var(--text-color)', marginBottom: '0.5rem' }}>Il tuo impegno</label>
                <textarea 
                  id="consiglio_impegno" 
                  name="consiglio_impegno" 
                  rows="2" 
                  style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px', fontFamily: 'var(--font-family)' }} 
                  placeholder="Es: Da oggi proverò a mettere il telefono in un'altra stanza mentre studio..."
                  value={consigliData.consiglio_impegno}
                  onChange={handleInputChange}
                  disabled={location.pathname==="/storico"?true:false}

                ></textarea>
              </div>

              <div className="form-actions" style={{ marginTop: '2rem', textAlign: 'right' }}>
                {location.pathname!=="/storico"?
                msg==null?
                <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#d69e2e', border: 'none', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                  Salva Impegno
                </button>:
                <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#2d9102ff', border: 'none', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                  {msg}
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

export { Consigli };