import React, { useState, useEffect } from 'react';
import { StiliAttributivi } from './attribuzionecausale/StiliAttributivi';
import { Negativopositivo } from './attribuzionecausale/Negativopositivo';


export const AttribuzioneCausale = (props) => {
  const [openAccordion, setOpenAccordion] = useState({
    stiliattributivi: false
  });

  useEffect(() => {
    document.title = "Attribuzione Causale";
  },[]);

  const toggleAccordion = (id) => {
    setOpenAccordion(prev => ({ ...prev,[id]: !prev[id] }));
  };

  return (
    <div className="fade-in" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 0' }}>
      <div className="page-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ color: 'var(--primary-dark)', fontSize: '2.2rem' }}>Attribuzione Causale</h2>
        <p style={{ color: '#718096', fontSize: '1.1rem' }}>Comprendi come spieghi a te stesso i successi e i fallimenti.</p>
      </div>
      <StiliAttributivi  user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}openAccordion={openAccordion} toggleAccordion={toggleAccordion}/>
      <Negativopositivo  user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}openAccordion={openAccordion} toggleAccordion={toggleAccordion}/>

    </div>
  );
};