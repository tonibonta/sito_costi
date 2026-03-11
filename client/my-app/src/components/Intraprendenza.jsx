import React, { useState, useEffect } from 'react';
import { ScelteBivio } from './intraprendenza/ScelteBivio';
import { GeneratoreOpportunita } from './intraprendenza/GeneratoreOpportunita';


export const Intraprendenza = () => {
  const[openAccordion, setOpenAccordion] = useState({
    sceltebivio: false,
    generatoreopportunita: false
  });

  useEffect(() => {
    document.title = "Intraprendenza";
  },[]);

  const toggleAccordion = (id) => {
    setOpenAccordion(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="fade-in" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 0' }}>
      <div className="page-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ color: 'var(--primary-dark)', fontSize: '2.2rem' }}>Intraprendenza</h2>
        <p style={{ color: '#718096', fontSize: '1.1rem' }}>Prendi l'iniziativa e crea il tuo percorso.</p>
      </div>
      <ScelteBivio openAccordion={openAccordion} toggleAccordion={toggleAccordion}/>
      <GeneratoreOpportunita openAccordion={openAccordion} toggleAccordion={toggleAccordion}/>
    </div>
  );
};