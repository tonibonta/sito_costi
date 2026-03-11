import React from 'react';

const DiarioEmotivo=(props)=> {
const {toggleAccordion,openAccordion}=props;

  return (
    <div className={`accordion-item ${openAccordion.diarioemotivo ? 'active' : ''}`} id="accordion-diario-emotivo">
      <div className="accordion-header" onClick={()=>toggleAccordion('diarioemotivo')}>
        <div className="header-title">
          <span className="icon">📖</span>
          <h3>Diario Emotivo</h3>
        </div>
        <span className="toggle-icon">{openAccordion.diarioemotivo ? '−' : '+'}</span>
      </div>

      <div className="accordion-content">
        <div className="accordion-inner">
          <div className="instruction-box" style={{ backgroundColor: '#ebf8ff', borderLeftColor: '#3182ce' }}>
            <h4 style={{ color: '#2b6cb0' }}>Traccia le tue emozioni</h4>
            <p style={{ color: '#4a5568' }}>Pensa a una situazione recente e compila questo diario emotivo per prendere consapevolezza dei tuoi stati d'animo e delle tue reazioni.</p>
          </div>

          <form style={{ marginTop: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Cosa è successo?</label>
                <textarea rows="2" style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px' }} placeholder="Descrivi brevemente l'evento..."></textarea>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Quando è successo?</label>
                  <input type="text" style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px' }} placeholder="Es. Ieri pomeriggio" />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Dove è successo?</label>
                  <input type="text" style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px' }} placeholder="Es. In reparto, a casa..." />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Che emozione hai provato?</label>
                <input type="text" style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px' }} placeholder="Es. Rabbia, Tristezza, Frustrazione, Gioia (1-2 parole)" />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Cosa hai fatto? (Che regola personale hai applicato?)</label>
                <textarea rows="2" style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e0', borderRadius: '8px' }} placeholder="Come hai reagito all'emozione?"></textarea>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
              <button type="button" className="btn btn-primary" style={{ backgroundColor: '#3182ce', border: 'none' }}>Salva Pagina del Diario</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export {DiarioEmotivo}