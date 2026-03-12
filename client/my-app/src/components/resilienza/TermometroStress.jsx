import React, { useState } from 'react';

const TermometroStress = (props) => {
  const { toggleAccordion, openAccordion } = props;

  const [livello, setLivello] = useState(null);

  const livelli =[
    {
      id: 'verde',
      nome: 'Zona Verde - Gestibile',
      descrizione: 'Mi sento tranquillo/a o comunque in controllo. Il carico di studio è adeguato.',
      coloreTesto: '#2f855a',
      coloreSfondo: '#c6f6d5',
      bordo: '#38a169',
      icona: '🟢'
    },
    {
      id: 'giallo',
      nome: 'Zona Gialla - Sotto Pressione',
      descrizione: 'Inizio a sentire il peso degli esami e degli impegni. L\'ansia si fa sentire, ma resisto.',
      coloreTesto: '#975a16',
      coloreSfondo: '#feebc8',
      bordo: '#dd6b20',
      icona: '🟡'
    },
    {
      id: 'rosso',
      nome: 'Zona Rossa - Sovraccarico',
      descrizione: 'Mi sento completamente sopraffatto/a. Lo stress è molto alto e fatico a concentrarmi.',
      coloreTesto: '#9b2c2c',
      coloreSfondo: '#fed7d7',
      bordo: '#e53e3e',
      icona: '🔴'
    }
  ];

  return (
    <div className={`accordion-item ${openAccordion?.termometro ? 'active' : ''}`} id="accordion-termometro">
      <div className="accordion-header" onClick={() => toggleAccordion('termometro')}>
        <div className="header-title">
          <span className="icon">🌡️</span>
          <h3>Termometro dello Stress</h3>
        </div>
        <span className="toggle-icon">{openAccordion?.termometro ? '−' : '+'}</span>
      </div>

      <div className="accordion-content">
        <div className="accordion-inner">
          <div className="instruction-box" style={{ backgroundColor: '#fffff0', borderLeftColor: '#d69e2e', padding: '1rem', marginBottom: '1.5rem' }}>
            <p style={{ color: '#4a5568', margin: 0 }}>
              Come ti senti in questo momento? Seleziona il livello che meglio descrive il tuo attuale carico emotivo e mentale.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {livelli.map((liv) => (
              <div 
                key={liv.id}
                onClick={() => setLivello(liv.id)}
                style={{
                  padding: '1rem',
                  borderRadius: '8px',
                  border: `2px solid ${livello === liv.id ? liv.bordo : '#e2e8f0'}`,
                  backgroundColor: livello === liv.id ? liv.coloreSfondo : '#f7fafc',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  opacity: livello && livello !== liv.id ? 0.6 : 1
                }}
              >
                <h4 style={{ margin: '0 0 0.3rem 0', color: livello === liv.id ? liv.coloreTesto : '#2d3748', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {liv.icona} {liv.nome}
                </h4>
                <p style={{ margin: 0, color: '#4a5568', fontSize: '0.95rem' }}>{liv.descrizione}</p>
              </div>
            ))}
          </div>

          {/* BOX INTERVENTO PER ZONA ROSSA */}
          {livello === 'rosso' && (
            <div style={{ marginTop: '2rem', padding: '1.5rem', borderRadius: '8px', backgroundColor: '#ebf8ff', border: '2px solid #3182ce' }}>
              <h4 style={{ color: '#2b6cb0', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>🛑</span> Fermati un attimo. Intervento di Mindfulness rapido
              </h4>
              <p style={{ color: '#2c5282', fontSize: '0.95rem', marginBottom: '1rem' }}>
                Sei in sovraccarico cognitivo. Continuare a studiare ora è controproducente. 
                Prenditi <strong>2 minuti</strong> per resettare il sistema nervoso con la tecnica del <em>Box Breathing</em> (Respirazione Quadrata).
              </p>
              
              <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ padding: '1rem', backgroundColor: '#e2e8f0', borderRadius: '4px' }}><strong>1. INSPIRA</strong><br/>dal naso per 4 secondi</div>
                  <div style={{ padding: '1rem', backgroundColor: '#cbd5e0', borderRadius: '4px' }}><strong>2. TRATTIENI</strong><br/>il respiro per 4 secondi</div>
                  <div style={{ padding: '1rem', backgroundColor: '#cbd5e0', borderRadius: '4px' }}><strong>4. TRATTIENI</strong><br/>a polmoni vuoti per 4 sec</div>
                  <div style={{ padding: '1rem', backgroundColor: '#e2e8f0', borderRadius: '4px' }}><strong>3. ESPIRA</strong><br/>dalla bocca per 4 secondi</div>
                </div>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#718096' }}>Ripeti questo ciclo per 4 volte prima di prendere qualsiasi altra decisione.</p>
              </div>
            </div>
          )}

          {livello === 'giallo' && (
            <div style={{ marginTop: '1.5rem', padding: '1rem', borderRadius: '6px', backgroundColor: '#fffff0', border: '1px solid #d69e2e', color: '#975a16' }}>
              💡 <strong>Consiglio:</strong> Sei nella zona di allerta. Ricordati di fare una pausa di 10 minuti ogni 50 minuti di studio per non scivolare nella zona rossa!
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export { TermometroStress };