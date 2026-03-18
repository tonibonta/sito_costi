import React, { useState, useEffect } from 'react';

 const Comunicazione = (props) => {
  const[openAccordion, setOpenAccordion] = useState({
    assiomi: false,
   
  });

  useEffect(() => {
    document.title = "Comunicazione";
  },[]);

  const toggleAccordion = (id) => {
    setOpenAccordion(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="fade-in" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 0' }}>
      <div className="page-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ color: 'var(--primary-dark)', fontSize: '2.2rem' }}>Comunicazione</h2>
        <p style={{ color: '#718096', fontSize: '1.1rem' }}>Prendi l'iniziativa e crea il tuo percorso.</p>
      </div>
      <AssiomiComunicazione user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout} openAccordion={openAccordion} toggleAccordion={toggleAccordion}/>
     
    </div>
  );
};


const AssiomiComunicazione = (props) => {
  const { toggleAccordion, openAccordion } = props;

  const assiomi =[
    {
      id: 1,
      titolo: 'Impossibilità di non comunicare',
      descrizione: 'Ogni comportamento è un messaggio e, poiché non esiste un "non-comportamento", è impossibile non comunicare. Anche il silenzio o l\'indifferenza comunicano qualcosa.'
    },
    {
      id: 2,
      titolo: 'Livelli di contenuto e di relazione',
      descrizione: 'Ogni comunicazione ha un aspetto di notizia (contenuto, cosa si dice) e un aspetto di relazione (come lo si dice), tale che il secondo classifica il primo. Il tono di voce o il contesto definiscono la relazione tra gli interlocutori.'
    },
    {
      id: 3,
      titolo: 'Punteggiatura della sequenza di eventi',
      descrizione: 'La natura di una relazione dipende dalla "punteggiatura" (interpretazione) della sequenza degli scambi. Ogni partecipante interpreta la propria reazione come conseguenza del comportamento dell\'altro, creando un ciclo continuo.'
    },
    {
      id: 4,
      titolo: 'Comunicazione digitale e analogica',
      descrizione: 'La comunicazione umana si divide in digitale (le parole, il linguaggio verbale) e analogica (il non verbale: gesti, espressioni, tono della voce).'
    },
    {
      id: 5,
      titolo: 'Interazione simmetrica o complementare',
      descrizione: 'Le relazioni possono essere basate sulla parità (simmetriche, tra pari) o sulla differenza di status (complementari, come superiore-subordinato, professore-studente, genitore-figlio).'
    }
  ];

  return (
    <div className={`accordion-item ${openAccordion?.assiomi ? 'active' : ''}`} id="accordion-assiomi">
      <div className="accordion-header" onClick={() => toggleAccordion('assiomi')}>
        <div className="header-title">
          <span className="icon">🗣️</span>
          <h3>I 5 Assiomi di Watzlawick</h3>
        </div>
        <span className="toggle-icon">{openAccordion?.assiomi ? '−' : '+'}</span>
      </div>

      <div className="accordion-content">
        <div className="accordion-inner">
          <div className="instruction-box" style={{ backgroundColor: '#ebf8ff', borderLeftColor: '#3182ce', padding: '1rem', marginBottom: '2rem' }}>
            <p style={{ color: '#2b6cb0', margin: 0, fontSize: '1.05rem', fontWeight: '500' }}>
              "Ogni comportamento è un messaggio e la relazione ne influenza sempre il contenuto."
              <br/><span style={{ fontSize: '0.9rem', fontWeight: 'normal', color: '#4a5568' }}>— Paul Watzlawick</span>
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.2rem' }}>
            {assiomi.map((assioma) => (
              <div key={assioma.id} style={{ 
                display: 'flex', 
                gap: '1rem', 
                backgroundColor: '#f7fafc', 
                border: '1px solid #e2e8f0', 
                borderRadius: '8px', 
                padding: '1.2rem',
                alignItems: 'flex-start'
              }}>
                <div style={{ 
                  backgroundColor: '#2b6cb0', 
                  color: 'white', 
                  width: '35px', 
                  height: '35px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  flexShrink: 0
                }}>
                  {assioma.id}
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem 0', color: '#2d3748', fontSize: '1.05rem' }}>
                    {assioma.titolo}
                  </h4>
                  <p style={{ margin: 0, color: '#4a5568', fontSize: '0.95rem', lineHeight: '1.5' }}>
                    {assioma.descrizione}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export { Comunicazione };