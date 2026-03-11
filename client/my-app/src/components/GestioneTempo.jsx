import React, { useState, useEffect, useRef } from 'react';
import { AutovalutazioneGestioneTempo } from './gestione_tempo_components/AutovalutazioneGestioneTempo';
import { ModelloSmart } from './gestione_tempo_components/ModelloSmart';
import { MatriceEisenhower } from './gestione_tempo_components/MatriceEisenhower';
import { TecnicaPomodoro } from './gestione_tempo_components/TecnicaPomodoro';
import { Procastinazione } from './gestione_tempo_components/Procastinazione';
import { Consigli } from './gestione_tempo_components/Consigli';


const GestioneTempo = () => {


  // Stato per gestire l'apertura degli accordion indipendentemente
  const [openAccordion, setOpenAccordion] = useState({
    tempo:  false,
    smart: false,
    eisenhower: false,
    pomodoro: false,
    procrastinazione: false,
    consigli: false
  });


  useEffect(() => {
    document.title = "Gestione del Tempo - Soft Skills Rehab UniTo";
    
    
  }, );

  // Funzione per alternare lo stato degli accordion
  const toggleAccordion = (id) => {
    setOpenAccordion(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };



  return (
    <>
      <div className="fade-in" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 0' }}>
        
        <div className="page-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--primary-dark)', fontSize: '2.2rem' }}>Gestione del Tempo</h2>
          <p style={{ color: '#718096', fontSize: '1.1rem' }}>Valuta le tue competenze e scopri il tuo livello.</p>
        </div>
        <AutovalutazioneGestioneTempo openAccordion={openAccordion} toggleAccordion={toggleAccordion} />
        <ModelloSmart openAccordion={openAccordion} toggleAccordion={toggleAccordion} />

        <MatriceEisenhower openAccordion={openAccordion} toggleAccordion={toggleAccordion} />
        <TecnicaPomodoro openAccordion={openAccordion} toggleAccordion={toggleAccordion} />
        <Procastinazione openAccordion={openAccordion} toggleAccordion={toggleAccordion} />
        <Consigli openAccordion={openAccordion} toggleAccordion={toggleAccordion} />

        
      </div>
    </>
  );
};

export  {GestioneTempo};