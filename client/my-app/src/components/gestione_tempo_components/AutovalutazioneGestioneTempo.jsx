import React, { useState, useEffect, useRef } from 'react';
import API from '../API';

const AutovalutazioneGestioneTempo = (props) => {
  const [risultato, setRisultato] = useState(null); 
  const [risposte, setRisposte] = useState({});
  const risultatoRef = useRef(null);
  const { toggleAccordion, openAccordion } = props;

  useEffect(() => {
    if (risultato && risultatoRef.current) {
      risultatoRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [risultato]);

  const domande = [
    "Arrivo sempre in tempo e raramente manco le scadenze.",
    "Sono consapevole dei limiti del mio tempo e delle mie energie e non mi prendo troppi impegni.",
    "Rimango calmo e concentrato anche quando ho un sacco di cose da fare.",
    "Quando mi sento stanco, so cosa fare per aiutarmi a stare calmo e a rilassarmi.",
    "Scrivo regolarmente liste di cose 'da fare' e spunto le cose man mano che le completo.",
    "Non cerco di fare tutto in una volta e sono tranquillo nel lasciare compiti meno urgenti per un altro giorno.",
    "Capisco quanto tempo ci vuole per completare determinati compiti, e mi prendo il tempo necessario.",
    "Penso al tempo e all'energia come a 'unità' e scelgo come spenderli con saggezza.",
    "Quando inizio a fare qualcosa, mi piace provare a finirlo senza distrarmi.",
    "Tendo a non rimandare ciò che posso fare adesso."
  ];

  // Salva la risposta selezionata nello stato
  const handleRispostaChange = (qNum, valore) => {
    setRisposte(prev => ({ ...prev, [qNum]: valore }));
  };

  // Funzione principale che calcola il risultato
  const calcolaRisultato = (e) => {
    e.preventDefault(); // Evita il ricaricamento della pagina

    const valoriRisposte = Object.values(risposte);

    // Controlla che tutte le domande abbiano ricevuto risposta
    if (valoriRisposte.length < domande.length) {
      alert("Per favore, rispondi a tutte le domande prima di calcolare il risultato.");
      return;
    }

    // 1. Calcola la frequenza di ogni numero selezionato
    const frequenze = {};
    valoriRisposte.forEach(val => {
      frequenze[val] = (frequenze[val] || 0) + 1;
    });

    // 2. Trova il numero selezionato più spesso (la moda)
    let maxFreq = 0;
    let numeroPiuFrequente = null;

    for (const val in frequenze) {
      if (frequenze[val] > maxFreq) {
        maxFreq = frequenze[val];
        numeroPiuFrequente = parseInt(val);
      } else if (frequenze[val] === maxFreq) {
        // In caso di parità (es. tre "2" e tre "4"), prende il valore più alto
        numeroPiuFrequente = Math.max(numeroPiuFrequente, parseInt(val));
      }
    }

    // 3. Assegna la categoria in base al numero più frequente
    let categoriaFinale = '';
    if (numeroPiuFrequente === 1 || numeroPiuFrequente === 2) {
      categoriaFinale = 'emergenti';
    } else if (numeroPiuFrequente === 3) {
      categoriaFinale = 'in_sviluppo';
    } else if (numeroPiuFrequente === 4 || numeroPiuFrequente === 5) {
      categoriaFinale = 'consolidate';
    }

    // 4. Aggiorna lo stato per mostrare il risultato
    setRisultato(categoriaFinale);
    console.log(categoriaFinale);

     const ora = new Date();
    const attivita={
      date:ora,
      classe:"gestione_tempo",
      tipo:"questionario_autovalutativo",
      valore:categoriaFinale,
      id_user:1
    }
    API.storeAttivita(attivita).then((data)=>{
      console.log(data);
    });

  };

  return (
    <>
      <div className={`accordion-item ${openAccordion?.tempo ? 'active' : ''}`} id="accordion-tempo">
        <div className="accordion-header" onClick={() => toggleAccordion('tempo')}>
          <div className="header-title">
            <span className="icon">⏱️</span>
            <h3>Questionario autovalutativo</h3>
          </div>
          <span className="toggle-icon">{openAccordion?.tempo ? '−' : '+'}</span>
        </div>

        <div className="accordion-content">
          <div className="accordion-inner">
            
            {risultato && (
              <div style={{ backgroundColor: '#f0fff4', borderLeft: '4px solid #48bb78', padding: '1rem', marginTop: '1.5rem', borderRadius: '0 8px 8px 0', color: '#2f855a', fontWeight: '500' }}>
                ✅ Questionario completato! Il sistema ha calcolato la tua valutazione in base alle risposte date.
              </div>
            )}

            {/* Aggiunto l'evento onSubmit al form */}
            <form onSubmit={calcolaRisultato} className="questionnaire-form">
              
              <div className="questions-list">
                {domande.map((domanda, index) => {
                  const qNum = index + 1;
                  return (
                    <div className="question-row" key={qNum}>
                      <p className="question-text"><strong>{qNum}.</strong> {domanda}</p>
                      <div className="radio-group">
                        {[1, 2, 3, 4, 5].map(val => (
                          <label className="radio-btn" key={val}>
                            <input 
                              type="radio" 
                              name={`q${qNum}`} 
                              value={val} 
                              // Usiamo checked per riflettere lo stato esatto e onChange per aggiornarlo
                              checked={risposte[qNum] === val}
                              onChange={() => handleRispostaChange(qNum, val)}
                              required 
                            />
                            <span>{val}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <hr className="divider" />

              <div className="evaluation-section" id="risultato-sezione" ref={risultatoRef}>
                <h4 style={{ marginTop: '2rem' }}>Valutazione Finale Calcolata</h4>
                
                <div className="eval-boxes" style={risultato ? { pointerEvents: 'none' } : {}}>
                  <label className={`eval-box emer-box ${risultato === 'emergenti' ? 'selected-result' : ''}`}>
                    <input 
                      type="radio" 
                      name="valutazione_generale" 
                      value="emergenti" 
                      checked={risultato === 'emergenti'} 
                      readOnly // Evita warning di React per input non controllati 
                    />
                    <div className="box-content">
                      <h5>Emergenti</h5>
                      <p>Le tue competenze iniziano a svilupparsi.</p>
                    </div>
                  </label>

                  <label className={`eval-box dev-box ${risultato === 'in_sviluppo' ? 'selected-result' : ''}`}>
                    <input 
                      type="radio" 
                      name="valutazione_generale" 
                      value="in_sviluppo" 
                      checked={risultato === 'in_sviluppo'} 
                      readOnly 
                    />
                    <div className="box-content">
                      <h5>In via di sviluppo</h5>
                      <p>Stai praticando, ma non sei ancora al traguardo.</p>
                    </div>
                  </label>

                  <label className={`eval-box cons-box ${risultato === 'consolidate' ? 'selected-result' : ''}`}>
                    <input 
                      type="radio" 
                      name="valutazione_generale" 
                      value="consolidate" 
                      checked={risultato === 'consolidate'} 
                      readOnly 
                    />
                    <div className="box-content">
                      <h5>Consolidate</h5>
                      <p>Sono ben sviluppate e naturali per te.</p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="form-actions" style={{ marginTop: '2rem', textAlign: 'right' }}>
                <button type="submit" className="btn btn-primary">
                  {risultato ? 'Ricalcola Risultato' : 'Calcola il mio Risultato'}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { AutovalutazioneGestioneTempo };