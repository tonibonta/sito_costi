import React, { useState, useEffect, useRef } from 'react';
import { AutovalutazioneGestioneTempo } from './gestione_tempo_components/AutovalutazioneGestioneTempo';
import { ModelloSmart } from './gestione_tempo_components/ModelloSmart';
import { MatriceEisenhower } from './gestione_tempo_components/MatriceEisenhower';
import { TecnicaPomodoro } from './gestione_tempo_components/TecnicaPomodoro';
import { Procastinazione } from './gestione_tempo_components/Procastinazione';


const GestioneTempo = () => {
  // Simuliamo i dati che prima ti passava Flask da Python
  const [risultato, setRisultato] = useState(null); // Sostituisci null con 'in_sviluppo' per testare la vista risultato
  const [risposte, setRisposte] = useState({});

  // Stato per gestire l'apertura degli accordion indipendentemente
  const [openAccordion, setOpenAccordion] = useState({
    tempo: risultato ? true : false,
    smart: false,
    eisenhower: false,
    pomodoro: false,
    procrastinazione: false,
    consigli: false
  });

  // Riferimento per lo scroll automatico al risultato
  const risultatoRef = useRef(null);

  // Imposta il titolo della pagina e gestisce lo scroll
  useEffect(() => {
    document.title = "Gestione del Tempo - Soft Skills Rehab UniTo";
    
    // Se c'è un risultato calcolato, scorri la pagina fino alla sezione
    if (risultato && risultatoRef.current) {
      risultatoRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [risultato]);

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
        <AutovalutazioneGestioneTempo openAccordion={openAccordion} toggleAccordion={toggleAccordion} risultato={risultato} risposte={risposte} risultatoRef={risultatoRef}/>
        <ModelloSmart openAccordion={openAccordion} toggleAccordion={toggleAccordion} risultato={risultato} risposte={risposte} risultatoRef={risultatoRef}/>

        <MatriceEisenhower openAccordion={openAccordion} toggleAccordion={toggleAccordion} risultato={risultato} risposte={risposte} risultatoRef={risultatoRef}/>
        <TecnicaPomodoro openAccordion={openAccordion} toggleAccordion={toggleAccordion} risultato={risultato} risposte={risposte} risultatoRef={risultatoRef}/>
        <Procastinazione openAccordion={openAccordion} toggleAccordion={toggleAccordion} risultato={risultato} risposte={risposte} risultatoRef={risultatoRef}/>
        
      </div>
    </>
  );
};

export  {GestioneTempo};