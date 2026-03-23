import React, { useEffect } from 'react';
import '../App.css'
import '../assets/home.css'
const Home = () => {
  // Imposta il titolo della scheda del browser quando il componente viene caricato
  useEffect(() => {
    document.title = "Home - Soft Skills Rehab UniTo";
  }, []);

  return (
    <>
      <section className="info-section" style={{marginTop:"100px"}}>
        <h3 >Cosa sono le Soft Skills?</h3>
        <p>
          «Abilità intra ed inter personali di tipo socio emotivo importanti per lo sviluppo personale, la partecipazione sociale e il successo lavorativo [...]» (Kechagias)
        </p>
      </section>

      <section className="info-section">
        <h3>Perché sono importanti?</h3>
        <p>
          L'integrazione sistematica delle soft skills nella formazione universitaria porta a un miglioramento della qualità della presa in carico del paziente, a una maggiore efficacia del lavoro interdisciplinare, al benessere professionale e alla prevenzione del burnout.
        </p>
      </section>

      <section className="info-section">
        <h3>Cos'è il lab?</h3>
        <p>
Luogo in cui potrai conoscere e sviluppare le tue competenze trasversali attraverso attività interattive e questionari.
Le soft skills sono suddivise in quattro aree. 
        </p>
      </section>
  
      <div id="glossario-skills" style={{ textAlign: 'center', margin: '4rem 0 2rem 0' }}>

        <p style={{ color: '#4a5568' }}>Passa il cursore sulle carte per leggere le definizioni.</p>
      </div>
          {/* 4. GRIGLIA DELLE AREE (Sostituisce il vecchio glossario) */}
        <section className="areas-grid-container">
         <div className="skills-grid">
        <article className="skill-card" >
          <div className="skill-card-inner">
            <div className="skill-card-front" style={{backgroundColor:"#A14128",color:"white"}}>
              <h4><b>AREA DEL COMPITO</b></h4>
            </div>
            <div className="skill-card-back" style={{backgroundColor:"#A14128",color:"white"}}>
              <p>Include quelle abilità che sono legate al modo in cui il soggetto affronta e gestisce i problemi e la presa di decisione, insieme a modalità di programmazione e organizzazione del lavoro e del tempo.</p>
            </div>
          </div>
        </article>
           <article className="skill-card">
          <div className="skill-card-inner">
            <div className="skill-card-front" style={{backgroundColor:"#ECA93C",color:"white"}}>
              <h4><b>AREA DEL SE'</b></h4>
            </div>
            <div className="skill-card-back" style={{backgroundColor:"#ECA93C",color:"white"}}>
              <p>Comprende abilità legate alla capacità del soggetto di valorizzarsi, conoscersi e accettarsi sapendo riconoscere le proprie capacità e limiti, oltre alla capacità di gestione e regolazione delle emozioni.</p>
            </div>
          </div>
        </article>
        
        </div>
         <div className="skills-grid">
        <article className="skill-card">
          <div className="skill-card-inner">
            <div className="skill-card-front" style={{backgroundColor:"#A1BDC3",color:"white"}}>
              <h4><b>AREA MOTIVAZIONALE</b></h4>
            </div>
            <div className="skill-card-back" style={{backgroundColor:"#A1BDC3",color:"white"}}>
              <p>Include skills che sono connesse al conseguimento dell’obiettivo, al modo in cui i soggetti danno senso alla propria esperienza ed interpretano le cose che accadono loro, oltre ad aspetti legati alla
capacità di reagire e resistere alle situazioni stressanti. 
</p>
            </div>
          </div>
        </article>
           <article className="skill-card">
          <div className="skill-card-inner">
            <div className="skill-card-front" style={{backgroundColor:"#DEBEB1",color:"white"}}>
              <h4>AREA DELLE RELAZIONI INTERPERSONALI</h4>
            </div>
            <div className="skill-card-back" style={{backgroundColor:"#DEBEB1",color:"white"}}>
              <p>Comprende abilità legate alla relazione con i pari e con le figure di responsabilità, e le strategie utilizzate per gestire e organizzare la comunicazione e affrontare le situazioni conflittuali che si generano abitualmente nelle attività che coinvolgono più persone.</p>
            </div>
          </div>
        </article>
        
        </div>

        </section>

        {/* 5. PULSANTE FINALE (Nuovo) */}
        <section className="final-action">
          <a href="/lab" className="btn-vai-lab">VAI AL LAB</a>
        </section>
 </>
  );
};

export { Home };