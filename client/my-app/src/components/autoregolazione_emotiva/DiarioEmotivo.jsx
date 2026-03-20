import React, { useState } from 'react';
import API from '../API';
import { useLocation } from 'react-router';

const DiarioEmotivo = (props) => {
 const [msg,setMsg]=useState(null);
  const location=useLocation();
 const toggleAccordion = (id) => {
   setOpenAccordion(prev => ({
     ...prev,
     [id]: !prev[id]
   }));
 };
  const [openAccordion, setOpenAccordion] = useState({
      diarioemotivo:  false
    });


  // 1. Creiamo lo stato per memorizzare i dati del Diario Emotivo
  const [diarioData, setDiarioData] = useState(props.val==null?{
    diario_evento: '',
    diario_quando: '',
    diario_dove: '',
    diario_emozione: '',
    diario_reazione: ''
  }:JSON.parse(props.val.valore));

  // 2. Funzione per aggiornare lo stato mentre l'utente digita
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDiarioData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // 3. Funzione che intercetta il salvataggio per l'invio al server
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita il ricaricamento della pagina
    
    // Ecco la tua variabile pronta con i dati della pagina del diario!
    console.log("Dati del Diario Emotivo pronti per il server:", diarioData);
    
const ora = new Date();
    const attivita={
      date:ora,
      classe:"autoregolazione_emotiva",
      tipo:"diario_emotivo",
      valore:JSON.stringify(diarioData),
      id_user:props.user.id
    }
    API.storeAttivita(attivita).then((data)=>{
      setMsg("Completato!");
     setTimeout(()=>{setMsg(null)},4000);
    });
  };

  return (
    <div className={`accordion-item ${openAccordion?.diarioemotivo ? 'active' : ''}`} id="accordion-diario-emotivo">
      <div className="accordion-header" onClick={() => toggleAccordion('diarioemotivo')}>
        <div className="header-title">
          <span className="icon">📖</span>
          <h3>Diario Emotivo  {(location.pathname==="/storico" && props.val!==null)?new Date(props.val.date).toLocaleDateString('it-IT',{  day: '2-digit',  month: '2-digit',   year: 'numeric',   hour: '2-digit',   minute: '2-digit'}):""}</h3>
        </div>
        <span className="toggle-icon">{openAccordion?.diarioemotivo ? '−' : '+'}</span>
      </div>

      <div className="accordion-content">
        <div className="accordion-inner">
          <div className="instruction-box" style={{ backgroundColor: '#ebf8ff', borderLeftColor: '#3182ce' }}>
            <h4 style={{ color: '#2b6cb0' }}>Traccia le tue emozioni</h4>
            <p style={{ color: '#4a5568' }}>Pensa a una situazione recente e compila questo diario emotivo per prendere consapevolezza dei tuoi stati d'animo e delle tue reazioni.</p>
          </div>

          {/* Aggiunto onSubmit al form */}
          <form style={{ marginTop: '2rem' }} onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Cosa è successo?</label>
                <textarea 
                  name="diario_evento"
                  value={diarioData.diario_evento}
                  onChange={handleInputChange}
                  rows="2" 
                  style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px' }} 
                  placeholder="Descrivi brevemente l'evento..."


                disabled={location.pathname==="/storico"?true:false}

                ></textarea>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Quando è successo?</label>
                  <input 
                    type="text" 
                    name="diario_quando"
                    value={diarioData.diario_quando}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px' }} 
                    placeholder="Es. Ieri pomeriggio" 
                disabled={location.pathname==="/storico"?true:false}

                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Dove è successo?</label>
                  <input 
                    type="text" 
                    name="diario_dove"
                    value={diarioData.diario_dove}
                    onChange={handleInputChange}
                disabled={location.pathname==="/storico"?true:false}

                    style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px' }} 
                    placeholder="Es. In reparto, a casa..." 
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Che emozione hai provato?</label>
                <input 
                  type="text" 
                  name="diario_emozione"
                  value={diarioData.diario_emozione}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px' }} 
                  placeholder="Es. Rabbia, Tristezza, Frustrazione, Gioia (1-2 parole)" 
                disabled={location.pathname==="/storico"?true:false}

                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Cosa hai fatto? (Che regola personale hai applicato?)</label>
                <textarea 
                  name="diario_reazione"
                  value={diarioData.diario_reazione}
                  onChange={handleInputChange}
                  rows="2" 
                  style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px' }} 
                  placeholder="Come hai reagito all'emozione?"
                disabled={location.pathname==="/storico"?true:false}

                ></textarea>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
              {/* Cambiato type="button" in type="submit" */}
              {location.pathname!=="/storico"?
              msg==null?
              <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#3182ce', border: 'none', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                Salva Pagina del Diario
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

export { DiarioEmotivo };