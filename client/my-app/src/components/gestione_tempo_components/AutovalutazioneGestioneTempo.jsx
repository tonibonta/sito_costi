import React, { useState, useEffect, useRef } from 'react';


const AutovalutazioneGestioneTempo=(props)=>{

    const {toggleAccordion,openAccordion,risultato,risposte,risultatoRef}=props;
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

  return (
    <>
     
        {/* QUESTIONARIO AUTOVALUTATIVO */}
        <div className={`accordion-item ${openAccordion.tempo ? 'active' : ''}`} id="accordion-tempo">
          <div className="accordion-header" onClick={() => toggleAccordion('tempo')}>
            <div className="header-title">
              <span className="icon">⏱️</span>
              <h3>Questionario autovalutativo</h3>
            </div>
            <span className="toggle-icon">{openAccordion.tempo ? '−' : '+'}</span>
          </div>

          <div className="accordion-content">
            <div className="accordion-inner">
              
              {risultato && (
                <div style={{ backgroundColor: '#f0fff4', borderLeft: '4px solid #48bb78', padding: '1rem', marginTop: '1.5rem', borderRadius: '0 8px 8px 0', color: '#2f855a', fontWeight: '500' }}>
                  ✅ Questionario completato! Il sistema ha calcolato la tua valutazione in base alle risposte date.
                </div>
              )}

              <form action="#" method="POST" className="questionnaire-form">
                
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
                                defaultChecked={risposte[qNum] === val} 
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
                    <label className="eval-box emer-box">
                      <input type="radio" name="valutazione_generale" value="emergenti" defaultChecked={risultato === 'emergenti'} />
                      <div className="box-content">
                        <h5>Emergenti</h5>
                        <p>Le tue competenze iniziano a svilupparsi.</p>
                      </div>
                    </label>

                    <label className="eval-box dev-box">
                      <input type="radio" name="valutazione_generale" value="in_sviluppo" defaultChecked={risultato === 'in_sviluppo'} />
                      <div className="box-content">
                        <h5>In via di sviluppo</h5>
                        <p>Stai praticando, ma non sei ancora al traguardo.</p>
                      </div>
                    </label>

                    <label className="eval-box cons-box">
                      <input type="radio" name="valutazione_generale" value="consolidate" defaultChecked={risultato === 'consolidate'} />
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
        }

export {AutovalutazioneGestioneTempo};