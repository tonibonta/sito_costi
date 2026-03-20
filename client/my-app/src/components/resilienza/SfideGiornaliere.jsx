import React, { useState } from 'react';
import API from '../API';

const SfideGiornaliere = (props) => {
   const [msg,setMsg]=useState(null);
  const { toggleAccordion, openAccordion } = props;

  const[sfidaAttuale, setSfidaAttuale] = useState(null);
  const [completata, setCompletata] = useState(false);

  const listaSfide =[
    "Fai una domanda durante la lezione (o al termine), anche se hai paura che sia banale.",
    "Studia per almeno 1 ora in un posto nuovo in cui non sei mai stato (una nuova biblioteca, un parco, un'aula studio diversa).",
    "Inizia una conversazione con un compagno di corso con cui non hai mai parlato.",
    "Spegni completamente il telefono e mettilo in un'altra stanza per 2 ore consecutive mentre studi.",
    "Chiedi feedback a un professore su un progetto o vai al ricevimento per chiarire un piccolo dubbio.",
    "Prenditi 20 minuti di 'pausa vera': niente schermi, niente libri. Solo una passeggiata fuori o un caffè in totale disconnessione.",
    "Condividi i tuoi appunti o riassunti con qualcuno che potrebbe averne bisogno nel gruppo della classe.",
    "Guarda l'esame che ti fa più paura e organizza lo studio dei primi 3 capitoli pianificandolo sul calendario."
  ];

  const generaSfida = () => {
    // Evita che esca la stessa sfida di fila
    let nuovaSfida;
    do {
      const indiceRandom = Math.floor(Math.random() * listaSfide.length);
      nuovaSfida = listaSfide[indiceRandom];
    } while (nuovaSfida === sfidaAttuale && listaSfide.length > 1);
    
    setSfidaAttuale(nuovaSfida);
    setCompletata(false);
  };

  const segnaCompletata = () => {
    setCompletata(true);
    const attivita={
      date:ora,
      classe:"resilienza",
      tipo:"sfide_giornaliere",
      valore:JSON.stringify({"sfidaAttuale":sfidaAttuale}),
      id_user:props.user.id
    }
    API.storeAttivita(attivita).then((data)=>{
       setMsg("Completato!");
     setTimeout(()=>{setMsg(null)},4000);
    });
  };

  return (
    <div className={`accordion-item ${openAccordion?.sfideGiornaliere ? 'active' : ''}`} id="accordion-sfide">
      <div className="accordion-header" onClick={() => toggleAccordion('sfideGiornaliere')}>
        <div className="header-title">
          <span className="icon">🎯</span>
          <h3>Sfide Giornaliere</h3>
        </div>
        <span className="toggle-icon">{openAccordion?.sfideGiornaliere ? '−' : '+'}</span>
      </div>

      <div className="accordion-content">
        <div className="accordion-inner">
          <div className="instruction-box" style={{ backgroundColor: '#fffff0', borderLeftColor: '#d69e2e', padding: '1rem', marginBottom: '1.5rem' }}>
            <p style={{ color: '#4a5568', margin: 0 }}>
              Uscire dalla propria comfort zone è il modo migliore per rafforzare la resilienza. <br/>
              Genera una sfida per oggi e prova a portarla a termine!
            </p>
          </div>

          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            {!sfidaAttuale ? (
              <button 
                onClick={generaSfida}
                style={{ backgroundColor: '#2b6cb0', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.2s' }}
              >
                🎲 Genera la sfida di oggi
              </button>
            ) : (
              <div style={{ textAlign: 'left', backgroundColor: '#f7fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#718096', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '1px' }}>
                  La tua missione di oggi:
                </span>
                <p style={{ fontSize: '1.2rem', color: '#2d3748', margin: '1rem 0', lineHeight: '1.5' }}>
                  "{sfidaAttuale}"
                </p>

                {completata ? (
                  <div style={{ marginTop: '1.5rem', backgroundColor: '#c6f6d5', color: '#22543d', padding: '1rem', borderRadius: '6px', border: '1px solid #9ae6b4', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>🏆</span> <strong>Bravissimo/a!</strong> Hai completato la sfida e sei uscito/a dalla tua comfort zone oggi.
                  </div>
                ) : (
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                    <button 
                      onClick={segnaCompletata}
                      style={{ flex: 1, backgroundColor: '#48bb78', color: 'white', border: 'none', padding: '0.8rem', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
                    >
                      ✅ Segna come Completata
                    </button>
                    <button 
                      onClick={generaSfida}
                      style={{ flex: 1, backgroundColor: '#edf2f7', color: '#4a5568', border: '1px solid #cbd5e0', padding: '0.8rem', borderRadius: '6px', cursor: 'pointer' }}
                    >
                      Cambia Sfida
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export { SfideGiornaliere };