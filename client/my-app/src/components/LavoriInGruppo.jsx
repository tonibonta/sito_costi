import React, { useState, useEffect } from 'react';



export const LavoriInGruppo = (props) => {
  const[openAccordion, setOpenAccordion] = useState({
    tuckman: false,
   
  });

  useEffect(() => {
    document.title = "Lavori in gruppo";
  },[]);

  const toggleAccordion = (id) => {
    setOpenAccordion(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="fade-in" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 0' }}>
      <div className="page-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ color: 'var(--primary-dark)', fontSize: '2.2rem' }}>Lavoro in gruppo</h2>
        <p style={{ color: '#718096', fontSize: '1.1rem' }}>Prendi l'iniziativa e crea il tuo percorso.</p>
      </div>
      <ModelloTuckman  user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}openAccordion={openAccordion} toggleAccordion={toggleAccordion}/>
     
    </div>
  );
};

const ModelloTuckman = (props) => {
  const { toggleAccordion, openAccordion } = props;

  const fasiTuckman =[
    {
      id: 1,
      nome: 'Forming (Formazione)',
      descrizione: "I membri del team si riuniscono per la prima volta. Questa fase è caratterizzata da presentazioni, orientamento e un senso di incertezza, mentre gli individui imparano a conoscersi e a comprendere i propri ruoli all'interno del gruppo.",
      coloreSfondo: '#ebf8ff',
      coloreBordo: '#3182ce',
      icona: '🤝'
    },
    {
      id: 2,
      nome: 'Storming (Scambio/Conflitto)',
      descrizione: "Un periodo di conflitto e disaccordo. Man mano che i membri del team entrano in confidenza tra loro, iniziano a esprimere le proprie opinioni e a mettere in discussione le idee, il che può portare a scontri e lotte di potere.",
      coloreSfondo: '#fff5f5',
      coloreBordo: '#e53e3e',
      icona: '⚡'
    },
    {
      id: 3,
      nome: 'Norming (Normazione)',
      descrizione: "Il gruppo inizia a stabilire punti d'incontro e a sviluppare un senso di coesione. I conflitti vengono risolti e il team inizia a lavorare insieme in modo più efficace.",
      coloreSfondo: '#fffff0',
      coloreBordo: '#d69e2e',
      icona: '⚖️'
    },
    {
      id: 4,
      nome: 'Performing (Esecuzione)',
      descrizione: "Il team opera al massimo livello di efficienza ed efficacia. I membri sono altamente motivati, lavorano in modo collaborativo verso obiettivi condivisi e raggiungono la sinergia.",
      coloreSfondo: '#c6f6d5',
      coloreBordo: '#38a169',
      icona: '🚀'
    }
  ];

  return (
    <div className={`accordion-item ${openAccordion?.tuckman ? 'active' : ''}`} id="accordion-tuckman">
      <div className="accordion-header" onClick={() => toggleAccordion('tuckman')}>
        <div className="header-title">
          <span className="icon">👥</span>
          <h3>Modello di Tuckman</h3>
        </div>
        <span className="toggle-icon">{openAccordion?.tuckman ? '−' : '+'}</span>
      </div>

      <div className="accordion-content">
        <div className="accordion-inner">
          <div className="instruction-box" style={{ backgroundColor: '#fffff0', borderLeftColor: '#d69e2e', padding: '1rem', marginBottom: '2rem' }}>
            <p style={{ color: '#4a5568', margin: 0, lineHeight: '1.5' }}>
              <strong>Cos’è?</strong> È un modello che descrive il percorso psicologico e operativo che un gruppo compie per diventare una squadra affiatata.<br/>
              Un team <em>non nasce già perfetto</em>: deve necessariamente attraversare fasi di disagio e conflitto per raggiungere l'eccellenza.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}>
            {fasiTuckman.map((fase, index) => (
              <React.Fragment key={fase.id}>
                <div style={{ 
                  backgroundColor: fase.coloreSfondo, 
                  borderLeft: `5px solid ${fase.coloreBordo}`, 
                  padding: '1.2rem', 
                  borderRadius: '0 8px 8px 0',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: fase.coloreBordo, display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
                    <span>{fase.icona}</span> {index + 1}. {fase.nome}
                  </h4>
                  <p style={{ margin: 0, color: '#4a5568', fontSize: '0.95rem', lineHeight: '1.5' }}>
                    {fase.descrizione}
                  </p>
                </div>
                {/* Freccia direzionale tra un blocco e l'altro (tranne l'ultimo) */}
                {index < fasiTuckman.length - 1 && (
                  <div style={{ textAlign: 'center', color: '#a0aec0', fontSize: '1.5rem', lineHeight: '0.5' }}>
                    ↓
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
