import React, { useState, useEffect } from 'react';
import { DiarioEmotivo } from './autoregolazione_emotiva/DiarioEmotivo';
import { Mindfulness } from './autoregolazione_emotiva/Mindfullness';
import { Coping } from './autoregolazione_emotiva/Coping';
import { CopingStrategie } from './autoregolazione_emotiva/CopingStrategie';
import { Biofeedback } from './autoregolazione_emotiva/Biofeedback';



const AutoregolazioneEmotiva=(props)=> {
  // Gestione stato degli accordion
  const [openAccordion, setOpenAccordion] = useState({
    biofeedback: false,
    coping: false,
    copingstrategie:false,
    diarioemotivo: false,
    mindfullness: false

  });

  // Aggiorna il titolo della pagina
  useEffect(() => {
    document.title = "Autoregolazione emotiva";
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
          <h2 style={{ color: 'var(--primary-dark)', fontSize: '2.2rem' }}>Autoregolazione Emotiva (Tolleranza di ansia e stress e consapevolezza emotiva)</h2>
          <p style={{ color: '#718096', fontSize: '1.1rem' }}>Valuta le tue competenze e scopri il tuo livello.</p>
        </div>

       <DiarioEmotivo user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}openAccordion={openAccordion} toggleAccordion={toggleAccordion}/>
       <Biofeedback user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}openAccordion={openAccordion} toggleAccordion={toggleAccordion}/>
       <Mindfulness user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}openAccordion={openAccordion} toggleAccordion={toggleAccordion}/>
       <Coping user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout} openAccordion={openAccordion} toggleAccordion={toggleAccordion}/>
       <CopingStrategie user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}openAccordion={openAccordion} toggleAccordion={toggleAccordion}/>

       


      </div>
    </>
  );
}
export {AutoregolazioneEmotiva};