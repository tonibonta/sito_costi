import React from 'react';

// ATTIVITÀ 1: Stili Attributivi
export const StiliAttributivi = ({ toggleAccordion, openAccordion }) => {
  return (
    <div className={`accordion-item ${openAccordion.stiliattributivi ? 'active' : ''}`} id="accordion-stili">
      <div className="accordion-header" onClick={() => toggleAccordion('stiliattributivi')}>
        <div className="header-title">
          <span className="icon">⚖️</span>
          <h3>Stili Attributivi: Cosa Sono?</h3>
        </div>
        <span className="toggle-icon">{openAccordion.stiliattributivi ? '−' : '+'}</span>
      </div>
      <div className="accordion-content">
        <div className="accordion-inner">
          <div style={{ backgroundColor: '#fff5f5', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #e53e3e', marginBottom: '20px' }}>
            <p style={{ margin: 0, fontSize: '1.1rem', color: '#4a5568' }}>
              Rappresentano modalità relativamente stabili attraverso cui gli individui spiegano le cause degli eventi, in particolare <strong>successi</strong> e <strong>fallimenti</strong>.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ padding: '15px', backgroundColor: '#e6fffa', borderRadius: '8px' }}>
              <h4 style={{ color: '#319795' }}>Locus Interno</h4>
              <p style={{ fontSize: '0.9rem', color: '#4a5568' }}>"Ho superato l'esame perché ho studiato con metodo."</p>
              <small><em>(Dipende da me, dall'impegno e dalle mie capacità)</em></small>
            </div>
            <div style={{ padding: '15px', backgroundColor: '#ebf8fa', borderRadius: '8px' }}>
              <h4 style={{ color: '#3182ce' }}>Locus Esterno</h4>
              <p style={{ fontSize: '0.9rem', color: '#4a5568' }}>"Ho superato l'esame perché il prof era di buon umore."</p>
              <small><em>(Dipende dalla fortuna, dal caso o dagli altri)</em></small>
            </div>
          </div>
          <p style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold', color: '#2d3748' }}>
            Un sano stile attributivo riconosce il ruolo dell'impegno nei successi e non colpevolizza eccessivamente l'identità negli insuccessi!
          </p>
        </div>
      </div>
    </div>
  );
};