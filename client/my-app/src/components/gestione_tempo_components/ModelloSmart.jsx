import React, { useState } from 'react';
import API from '../API';
import { useLocation } from 'react-router';
const ModelloSmart = (props) => {
   const [msg,setMsg]=useState(null);
  const toggleAccordion = (id) => {
    
    setOpenAccordion(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
   const [openAccordion, setOpenAccordion] = useState({
       smart:  false
     });
  const location =useLocation()
  // 1. Creiamo lo stato per memorizzare i dati del form
  const [smartData, setSmartData] = useState(props.val==null?{
    smart_s: '',
    smart_m: '',
    smart_a: '',
    smart_r: '',
    smart_t: ''
  }:JSON.parse(props.val.valore));

  // 2. Funzione per aggiornare lo stato mentre l'utente scrive
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSmartData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // 3. Funzione che intercetta il salvataggio (qui farai la chiamata al server)
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(props.user)
    
    // Qui hai la tua variabile pronta con tutte le risposte!
    console.log("Dati pronti per essere inviati al server:", smartData);
    const ora = new Date();
    const attivita={
      date:ora,
      classe:"gestione_tempo",
      tipo:"modello_smart",
      valore:JSON.stringify(smartData),
      id_user:props.user.id
    }
    API.storeAttivita(attivita).then((data)=>{
       setMsg("Completato!");
     setTimeout(()=>{setMsg(null)},4000);

    })

  
  };

  return (
    <>
      {/* MODELLO SMART */}
      <div className={`accordion-item ${openAccordion?.smart ? 'active' : ''}`} id="accordion-smart">
        <div className="accordion-header" onClick={() => toggleAccordion('smart')}>
          <div className="header-title">
            <span className="icon">🎯</span>
            <h3>Modello SMART  {(location.pathname==="/storico" && props.val!=null)?new Date(props.val.date).toLocaleDateString('it-IT',{  day: '2-digit',  month: '2-digit',   year: 'numeric',   hour: '2-digit',   minute: '2-digit'}):""}</h3>
          </div>
          <span className="toggle-icon">{openAccordion?.smart ? '−' : '+'}</span>
        </div>

        <div className="accordion-content">
          <div className="accordion-inner">
            <div className="instruction-box" style={{ backgroundColor: '#fffaf0', borderLeftColor: '#ed8936' }}>
              <h4 style={{ color: '#c05621' }}>Cos'è il Modello SMART?</h4>
              <p style={{ color: '#4a5568', marginBottom: '1rem' }}>
                Questo modello si fonda sulla <em>Goal-Setting Theory</em> di Edwin Locke e Gary Latham (1990), secondo cui obiettivi specifici e sfidanti aumentano la performance rispetto a obiettivi vaghi o generici.
              </p>
              <p style={{ color: '#4a5568' }}>Per definire un obiettivo utilizza il metodo SMART:</p>
              <ul style={{ marginTop: '0.5rem', listStyleType: 'none' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>S = Specific (Specifico)</strong> &rarr; Cosa voglio ottenere esattamente?</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>M = Measurable (Misurabile)</strong> &rarr; Come capirò di aver raggiunto l'obiettivo?</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>A = Achievable (Raggiungibile)</strong> &rarr; Ho le risorse e le capacità per farcela?</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>R = Relevant (Rilevante)</strong> &rarr; Perché è importante per me in questo momento?</li>
                <li><strong>T = Time-bound (Temporizzato)</strong> &rarr; Qual è la data di scadenza?</li>
              </ul>
            </div>

            {/* Aggiunto onSubmit al form */}
            <form onSubmit={handleSubmit} className="smart-form">
              <h4 style={{ color: 'var(--primary-dark)', borderBottom: '2px solid #edf2f7', paddingBottom: '0.5rem', marginTop: '2rem', marginBottom: '1.5rem' }}>
                Definisci il tuo Obiettivo
              </h4>

              {/* Ogni textarea ora ha 'value' e 'onChange' */}
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="smart_s" style={{ display: 'block', fontWeight: '600', color: 'var(--text-color)', marginBottom: '0.5rem' }}>S - Specifico</label>
                <textarea 
                  id="smart_s" 
                  name="smart_s" 
                  rows="2" 
                  style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px', fontFamily: 'var(--font-family)' }} 
                  placeholder="Es: Voglio studiare tutti i muscoli dell'arto superiore..."
                  value={smartData.smart_s}
                  onChange={handleInputChange}
                  disabled={location.pathname==="/storico"?true:false}
                ></textarea>
              </div>

              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="smart_m" style={{ display: 'block', fontWeight: '600', color: 'var(--text-color)', marginBottom: '0.5rem' }}>M - Misurabile</label>
                <textarea 
                  id="smart_m" 
                  name="smart_m" 
                  rows="2" 
                  style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px', fontFamily: 'var(--font-family)' }} 
                  placeholder="Es: Capirò di avercela fatta quando saprò ripetere origine e inserzione di ogni muscolo senza guardare il libro."
                  value={smartData.smart_m}
                  onChange={handleInputChange}
                  disabled={location.pathname==="/storico"?true:false}

                ></textarea>
              </div>

              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="smart_a" style={{ display: 'block', fontWeight: '600', color: 'var(--text-color)', marginBottom: '0.5rem' }}>A - Raggiungibile</label>
                <textarea 
                  id="smart_a" 
                  name="smart_a" 
                  rows="2" 
                  style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px', fontFamily: 'var(--font-family)' }} 
                  placeholder="Es: Sì, ho gli appunti completi e dedicherò 2 ore al giorno allo studio."
                  value={smartData.smart_a}
                  onChange={handleInputChange}
                  disabled={location.pathname==="/storico"?true:false}

                ></textarea>
              </div>

              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="smart_r" style={{ display: 'block', fontWeight: '600', color: 'var(--text-color)', marginBottom: '0.5rem' }}>R - Rilevante</label>
                <textarea 
                  id="smart_r" 
                  name="smart_r" 
                  rows="2" 
                  style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px', fontFamily: 'var(--font-family)' }} 
                  placeholder="Es: È fondamentale per poter passare l'esame di Anatomia questo semestre."
                  value={smartData.smart_r}
                  onChange={handleInputChange}
                  disabled={location.pathname==="/storico"?true:false}

                ></textarea>
              </div>

              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="smart_t" style={{ display: 'block', fontWeight: '600', color: 'var(--text-color)', marginBottom: '0.5rem' }}>T - Temporizzato</label>
                <textarea 
                  id="smart_t" 
                  name="smart_t" 
                  rows="2" 
                  style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px', fontFamily: 'var(--font-family)' }} 
                  placeholder="Es: Entro venerdì 15 alle ore 18:00."
                  value={smartData.smart_t}
                  onChange={handleInputChange}
                  disabled={location.pathname==="/storico"?true:false}

                ></textarea>
              </div>
              
              <div className="form-actions" style={{ marginTop: '2rem', textAlign: 'right' }}>
                {location.pathname!=="/storico"?
                msg==null?
                <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#ed8936', border: 'none', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                  Salva il tuo Obiettivo
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

export { ModelloSmart };