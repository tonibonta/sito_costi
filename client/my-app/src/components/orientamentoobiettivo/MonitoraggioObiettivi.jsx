import React, { useState } from 'react';

export const MonitoraggioObiettivi = ({ toggleAccordion, openAccordion }) => {
  const [progress, setProgress] = useState(0);
  const [goalName, setGoalName] = useState('');

  return (
    <div className={`accordion-item ${openAccordion.monitoraggio ? 'active' : ''}`} id="accordion-monitoraggio">
      <div className="accordion-header" onClick={() => toggleAccordion('monitoraggio')}>
        <div className="header-title">
          <span className="icon">📈</span>
          <h3>Monitoraggio Obiettivi</h3>
        </div>
        <span className="toggle-icon">{openAccordion.monitoraggio ? '−' : '+'}</span>
      </div>
      <div className="accordion-content">
        <div className="accordion-inner">
          <input 
            type="text" 
            placeholder="Quale obiettivo stai tracciando?" 
            value={goalName} 
            onChange={e => setGoalName(e.target.value)} 
            style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc' }} 
          />
          
          <div style={{ backgroundColor: '#e2e8f0', borderRadius: '20px', height: '30px', width: '100%', overflow: 'hidden' }}>
            <div style={{ 
              backgroundColor: progress === 100 ? '#48bb78' : '#3182ce', 
              height: '100%', width: `${progress}%`, transition: 'width 0.5s ease-in-out',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.8rem'
            }}>
              {progress > 5 && `${progress}%`}
            </div>
          </div>

          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <p>Segna un progresso:</p>
            <button onClick={() => setProgress(Math.min(100, progress + 10))} style={{ margin: '0 5px', padding: '10px 20px', backgroundColor: '#38b2ac', color: 'white', border: 'none', borderRadius: '5px' }}>+10% Progresso</button>
            <button onClick={() => setProgress(Math.max(0, progress - 10))} style={{ margin: '0 5px', padding: '10px 20px', backgroundColor: '#e53e3e', color: 'white', border: 'none', borderRadius: '5px' }}>-10%</button>
          </div>
        </div>
      </div>
    </div>
  );
};