import React from 'react';

const Mindfulness = (props) => {
  const { toggleAccordion, openAccordion } = props;

  return (
    <div className={`accordion-item ${openAccordion.mindfullness ? 'active' : ''}`} id="accordion-mindfullness">
      <div className="accordion-header" onClick={() => toggleAccordion('mindfullness')}>
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
            
            {/* --- Categoria: Mindfulness --- */}
            <h5 style={{ margin: '0.5rem 0 0 0', color: '#553c9a', fontSize: '1.1rem' }}>Podcast Mindfulness</h5>
            
            <a href="https://open.spotify.com/show/47eG4dJiq1CqOZFOrgJubb?si=6ad2220067974f9f " target="_blank" rel="noopener noreferrer" style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none' }}>
              <div>
                <h5 style={{ margin: 0, color: '#2d3748', fontSize: '1rem' }}>Mindfulness in voce</h5>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#718096' }}>Ascolta su Spotify</p>
              </div>
              <span style={{ fontSize: '1.5rem' }}>🎧</span>
            </a>

            <a href="https://open.spotify.com/show/6BO2ZoJ1KSzYhlfyfgElU7?si=8e2d8134d86f43ea " target="_blank" rel="noopener noreferrer" style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none' }}>
              <div>
                <h5 style={{ margin: 0, color: '#2d3748', fontSize: '1rem' }}>7 minuti di meditazione</h5>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#718096' }}>Ascolta su Spotify</p>
              </div>
              <span style={{ fontSize: '1.5rem' }}>🎧</span>
            </a>

            {/* --- Categoria: Body Scan --- */}
            <h5 style={{ margin: '1rem 0 0 0', color: '#553c9a', fontSize: '1.1rem' }}>Body Scan</h5>

            <a href="https://open.spotify.com/episode/3H2H6Uo6nUdTOtiG4UQBpB?si=cpeNZnSNRu-puNvaBNDuAg " target="_blank" rel="noopener noreferrer" style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none' }}>
              <div>
                <h5 style={{ margin: 0, color: '#2d3748', fontSize: '1rem' }}>Lo psiconauta</h5>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#718096' }}>Ascolta su Spotify</p>
              </div>
              <span style={{ fontSize: '1.5rem' }}>🎧</span>
            </a>

            <a href="https://www.youtube.com/@MariaMichelaAltieropsicologa" target="_blank" rel="noopener noreferrer" style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none' }}>
              <div>
                <h5 style={{ margin: 0, color: '#2d3748', fontSize: '1rem' }}>Maria Michela Altiero</h5>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#718096' }}>Guarda su YouTube</p>
              </div>
              <span style={{ fontSize: '1.5rem' }}>📺</span>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}

export { Mindfulness };