import React, { useState, useEffect } from 'react';
import { CinquePerche } from './problem_solving/CinquePerche';
import { AlberoProblemi } from './problem_solving/AlberoProblemi';
import { RisoluzionePassaggi } from './problem_solving/RisoluzionePassaggi';
import { ActionLearning } from './problem_solving/ActionLearning';
import { SfideGiornaliere } from './resilienza/SfideGiornaliere';
import { TermometroStress } from './resilienza/TermometroStress';


const Resilienza=()=> {
  // Gestione stato degli accordion
  const [openAccordion, setOpenAccordion] = useState({
    termometro: false,
    sfideGiornaliere: false,

  });

  // Aggiorna il titolo della pagina
  useEffect(() => {
    document.title = "Resilienza - Soft Skills Rehab UniTo";
  }, []);

  // Funzione per alternare gli accordion
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
          <h2 style={{ color: 'var(--primary-dark)', fontSize: '2.2rem' }}>Resilienza</h2>
          <p style={{ color: '#718096', fontSize: '1.1rem' }}>Valuta le tue competenze e scopri il tuo livello.</p>
        </div>

       <TermometroStress openAccordion={openAccordion} toggleAccordion={toggleAccordion}/>
       <SfideGiornaliere openAccordion={openAccordion} toggleAccordion={toggleAccordion}/>



      </div>
    </>
  );
}
export {Resilienza};