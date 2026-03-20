import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import API from '../API';

// ATTIVITÀ 1: Digital Journaling
const DigitalJournaling = (props) => {


 const [msg,setMsg]=useState(null);
  
  const location=useLocation()
  // 1. Stato per l'array di tutte le annotazioni (quello che invieremo al server)
  const [entries, setEntries] = useState(props.val==null?[]:JSON.parse(props.val.valore));
  // Stato temporaneo per gestire il campo di testo mentre l'utente digita
  const [newEntry, setNewEntry] = useState('');
   const [openAccordion, setOpenAccordion] = useState({
        digitaljournaling:  false
      });

  const toggleAccordion = (id) => {
      setOpenAccordion(prev => ({
        ...prev,
        [id]: !prev[id]
      }));
    };

  // 2. Aggiunge temporaneamente la nota alla lista locale
  const handleAddEntry = () => {
    if (newEntry.trim() !== '') {
      setEntries([...entries, { text: newEntry, date: new Date().toLocaleDateString() }]);
      setNewEntry('');
    }
  };

  // 3. Funzione che intercetta il salvataggio per l'invio al server
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita il ricaricamento della pagina
    
    // Ecco il tuo array completo di annotazioni pronto per il database!
    console.log("Dati del Digital Journaling pronti per il server:", entries);
    
const ora = new Date();
    const attivita={
      date:ora,
      classe:"valorizzazione_di_se",
      tipo:"digital_journaling",
      valore:JSON.stringify(entries),
      id_user:props.user.id
    }
    API.storeAttivita(attivita).then((data)=>{
       setMsg("Completato!");
     setTimeout(()=>{setMsg(null)},4000);
    });
  };

  return (
    <div className={`accordion-item ${openAccordion?.digitaljournaling ? 'active' : ''}`} id="accordion-journal">
      <div className="accordion-header" onClick={() => toggleAccordion('digitaljournaling')}>
        <div className="header-title">
          <span className="icon">📖</span>
          <h3>Digital Journaling  {(location.pathname==="/storico" && props.val!=null)?new Date(props.val.date).toLocaleDateString('it-IT',{  day: '2-digit',  month: '2-digit',   year: 'numeric',   hour: '2-digit',   minute: '2-digit'}):""}</h3>
        </div>
        <span className="toggle-icon">{openAccordion?.digitaljournaling ? '−' : '+'}</span>
      </div>
      
      <div className="accordion-content">
        <div className="accordion-inner">
          <p style={{ color: '#4a5568', marginBottom: '1rem' }}>Annota qui ogni giorno i tuoi piccoli e grandi successi clinici e personali.</p>
          
          {/* Aggiunto il form per gestire l'invio finale al server */}
          <form onSubmit={handleSubmit}>
            {location.pathname!=="/storico"?
            <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
              <input 
                type="text" 
                value={newEntry} 
                onChange={(e) => setNewEntry(e.target.value)} 
                placeholder="Oggi sono fiero di me perché..." 
                style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #cbd5e0' }}
              />
              {/* Reso esplicitamente type="button" per evitare che faccia il submit della pagina */}
              <button 
                type="button" 
                onClick={handleAddEntry} 
                className="btn btn-primary" 
                style={{ backgroundColor: '#38b2ac', border: 'none', padding: '10px 20px', color: 'white', borderRadius: '5px', cursor: 'pointer' }}
              >
                Aggiungi
              </button>
            </div>
            :""}
            
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {entries.map((entry, index) => (
                <li key={index} style={{ backgroundColor: '#f7fafc', padding: '10px', marginBottom: '5px', borderRadius: '5px', borderLeft: '4px solid #38b2ac' }}>
                  <small style={{ color: '#a0aec0', display: 'block' }}>{entry.date}</small>
                  {entry.text}
                </li>
              ))}
            </ul>

            {/* Mostra il pulsante di salvataggio finale solo se ci sono annotazioni */}

            {entries.length > 0 && (
              <div className="form-actions" style={{ marginTop: '2rem', textAlign: 'right' }}>
                {location.pathname!=="/storico"?
                msg==null?
                <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#2c7a7b', border: 'none', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                  Salva il Diario nel Database
                </button>
                : <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#2d9102ff', border: 'none', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>{msg}</button>
                :""}
              </div>
            )}
          </form>

        </div>
      </div>
    </div>
  );
};

export { DigitalJournaling };