import React, { useState } from 'react';
import API from '../API';

const CopingStrategie = (props) => {
  const { toggleAccordion, openAccordion } = props;

  const [risposte, setRisposte] = useState({});
  const[risultato, setRisultato] = useState(null);

  // Struttura dati: Scenari con relative opzioni e punteggi
  const sfide =[
    {
      scenario: "Hai tre esami parziali e la consegna di un progetto di gruppo nella stessa settimana.",
      opzioni:[
        { testo: "Dividi lo studio in blocchi orari, dai priorità alle scadenze imminenti.", punti: 5 },
        { testo: "\"Perché non ho iniziato prima? Sono un disastro, non ce la farò mai.\"", punti: 3 },
        { testo: "Guardi una serie TV per non pensare alla mole di lavoro.", punti: 1 }
      ]
    },
    {
      scenario: "Hai studiato molto, ma l'esame è andato male e devi ridarlo tra un mese.",
      opzioni:[
        { testo: "\"Almeno ora so come interroga il professore e su cosa concentrarmi.\"", punti: 5 },
        { testo: "Chiedi a un compagno che ha superato l'esame i suoi appunti o consigli.", punti: 3 },
        { testo: "\"Il professore è impazzito, io sapevo tutto, non è colpa mia.\"", punti: 1 }
      ]
    },
    {
      scenario: "Devi esporre la tua tesi o un progetto davanti a una commissione numerosa.",
      opzioni:[
        { testo: "Chiami un amico per dire quanto sei terrorizzato e ricevere incoraggiamento.", punti: 5 },
        { testo: "Fai una battuta con i colleghi su quanto sembrerete ridicoli agitati.", punti: 3 },
        { testo: "Bevi troppo caffè o prendi farmaci non prescritti per \"calmarti\".", punti: 1 }
      ]
    },
    {
      scenario: "Fai parte di un gruppo di quattro persone, ma due non collaborano affatto e la scadenza è tra tre giorni. Il voto sarà unico per tutti.",
      opzioni:[
        { testo: "Prendi in mano la situazione, assegni compiti chiari o finisci tu la parte mancante", punti: 5 },
        { testo: "Ti lamenti su WhatsApp con gli altri amici di quanto i tuoi compagni siano pigri", punti: 3 },
        { testo: "Decidi di non fare nulla anche tu: \"Se non lavorano loro, non lo faccio nemmeno io\"", punti: 1 }
      ]
    },
    {
      scenario: "Escono i risultati di un esame fondamentale: hai preso un voto molto basso, mentre tutti i tuoi amici hanno preso 30. Ti senti \"meno intelligente\" degli altri.",
      opzioni:[
        { testo: "Accetti che è successo, capisci che un voto non definisce la tua persona e vai avanti", punti: 5 },
        { testo: "Cerchi conforto nella preghiera o nella meditazione per ritrovare la calma interiore", punti: 3 },
        { testo: "Pensi: \"Forse non sono portato per questa facoltà, non valgo nulla\"", punti: 1 }
      ]
    },
    {
      scenario: "Mancano pochi mesi alla laurea. Tutti ti chiedono \"Cosa farai dopo?\" e tu non hai la minima idea, non hai ancora un lavoro e non sai se continuare a studiare.",
      opzioni:[
        { testo: "Inizi a mappare le aziende, aggiorni il CV e analizzi i bandi dei Master", punti: 5 },
        { testo: "Rispondi ironicamente per smorzare la pressione sociale", punti: 3 },
        { testo: "Fai finta che il problema non esista e passi intere giornate a dormire o giocare ai videogame", punti: 1 }
      ]
    }
  ];

  const handleRisposta = (indexSfida, punti) => {
    setRisposte((prev) => ({ ...prev, [indexSfida]: parseInt(punti) }));
  };

  const calcolaRisultato = (e) => {
    e.preventDefault();
    if (Object.keys(risposte).length < sfide.length) {
      alert("Rispondi a tutte le simulazioni per calcolare la tua efficacia!");
      return;
    }

    // Calcolo punteggio totale
    const punteggioTotale = Object.values(risposte).reduce((acc, curr) => acc + curr, 0);

    // Valutazione qualitativa basata sul punteggio (Min 6, Max 30)
    let profilo = "";
    let descrizione = "";

    if (punteggioTotale >= 25) {
      profilo = "Elevata Efficacia";
      descrizione = "Le tue strategie di coping sono molto adattive e orientate alla risoluzione attiva del problema o a una sana gestione emotiva.";
    } else if (punteggioTotale >= 15) {
      profilo = "Efficacia Moderata";
      descrizione = "Usi un mix di strategie. A volte affronti il problema, altre volte tendi a cercare sfogo o usare l'ironia. C'è margine per sviluppare strategie più attive.";
    } else {
      profilo = "Rischio di Evitamento";
      descrizione = "Tendi spesso a utilizzare strategie di evitamento, negazione o autosvalutazione. Potrebbe esserti utile lavorare su come affrontare le fonti di stress in modo più diretto.";
    }

    setRisultato({ punteggioTotale, profilo, descrizione });
  };

  return (
    <div className={`accordion-item ${openAccordion?.copingstrategie ? 'active' : ''}`} id="accordion-coping-sfide">
      <div className="accordion-header" onClick={() => toggleAccordion('copingstrategie')}>
        <div className="header-title">
          <span className="icon">⚡</span>
          <h3>Coping: Simulazione Sfide Stressanti</h3>
        </div>
        <span className="toggle-icon">{openAccordion?.copingstrategie ? '−' : '+'}</span>
      </div>

      <div className="accordion-content">
        <div className="accordion-inner">
          <div className="instruction-box" style={{ backgroundColor: '#fffff0', borderLeftColor: '#d69e2e', padding: '1rem' }}>
            <p style={{ color: '#4a5568', margin: 0 }}>
              Leggi attentamente le seguenti simulazioni tipiche della vita accademica. <br />
              Scegli <strong>l'opzione che più si avvicina</strong> a come ti comporteresti realmente in quella specifica situazione.
            </p>
          </div>

          <form onSubmit={calcolaRisultato} style={{ marginTop: '2rem' }}>
            {sfide.map((sfida, i) => (
              <div key={i} style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid #edf2f7' }}>
                <p style={{ fontWeight: '600', marginBottom: '1rem', color: '#2d3748', fontSize: '1.05rem' }}>
                  Sfida {i + 1}: {sfida.scenario}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingLeft: '0.5rem' }}>
                  {sfida.opzioni.map((opzione, indexOpzione) => (
                    <label key={indexOpzione} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', cursor: 'pointer' }}>
                      <input 
                        type="radio" 
                        name={`sfida_${i}`} 
                        value={opzione.punti} 
                        onChange={(e) => handleRisposta(i, e.target.value)} 
                        required 
                        style={{ marginTop: '0.3rem' }}
                      />
                      <span style={{ color: '#4a5568', lineHeight: '1.4' }}>{opzione.testo}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            {risultato && (
              <div style={{ backgroundColor: '#e6fffa', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem', border: '2px solid #319795' }}>
                <h4 style={{ color: '#285e61', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>Il tuo Livello di Efficacia</h4>
                
                <div style={{ backgroundColor: '#fff', padding: '1.2rem', borderRadius: '6px', marginBottom: '0.5rem' }}>
                  <h5 style={{ margin: '0 0 0.5rem 0', color: '#234e52', fontSize: '1.1rem' }}>
                    📊 Punteggio Totale: {risultato.punteggioTotale} / 30
                  </h5>
                  <h5 style={{ margin: '0 0 0.5rem 0', color: '#319795', fontSize: '1.1rem' }}>
                    🎯 Profilo: {risultato.profilo}
                  </h5>
                  <p style={{ margin: 0, color: '#4a5568', fontSize: '0.95rem', lineHeight: '1.5' }}>
                    {risultato.descrizione}
                  </p>
                </div>
              </div>
            )}

            <div style={{ marginTop: '2rem', textAlign: 'right' }}>
              <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#d69e2e', border: 'none', padding: '0.75rem 1.5rem', color: 'white', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
                Calcola la tua Efficacia
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export { CopingStrategie };