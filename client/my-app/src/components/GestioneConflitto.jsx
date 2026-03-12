import React, { useState, useEffect } from 'react';



export const GestioneConflitto = () => {
  const[openAccordion, setOpenAccordion] = useState({
    tuckman: false,
   
  });

  useEffect(() => {
    document.title = "Gestione Confltto";
  },[]);

  const toggleAccordion = (id) => {
    setOpenAccordion(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="fade-in" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 0' }}>
      <div className="page-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ color: 'var(--primary-dark)', fontSize: '2.2rem' }}>Gestione del conflitto</h2>
        <p style={{ color: '#718096', fontSize: '1.1rem' }}>Prendi l'iniziativa e crea il tuo percorso.</p>
      </div>
      <QuestionarioConflitti openAccordion={openAccordion} toggleAccordion={toggleAccordion}/>
     
    </div>
  );
};


const QuestionarioConflitti = (props) => {
  const { toggleAccordion, openAccordion } = props;

  const [risposte, setRisposte] = useState({});
  const [risultato, setRisultato] = useState(null);

  // Array delle domande con la mappatura esatta della tua matrice
  // mapA e mapB indicano a quale stile viene assegnato 1 punto se l'utente sceglie A o B.
  const domande = [
    { id: 1, a: "Solitamente perseguo i miei obiettivi con fermezza.", b: "Cerco di esporre apertamente e subito tutte le preoccupazioni ed i problemi.", mapA: 'D', mapB: 'E' },
    { id: 2, a: "Metto le carte in tavola ed invito l’altro a fare lo stesso.", b: "Quando nasce un conflitto cerco di vincere.", mapA: 'E', mapB: 'D' },
    { id: 3, a: "Quando ho preso una decisione la difendo strenuamente.", b: "Preferisco non litigare ma cercare la migliore soluzione possibile.", mapA: 'D', mapB: 'E' },
    { id: 4, a: "Qualche volta sacrifico i miei desideri a favore di quelli dell’altro.", b: "Ritengo che non sempre valga la pena di preoccuparsi delle differenze.", mapA: 'B', mapB: 'A' },
    { id: 5, a: "Piuttosto che scuotere troppo la barca accetto le opinioni dell’altro.", b: "Evito le persone con opinioni troppo radicate.", mapA: 'B', mapB: 'A' },
    { id: 6, a: "Mi piace collaborare con gli altri e seguire le loro idee.", b: "Ritengo che nella maggior parte dei casi non valga la pena di discutere. Rimango attaccato alle mie idee.", mapA: 'B', mapB: 'A' },
    { id: 7, a: "Cerco di trovare una soluzione di compromesso.", b: "Di solito perseguo i miei obiettivi con fermezza.", mapA: 'C', mapB: 'D' },
    { id: 8, a: "Quando nasce un conflitto cerco di vincere.", b: "Propongo una via di mezzo.", mapA: 'D', mapB: 'C' },
    { id: 9, a: "Mi piace incontrarmi con l’altro a metà strada.", b: "Quando ho preso una posizione la difendo strenuamente.", mapA: 'C', mapB: 'D' },
    { id: 10, a: "Ritengo che non sempre valga la pena di preoccuparsi delle differenze.", b: "Cerco di trovare una soluzione di compromesso.", mapA: 'A', mapB: 'C' },
    { id: 11, a: "Propongo una via di mezzo.", b: "Evito le persone con opinioni troppo radicate.", mapA: 'C', mapB: 'A' },
    { id: 12, a: "Ritengo che nella maggior parte dei casi non valga la pena di discutere. Rimango attaccato alle mie idee.", b: "Mi piace incontrarmi con l’altro a metà strada.", mapA: 'A', mapB: 'C' },
    { id: 13, a: "Di solito perseguo i miei obiettivi con fermezza.", b: "Qualche volta sacrifico i miei desideri a favore di quelli dell’altro.", mapA: 'D', mapB: 'B' },
    { id: 14, a: "Piuttosto che scuotere troppo la barca accetto le opinioni dell’altro.", b: "Quando nasce un conflitto cerco di vincere.", mapA: 'B', mapB: 'D' },
    { id: 15, a: "Quando ho preso una posizione la difendo strenuamente.", b: "Mi piace collaborare con gli altri e seguire le loro idee.", mapA: 'D', mapB: 'B' },
    { id: 16, a: "Cerco di trovare una soluzione di compromesso.", b: "Qualche volta sacrifico i miei desideri a favore di quelli dell’altro.", mapA: 'C', mapB: 'B' },
    { id: 17, a: "Piuttosto che scuotere troppo la barca accetto le opinioni dell’altro.", b: "Propongo una via di mezzo.", mapA: 'B', mapB: 'C' },
    { id: 18, a: "Mi piace incontrarmi con l’altro a metà strada.", b: "Mi piace collaborare con gli altri e seguire le loro idee.", mapA: 'C', mapB: 'B' },
    { id: 19, a: "Ritengo che non sempre valga la pena di preoccuparsi delle differenze.", b: "Di solito perseguo i miei obiettivi con fermezza.", mapA: 'A', mapB: 'D' },
    { id: 20, a: "Quando nasce un conflitto cerco di vincere.", b: "Evito le persone con opinioni troppo radicate.", mapA: 'D', mapB: 'A' },
    { id: 21, a: "Ritengo che nella maggior parte dei casi non valga la pena di discutere. Rimango attaccato alle mie idee.", b: "Quando ho preso una posizione la difendo strenuamente.", mapA: 'A', mapB: 'D' },
    { id: 22, a: "Cerco di esporre apertamente e subito tutte le preoccupazioni ed i problemi.", b: "Ritengo che non sempre valga la pena di preoccuparsi delle differenze.", mapA: 'E', mapB: 'A' },
    { id: 23, a: "Evito le persone con opinioni troppo radicate.", b: "Metto le carte in tavola ed invito l’altro a fare lo stesso.", mapA: 'A', mapB: 'E' },
    { id: 24, a: "Preferisco non litigare ma cercare la migliore soluzione possibile.", b: "Ritengo che nella maggior parte dei casi non valga la pena di discutere. Rimango attaccato alle mie idee.", mapA: 'E', mapB: 'A' },
    { id: 25, a: "Cerco di esporre apertamente e subito tutte le preoccupazioni ed i problemi.", b: "Cerco di trovare una soluzione di compromesso.", mapA: 'E', mapB: 'C' },
    { id: 26, a: "Metto le carte in tavola ed invito l’altro a fare lo stesso.", b: "Propongo una via di mezzo.", mapA: 'E', mapB: 'C' },
    { id: 27, a: "Preferisco non litigare ma cercare la migliore soluzione possibile.", b: "Mi piace incontrarmi con l’altro a metà strada.", mapA: 'E', mapB: 'C' },
    { id: 28, a: "Qualche volta sacrifico i miei desideri a favore di quelli dell’altro.", b: "Cerco di esporre apertamente e subito tutte le preoccupazioni ed i problemi.", mapA: 'B', mapB: 'E' },
    { id: 29, a: "Metto le carte in tavola ed invito l’altro a fare lo stesso.", b: "Piuttosto che scuotere troppo la barca accetto le opinioni dell’altro.", mapA: 'E', mapB: 'B' },
    { id: 30, a: "Mi piace collaborare con gli altri e seguire le loro idee.", b: "Preferisco non litigare ma cercare la migliore soluzione possibile.", mapA: 'B', mapB: 'E' }
  ];

  const infoStili = {
    A: { nome: "Evitante (Avoider)", icona: "🙈", desc: "\"Non discutiamo\". Utile se la situazione è troppo accesa o banale, ma i problemi possono accumularsi." },
    B: { nome: "Accondiscendente (Accomodator)", icona: "🕊️", desc: "\"Cediamo, la relazione conta di più\". Utile se si ha torto o se la questione non è cruciale." },
    C: { nome: "Compromesso (Compromiser)", icona: "🤝", desc: "\"Troviamo una via di mezzo\". Soddisfa parzialmente tutti." },
    D: { nome: "Competitivo (Competitor)", icona: "⚔️", desc: "\"Voglio vincere\". Ottimo per decisioni rapide, rischioso per le relazioni." },
    E: { nome: "Collaborativo / Problem Solver", icona: "🧩", desc: "\"Troviamo una soluzione per entrambi\". Cerca il consenso, richiede tempo." }
  };

  const handleRisposta = (idDomanda, scelta) => {
    setRisposte((prev) => ({ ...prev, [idDomanda]: scelta }));
  };

  const calcolaRisultato = (e) => {
    e.preventDefault();
    if (Object.keys(risposte).length < 30) {
      alert("Rispondi a tutte le 30 domande per scoprire il tuo stile dominante!");
      return;
    }

    // Inizializza i punteggi
    const punteggi = { A: 0, B: 0, C: 0, D: 0, E: 0 };

    // Calcola in base alle risposte e alla mappatura
    domande.forEach((domanda) => {
      const rispostaData = risposte[domanda.id];
      if (rispostaData === 'A') {
        punteggi[domanda.mapA] += 1;
      } else if (rispostaData === 'B') {
        punteggi[domanda.mapB] += 1;
      }
    });

    // Trova lo stile (o gli stili in caso di parità) con il punteggio più alto
    let maxPunteggio = -1;
    let stiliDominanti = [];

    Object.entries(punteggi).forEach(([stile, punti]) => {
      if (punti > maxPunteggio) {
        maxPunteggio = punti;
        stiliDominanti = [stile];
      } else if (punti === maxPunteggio) {
        stiliDominanti.push(stile);
      }
    });

    // Ordina tutti i risultati dal più alto al più basso per la visualizzazione
    const classifica = Object.entries(punteggi).sort((a, b) => b[1] - a[1]);

    setRisultato({ punteggi: classifica, dominanti: stiliDominanti, maxPunteggio });
  };

  return (
    <div className={`accordion-item ${openAccordion?.questionarioConflitti ? 'active' : ''}`} id="accordion-conflitti">
      <div className="accordion-header" onClick={() => toggleAccordion('questionarioConflitti')}>
        <div className="header-title">
          <span className="icon">📋</span>
          <h3> Questionario</h3>
        </div>
        <span className="toggle-icon">{openAccordion?.questionarioConflitti ? '−' : '+'}</span>
      </div>

      <div className="accordion-content">
        <div className="accordion-inner">
          <div className="instruction-box" style={{ backgroundColor: '#fffff0', borderLeftColor: '#d69e2e', padding: '1rem' }}>
            <p style={{ color: '#4a5568', margin: 0, lineHeight: '1.5' }}>
              Nelle 30 coppie di affermazioni elencate, scegli ogni volta l’opzione che <strong>corrisponde meglio</strong> al tuo atteggiamento di fronte alle divergenze con gli altri.
            </p>
          </div>

          <form onSubmit={calcolaRisultato} style={{ marginTop: '2rem' }}>
            {domande.map((dom) => (
              <div key={dom.id} style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #edf2f7' }}>
                <div style={{ fontWeight: 'bold', color: '#2d3748', marginBottom: '0.8rem', fontSize: '1.1rem' }}>Domanda {dom.id}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', padding: '0.5rem', borderRadius: '6px', backgroundColor: risposte[dom.id] === 'A' ? '#ebf8ff' : 'transparent' }}>
                    <input type="radio" name={`q_${dom.id}`} value="A" onChange={() => handleRisposta(dom.id, 'A')} required />
                    <span style={{ color: '#4a5568', lineHeight: '1.4' }}><strong>A:</strong> {dom.a}</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', padding: '0.5rem', borderRadius: '6px', backgroundColor: risposte[dom.id] === 'B' ? '#ebf8ff' : 'transparent' }}>
                    <input type="radio" name={`q_${dom.id}`} value="B" onChange={() => handleRisposta(dom.id, 'B')} required />
                    <span style={{ color: '#4a5568', lineHeight: '1.4' }}><strong>B:</strong> {dom.b}</span>
                  </label>
                </div>
              </div>
            ))}

            {risultato && (
              <div style={{ backgroundColor: '#f0fff4', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem', border: '2px solid #38a169' }}>
                <h4 style={{ color: '#2f855a', margin: '0 0 1rem 0', fontSize: '1.3rem', textAlign: 'center' }}>Il tuo Profilo nella Gestione dei Conflitti</h4>
                
                <p style={{ textAlign: 'center', color: '#4a5568', marginBottom: '1.5rem' }}>
                  Lo stile con il punteggio più alto è quello "dominante", ovvero quello che tendi a mettere in atto in modo più naturale.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {risultato.punteggi.map(([chiave, punti], index) => {
                    const stile = infoStili[chiave];
                    const isDominant = risultato.dominanti.includes(chiave);
                    
                    return (
                      <div key={chiave} style={{ 
                        backgroundColor: isDominant ? '#c6f6d5' : '#fff', 
                        border: isDominant ? '2px solid #38a169' : '1px solid #e2e8f0', 
                        padding: '1rem', 
                        borderRadius: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <h5 style={{ margin: 0, fontSize: '1.1rem', color: isDominant ? '#276749' : '#2d3748' }}>
                            {stile.icona} {stile.nome}
                            {isDominant && <span style={{ marginLeft: '10px', fontSize: '0.8rem', backgroundColor: '#38a169', color: 'white', padding: '2px 8px', borderRadius: '12px' }}>Dominante</span>}
                          </h5>
                          <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: isDominant ? '#276749' : '#718096' }}>
                            {punti} / 12
                          </div>
                        </div>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#4a5568', fontStyle: 'italic' }}>
                          {stile.desc}
                        </p>
                        
                        {/* Barra progressiva visiva */}
                        <div style={{ width: '100%', backgroundColor: '#edf2f7', height: '8px', borderRadius: '4px', overflow: 'hidden', marginTop: '0.5rem' }}>
                          <div style={{ height: '100%', backgroundColor: isDominant ? '#38a169' : '#a0aec0', width: `${(punti / 12) * 100}%` }}></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#2b6cb0', border: 'none', padding: '1rem 2rem', color: 'white', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', transition: 'background 0.3s' }}>
                Calcola il tuo Stile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

