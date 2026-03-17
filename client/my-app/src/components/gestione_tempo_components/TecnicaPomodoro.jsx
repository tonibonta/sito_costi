import React, { useState } from 'react';
import API from '../API';

const TecnicaPomodoro = (props) => {
const toggleAccordion = (id) => {
   setOpenAccordion(prev => ({
     ...prev,
     [id]: !prev[id]
   }));
 };
  const [openAccordion, setOpenAccordion] = useState({
      pomodoro:  false
    });


  // 1. Creiamo lo stato per memorizzare i dati della pianificazione
  const [pomodoroData, setPomodoroData] = useState(props.val==null?{
    pomo_settimana: '',
    pomo_oggi: ''
  }:JSON.parse(props.val.valore));

  // 2. Funzione per aggiornare lo stato mentre l'utente digita
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPomodoroData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // 3. Funzione che intercetta il salvataggio per inviare i dati al server
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita il ricaricamento della pagina
    
    // Ecco la variabile con i dati della Tecnica del Pomodoro!
    console.log("Dati Pomodoro pronti per il server:", pomodoroData);
    
  const ora = new Date();
    const attivita={
      date:ora,
      classe:"gestione_tempo",
      tipo:"tecnica_pomodoro",
      valore:JSON.stringify(pomodoroData),
      id_user:1
    }
    API.storeAttivita(attivita).then((data)=>{
      console.log(data);
    })

  };

  return (
    <>
      {/* TECNICA DEL POMODORO */}
      <div className={`accordion-item ${openAccordion?.pomodoro ? 'active' : ''}`} id="accordion-pomodoro">
        <div className="accordion-header" onClick={() => toggleAccordion('pomodoro')}>
          <div className="header-title">
            <span className="icon">🍅</span>
            <h3>Tecnica del Pomodoro  {(location.pathname==="/storico" && props.val!=null)?new Date(props.val.date).toLocaleDateString('it-IT',{  day: '2-digit',  month: '2-digit',   year: 'numeric',   hour: '2-digit',   minute: '2-digit'}):""}
</h3>
          </div>
          <span className="toggle-icon">{openAccordion?.pomodoro ? '−' : '+'}</span>
        </div>

        <div className="accordion-content">
          <div className="accordion-inner">
            <div className="instruction-box" style={{ backgroundColor: '#fff5f5', borderLeftColor: '#e53e3e' }}>
              <h4 style={{ color: '#c53030' }}>Il Metodo</h4>
              <p style={{ color: '#4a5568', marginBottom: '1rem' }}>La tecnica del pomodoro è un metodo per aumentare la produttività e la concentrazione:</p>
              <ul style={{ listStyleType: 'none', marginBottom: '1.5rem' }}>
                <li>🕒 <strong>1.</strong> Lavora intensamente per 25 minuti</li>
                <li>☕ <strong>2.</strong> Fai 5 minuti di pausa</li>
                <li>🔁 <strong>3.</strong> Ripeti il ciclo 4 volte</li>
                <li>🛋️ <strong>4.</strong> Fai una pausa lunga di 15-30 minuti</li>
              </ul>

              <h4 style={{ color: '#c53030', marginTop: '1rem' }}>La Pianificazione</h4>
              <p style={{ color: '#4a5568' }}><strong>Settimanale:</strong> Organizzare i prossimi 7 giorni. <em>"Cosa è importante fare questa settimana?"</em></p>
              <p style={{ color: '#4a5568' }}><strong>Giornaliera:</strong> Gestione delle prossime 24 ore. <em>"Cosa devo fare ora?"</em></p>
            </div>

            {/* Aggiunto onSubmit al form */}
            <form id="form-pomodoro" className="pomodoro-form" style={{ marginTop: '2rem' }} onSubmit={handleSubmit}>
              
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="pomo_settimana" style={{ display: 'block', fontWeight: '600', color: 'var(--text-color)', marginBottom: '0.5rem' }}>Obiettivo Settimanale Globale</label>
                <textarea 
                  id="pomo_settimana" 
                  name="pomo_settimana" 
                  rows="2" 
                  style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px', fontFamily: 'var(--font-family)' }} 
                  placeholder="Es: Devo completare lo studio del capitolo 4 e 5 di Fisiologia."
                  value={pomodoroData.pomo_settimana}
                  onChange={handleInputChange}
                  disabled={location.pathname==="/storico"?true:false}
                ></textarea>
              </div>

              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="pomo_oggi" style={{ display: 'block', fontWeight: '600', color: 'var(--text-color)', marginBottom: '0.5rem' }}>Pianificazione di Oggi (I tuoi "Pomodori")</label>
                <textarea 
                  id="pomo_oggi" 
                  name="pomo_oggi" 
                  rows="4" 
                  style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px', fontFamily: 'var(--font-family)' }} 
                  placeholder="Es: - Pomodoro 1 (25m): Leggere prime 10 pagine..."
                  value={pomodoroData.pomo_oggi}
                  onChange={handleInputChange}
                  disabled={location.pathname==="/storico"?true:false}
                ></textarea>
              </div>


{location.pathname!=="/storico"?
              <div className="form-actions" style={{ marginTop: '2rem', textAlign: 'right' }}>
                <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#e53e3e', border: 'none', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                  Salva Pianificazione
                </button>
              </div>
              :""}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { TecnicaPomodoro };