import React, { useState } from 'react';
import API from '../API';
import { useLocation } from 'react-router';

const Coping = (props) => {


 const [msg,setMsg]=useState(null);
  const location=useLocation();
const toggleAccordion = (id) => {
   setOpenAccordion(prev => ({
     ...prev,
     [id]: !prev[id]
   }));
 };
  const [openAccordion, setOpenAccordion] = useState({
      coping:  false
    });


  const [risposte, setRisposte] = useState({});
  const [risultato, setRisultato] = useState(props.val==null?null:{
    "strategiaDominante":JSON.parse(JSON.parse(props.val.valore).strategia),
    "macroDominante":JSON.parse(JSON.parse(props.val.valore).macrodom),
    "macroClassi":JSON.parse(JSON.parse(props.val.valore).macroclassi),

  });

  const domande =[
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
    setRisposte((prev) => ({ ...prev,[index + 1]: parseInt(valore) }));
  };

  const calcolaRisultato = (e) => {
    e.preventDefault();
    if (Object.keys(risposte).length < 28) {
      alert("Rispondi a tutte le 28 domande per calcolare il risultato!");
      return;
    }

    const val = (num) => risposte[num] || 0;

    // 1. SOTTO-STRATEGIE SPECIFICHE (Max 8 punti ciascuna)
    const strategie =[
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

    const strategiaDominante = strategie.reduce((max, obj) => (obj.punti > max.punti ? obj : max), strategie[0]);

    // 2. MACRO-CLASSI PRINCIPALI
    const macroClassi =[
      {
        nome: "Focalizzato sul Problema",
        punti: val(14) + val(25) + val(2) + val(7),
        maxPunti: 16,
        numeroDomande: 4
      },
      {
        nome: "Focalizzato sulle Emozioni",
        punti: val(5) + val(15) + val(10) + val(23) + val(12) + val(17) + val(20) + val(24) + val(22) + val(27) + val(18) + val(28),
        maxPunti: 48,
        numeroDomande: 12
      },
      {
        nome: "Evitamento / Disadattivo",
        punti: val(1) + val(19) + val(9) + val(21) + val(3) + val(8) + val(4) + val(11) + val(6) + val(16) + val(13) + val(26),
        maxPunti: 48,
        numeroDomande: 12
      }
    ];

    // Calcoliamo la media per ogni classe per un confronto equo (da 1 a 4)
    macroClassi.forEach(mc => {
      mc.media = (mc.punti / mc.numeroDomande).toFixed(2);
    });

    // Troviamo la macro-classe dominante basandoci sulla MEDIA
    const macroDominante = macroClassi.reduce((max, obj) => (parseFloat(obj.media) > parseFloat(max.media) ? obj : max), macroClassi[0]);

    // Salviamo tutto nello state
    setRisultato({
      strategiaDominante,
      macroDominante,
      macroClassi
    });

     const ora = new Date();
    const attivita={
      date:ora,
      classe:"autoregolazione_emotiva",
      tipo:"coping_questionario",
      valore:JSON.stringify({
        "strategia":JSON.stringify(strategiaDominante),
        "macrodom":JSON.stringify(macroDominante),
        "macroclassi":JSON.stringify(macroClassi)}
      ),
      id_user:props.user.id
    }
    API.storeAttivita(attivita).then((data)=>{
        setMsg("Completato!");
     setTimeout(()=>{setMsg(null)},4000);
    });
  };

  return (
    <div className={`accordion-item ${openAccordion?.coping ? 'active' : ''}`} id="accordion-coping">
      <div className="accordion-header" onClick={() => toggleAccordion('coping')}>
        <div className="header-title">
          <span className="icon">🛡️</span>
          <h3>Coping:questionario {(location.pathname==="/storico" && props.val!==null)?new Date(props.val.date).toLocaleDateString('it-IT',{  day: '2-digit',  month: '2-digit',   year: 'numeric',   hour: '2-digit',   minute: '2-digit'}):""}</h3>
        </div>
        <span className="toggle-icon">{openAccordion?.coping ? '−' : '+'}</span>
      </div>

      <div className="accordion-content">
        <div className="accordion-inner">
          <div className="instruction-box" style={{ backgroundColor: '#fffff0', borderLeftColor: '#d69e2e', padding: '1rem' }}>
            <p style={{ color: '#4a5568', margin: 0 }}>
              Indica il numero che meglio rappresenta quello che fai quando c’è un evento stressante:<br />
              <strong>1</strong> = Non lo faccio mai | <strong>2</strong> = Poche volte | <strong>3</strong> = In misura moderata | <strong>4</strong> = Faccio proprio così
            </p>
          </div>

          <form onSubmit={calcolaRisultato} style={{ marginTop: '2rem' }}>
            {location.pathname!=="/storico"?
            domande.map((dom, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #edf2f7' }}>
                <p style={{ fontWeight: '500', marginBottom: '0.5rem' }}>{i + 1}. {dom}</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {[1, 2, 3, 4].map(num => (
                    <label key={num} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer' }}>
                      <input type="radio" name={`q_${i + 1}`} value={num} onChange={(e) => handleRisposta(i, e.target.value)} required />
                      <span>{num}</span>
                    </label>
                  ))}
                </div>
              </div>
            )):""}

            {risultato && (
              <div style={{ backgroundColor: '#c6f6d5', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem', border: '2px solid #38a169' }}>
                <h4 style={{ color: '#2f855a', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>Risultati del tuo Profilo di Coping</h4>
                
                {/* Visualizzazione Macro-Classe */}
                <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '6px', marginBottom: '1rem' }}>
                  <h5 style={{ margin: '0 0 0.5rem 0', color: '#276749', fontSize: '1.1rem' }}>
                    🏆 Stile Principale: {risultato.macroDominante.nome}
                  </h5>
                  <p style={{ margin: 0, color: '#4a5568', fontSize: '0.9rem' }}>
                    <strong>Punteggio somma:</strong> {risultato.macroDominante.punti} su {risultato.macroDominante.maxPunti}<br/>
                    <small>(Essendo i gruppi di diversa lunghezza, la vincita si calcola con la media più alta: {risultato.macroDominante.media} su 4)</small>
                  </p>
                </div>

                {/* Riepilogo di tutte le classi */}
                <div style={{ marginBottom: '1rem', color: '#276749' }}>
                  <strong>Riepilogo Punteggi (Somma totale):</strong>
                  <ul style={{ margin: '0.5rem 0', paddingLeft: '1.5rem', fontSize: '0.95rem' }}>
                    {risultato.macroClassi.map((mc, idx) => (
                      <li key={idx}>
                        {mc.nome}: <strong>{mc.punti}</strong>/{mc.maxPunti} <em>(Media: {mc.media})</em>
                      </li>
                    ))}
                  </ul>
                </div>

                <hr style={{ borderColor: '#9ae6b4', margin: '1rem 0' }}/>

                {/* Visualizzazione Sotto-Strategia */}
                <p style={{ margin: 0, color: '#276749' }}>
                  <strong>Sotto-strategia più utilizzata in assoluto:</strong> {risultato.strategiaDominante.nome} <br/>
                  (Punteggio: {risultato.strategiaDominante.punti} su 8 - Categoria: {risultato.strategiaDominante.macro})
                </p>
              </div>
            )}
            
            <div style={{ marginTop: '2rem', textAlign: 'right' }}>
              {location.pathname!=="/storico"?
              msg==null?
              <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#d69e2e', border: 'none', padding: '0.75rem 1.5rem', color: 'white', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
                Scopri il tuo Stile
              </button>
              : <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#2d9102ff', border: 'none', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>{msg}</button>
                 : <button type="button" onClick={()=>props.handleDelete(props.val)} className="btn " style={{ backgroundColor: '#910202ff', border: 'none', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Cancella</button>
              } 
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export { Coping };