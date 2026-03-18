import React, { useState, useEffect } from 'react';
import { GoalSetter } from './orientamentoobiettivo/GoalSetter';
import { MonitoraggioObiettivi } from './orientamentoobiettivo/MonitoraggioObiettivi';


export const OrientamentoObiettivo = (props) => {
  const [openAccordion, setOpenAccordion] = useState({
    goalsetter: false,
    monitoraggio: false
  });

  useEffect(() => {
    document.title = "Orientamento all'obiettivo";
  },[]);

  const toggleAccordion = (id) => {
    setOpenAccordion(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="fade-in" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 0' }}>
      <div className="page-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ color: 'var(--primary-dark)', fontSize: '2.2rem' }}>Orientamento all'Obiettivo</h2>
        <p style={{ color: '#718096', fontSize: '1.1rem' }}>Impara a definire e raggiungere i tuoi traguardi.</p>
      </div>
      <GoalSetter user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}openAccordion={openAccordion} toggleAccordion={toggleAccordion}/>
      <MonitoraggioObiettivi user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout} openAccordion={openAccordion} toggleAccordion={toggleAccordion}/>
    </div>
  );
};