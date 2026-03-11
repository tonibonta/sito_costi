import React, { useState } from 'react';

const Coping=(props)=> {
    const {toggleAccordion,openAccordion}=props;

  const [risposte, setRisposte] = useState({});
  const [risultato, setRisultato] = useState(null);

  const domande = [
    "Mi applico al lavoro o ad altre attività sostitutive per distogliere la mia mente dagli eventi",
    "Concentro i miei sforzi nel fare qualcosa per la situazione in cui mi trovo",
    "Mi dico 'questo non è reale'",
    "Faccio uso di alcol o di stupefacenti per sentirmi meglio",
    "Cerco di ottenere un supporto emotivo dagli altri",
    "Rinuncio a cercare di occuparmene",
    "Metto in atto azioni per cercare di migliorare la situazione",
    "Rifiuto di credere che sia accaduto",
    "Dico cose che lasciano venir fuori i miei sentimenti spiacevoli",
    "Cerco aiuto e consigli da parte degli altri",
    "Faccio uso di alcol o droghe per aiutarmi a superare questo",
    "Cerco di vedere la cosa in una luce diversa per farla apparire più positiva",
    "Sono autocritico",
    "Cerco di trovare una strategia per ciò che si deve fare",
    "Cerco conforto e comprensione dagli altri",
    "Rinuncio a tentare di affrontare la situazione",
    "Cerco di trovare qualcosa di buono in ciò che è accaduto",
    "Ci scherzo sopra",
    "Faccio qualcosa per pensare di meno a questo, come andare al cinema, guardare la tv, leggere, sognare ad occhi aperti...",
    "Accetto la realtà del fatto che ciò è accaduto",
    "Esprimo le mie sensazioni negative",
    "Cerco di trovare conforto nella mia religione o nelle mie convinzioni spirituali",
    "Cerco di ottenere dagli altri consigli o aiuti su ciò che è necessario fare",
    "Imparo a conviverci",
    "Penso seriamente a quali mosse fare",
    "Rimprovero me stesso per quanto è accaduto",
    "Prego o medito",
    "Metto in ridicolo la situazione"
  ];

  const handleRisposta = (index, valore) => {
    setRisposte(prev => ({ ...prev, [index + 1]: parseInt(valore) }));
  };

  const calcolaRisultato = (e) => {
    e.preventDefault();
    if (Object.keys(risposte).length < 28) {
      alert("Rispondi a tutte le 28 domande per calcolare il risultato!");
      return;
    }

    const val = (num) => risposte[num] || 0;

    // Raggruppamento punteggi per strategia (Massimo 8 punti ciascuna)
    const strategie = [
      { nome: "Pianificazione", punti: val(14) + val(25), macro: "Focalizzato sul Problema" },
      { nome: "Coping Attivo", punti: val(2) + val(7), macro: "Focalizzato sul Problema" },
      { nome: "Supporto Emotivo", punti: val(5) + val(15), macro: "Focalizzato sulle Emozioni" },
      { nome: "Supporto Strumentale", punti: val(10) + val(23), macro: "Focalizzato sulle Emozioni" },
      { nome: "Ristrutturazione Positiva", punti: val(12) + val(17), macro: "Focalizzato sulle Emozioni" },
      { nome: "Accettazione", punti: val(20) + val(24), macro: "Focalizzato sulle Emozioni" },
      { nome: "Religione/Spiritualità", punti: val(22) + val(27), macro: "Focalizzato sulle Emozioni" },
      { nome: "Umorismo", punti: val(18) + val(28), macro: "Focalizzato sulle Emozioni" },
      { nome: "Distrazione", punti: val(1) + val(19), macro: "Evitamento / Disadattivo" },
      { nome: "Sfogarsi", punti: val(9) + val(21), macro: "Evitamento / Disadattivo" },
      { nome: "Negazione", punti: val(3) + val(8), macro: "Evitamento / Disadattivo" },
      { nome: "Uso di Sostanze", punti: val(4) + val(11), macro: "Evitamento / Disadattivo" },
      { nome: "Disimpegno", punti: val(6) + val(16), macro: "Evitamento / Disadattivo" },
      { nome: "Autocritica", punti: val(13) + val(26), macro: "Evitamento / Disadattivo" }
    ];

    // Trova la strategia con il punteggio più alto
    const strategiaDominante = strategie.reduce((max, obj) => (obj.punti > max.punti ? obj : max), strategie[0]);
    setRisultato(strategiaDominante);
  };

  return (
    <div className={`accordion-item ${openAccordion.coping ? 'active' : ''}`} id="accordion-coping">
      <div className="accordion-header" onClick={()=>toggleAccordion('coping')}>
        <div className="header-title">
          <span className="icon">🛡️</span>
          <h3>Strategie di Coping</h3>
        </div>
        <span className="toggle-icon">{openAccordion.coping ? '−' : '+'}</span>
      </div>

      <div className="accordion-content">
        <div className="accordion-inner">
          <div className="instruction-box" style={{ backgroundColor: '#fffff0', borderLeftColor: '#d69e2e' }}>
            <p style={{ color: '#4a5568', margin: 0 }}>
              Indica il numero che meglio rappresenta quello che fai quando c’è un evento stressante:<br/>
              <strong>1</strong> = Non lo faccio mai | <strong>2</strong> = Poche volte | <strong>3</strong> = In misura moderata | <strong>4</strong> = Faccio proprio così
            </p>
          </div>

          <form onSubmit={calcolaRisultato} style={{ marginTop: '2rem' }}>
            {domande.map((dom, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #edf2f7' }}>
                <p style={{ fontWeight: '500', marginBottom: '0.5rem' }}>{i + 1}. {dom}</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {[1, 2, 3, 4].map(num => (
                    <label key={num} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer' }}>
                      <input type="radio" name={`q_${i+1}`} value={num} onChange={(e) => handleRisposta(i, e.target.value)} required />
                      <span>{num}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            {risultato && (
              <div style={{ backgroundColor: '#c6f6d5', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem', border: '2px solid #38a169' }}>
                <h4 style={{ color: '#2f855a', margin: '0 0 0.5rem 0' }}>La tua Strategia Dominante: {risultato.nome}</h4>
                <p style={{ margin: 0, color: '#276749' }}>
                  Appartiene alla macro-categoria: <strong>{risultato.macro}</strong><br/>
                  (Punteggio: {risultato.punti} su 8)
                </p>
              </div>
            )}

            <div style={{ marginTop: '2rem', textAlign: 'right' }}>
              <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#d69e2e', border: 'none' }}>Scopri la tua Strategia</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export {Coping}