import React, { useState, useEffect } from 'react';
import { CinquePerche } from './problem_solving/CinquePerche';
import { AlberoProblemi } from './problem_solving/AlberoProblemi';
import { RisoluzionePassaggi } from './problem_solving/RisoluzionePassaggi';
import { ActionLearning } from './problem_solving/ActionLearning';


const ProblemSolving=(props)=> {
  // Gestione stato degli accordion
  const [openAccordion, setOpenAccordion] = useState({
    cinquePerche: false,
    albero: false,
    seiStep: false,
    action: false

  });

  // Aggiorna il titolo della pagina
  useEffect(() => {
    document.title = "Problem solving e adozione di strategie adeguate al compito - Soft Skills Rehab UniTo";
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
          <h2 style={{ color: 'var(--primary-dark)', fontSize: '2.2rem' }}>Problem solving e adozione di strategie adeguate al compito</h2>
          <p style={{ color: '#718096', fontSize: '1.1rem' }}>Valuta le tue competenze e scopri il tuo livello.</p>
        </div>

       <CinquePerche user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout} openAccordion={openAccordion} toggleAccordion={toggleAccordion}/>
       <AlberoProblemi  user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}openAccordion={openAccordion} toggleAccordion={toggleAccordion}/>
       <RisoluzionePassaggi  user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}openAccordion={openAccordion} toggleAccordion={toggleAccordion}/>
       <ActionLearning user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout} openAccordion={openAccordion} toggleAccordion={toggleAccordion}/>


      </div>
    </>
  );
}
export {ProblemSolving};