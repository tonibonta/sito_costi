import React, { useState, useEffect } from 'react';
import { DigitalJournaling } from './valorizzazionedise/DigitalJournaling';
import { ConsigliAutostima } from './valorizzazionedise/Consigli';


export const ValorizzazioneDiSe = () => {
  const[openAccordion, setOpenAccordion] = useState({
    digitaljournaling: false,
    consigli: false
  });

  useEffect(() => {
    document.title = "Valorizzazione di Sé (Autostima)";
  },[]);

  const toggleAccordion = (id) => {
    setOpenAccordion(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="fade-in" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 0' }}>
      <div className="page-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ color: 'var(--primary-dark)', fontSize: '2.2rem' }}>Valorizzazione di Sé (Autostima)</h2>
        <p style={{ color: '#718096', fontSize: '1.1rem' }}>Riconosci il tuo valore e costruisci la tua sicurezza.</p>
      </div>
      <DigitalJournaling openAccordion={openAccordion} toggleAccordion={toggleAccordion}/>
      <ConsigliAutostima openAccordion={openAccordion} toggleAccordion={toggleAccordion}/>
    </div>
  );
};