import React, { useState } from 'react';

// ATTIVITÀ 1: Digital Journaling
export const DigitalJournaling = ({ toggleAccordion, openAccordion }) => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');

  const handleAddEntry = () => {
    if (newEntry.trim() !== '') {
      setEntries([...entries, { text: newEntry, date: new Date().toLocaleDateString() }]);
      setNewEntry('');
    }
  };

  return (
    <div className={`accordion-item ${openAccordion.digitaljournaling ? 'active' : ''}`} id="accordion-journal">
      <div className="accordion-header" onClick={() => toggleAccordion('digitaljournaling')}>
        <div className="header-title">
          <span className="icon">📖</span>
          <h3>Digital Journaling</h3>
        </div>
        <span className="toggle-icon">{openAccordion.digitaljournaling ? '−' : '+'}</span>
      </div>
      <div className="accordion-content">
        <div className="accordion-inner">
          <p style={{ color: '#4a5568', marginBottom: '1rem' }}>Annota qui ogni giorno i tuoi piccoli e grandi successi clinici e personali.</p>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
            <input 
              type="text" 
              value={newEntry} 
              onChange={(e) => setNewEntry(e.target.value)} 
              placeholder="Oggi sono fiero di me perché..." 
              style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #cbd5e0' }}
            />
            <button onClick={handleAddEntry} className="btn btn-primary" style={{ backgroundColor: '#38b2ac', border: 'none', padding: '10px 20px', color: 'white', borderRadius: '5px' }}>
              Aggiungi
            </button>
          </div>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {entries.map((entry, index) => (
              <li key={index} style={{ backgroundColor: '#f7fafc', padding: '10px', marginBottom: '5px', borderRadius: '5px', borderLeft: '4px solid #38b2ac' }}>
                <small style={{ color: '#a0aec0', display: 'block' }}>{entry.date}</small>
                {entry.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
