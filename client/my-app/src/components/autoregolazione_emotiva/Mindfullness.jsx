import React from 'react';

const  Mindfulness=(props)=> {
const {toggleAccordion,openAccordion}=props;

  return (
    <div className={`accordion-item ${openAccordion.mindfullness ? 'active' : ''}`} id="accordion-mindfullness">
      <div className="accordion-header" onClick={()=>toggleAccordion('mindfullness')}>
        <div className="header-title">
          <span className="icon">🧘‍♀️</span>
          <h3>Mindfulness e Body Scan</h3>
        </div>
        <span className="toggle-icon">{openAccordion.mindfullness ? '−' : '+'}</span>
      </div>

      <div className="accordion-content">
        <div className="accordion-inner">
          <div className="instruction-box" style={{ backgroundColor: '#faf5ff', borderLeftColor: '#805ad5' }}>
            <h4 style={{ color: '#553c9a' }}>Connessione Mente-Corpo</h4>
            <p style={{ color: '#4a5568' }}>Prenditi qualche minuto per ascoltare queste sessioni guidate. Trova un posto tranquillo e mettiti comodo.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
            {/* Player finto 1 */}
            <div style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h5 style={{ margin: 0, color: '#2d3748' }}>Body Scan Rapido (5 min)</h5>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#718096' }}>Rilassamento muscolare progressivo.</p>
              </div>
              <button style={{ background: '#805ad5', color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer' }}>▶</button>
            </div>

            {/* Player finto 2 */}
            <div style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h5 style={{ margin: 0, color: '#2d3748' }}>Mindfulness Profonda (15 min)</h5>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#718096' }}>Centratura e consapevolezza del momento presente.</p>
              </div>
              <button style={{ background: '#805ad5', color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer' }}>▶</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export {Mindfulness}