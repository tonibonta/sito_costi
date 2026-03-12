import React, { useEffect } from 'react';
import '../App.css'
const Home = () => {
  // Imposta il titolo della scheda del browser quando il componente viene caricato
  useEffect(() => {
    document.title = "Home - Soft Skills Rehab UniTo";
  }, []);

  return (
    <>
      <section className="hero">
        <h2>Sviluppa le tue Competenze Trasversali</h2>
        <a href="#glossario-skills" className="btn">Scopri le Soft Skills</a>
      </section>

      <section className="info-section">
        <h3>Cosa sono le Soft Skills?</h3>
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
  
      <div id="glossario-skills" style={{ textAlign: 'center', margin: '4rem 0 2rem 0' }}>
        <h2 style={{ color: 'var(--primary-color)', fontSize: '2rem' }}>Il Glossario delle Competenze</h2>
        <p style={{ color: '#4a5568' }}>Passa il cursore sulle carte per leggere le definizioni.</p>
      </div>

      {/* Griglia delle Flip Cards 3D */}
      <div className="skills-grid">
        <article className="skill-card">
          <div className="skill-card-inner">
            <div className="skill-card-front">
              <h4>Gestione del tempo (Time Management)</h4>
            </div>
            <div className="skill-card-back">
              <p>Capacità di pianificare, organizzare e gestire efficacemente il tempo, per conseguire i propri obiettivi.</p>
            </div>
          </div>
        </article>

        <article className="skill-card">
          <div className="skill-card-inner">
            <div className="skill-card-front">
              <h4>Problem solving e decision making</h4>
            </div>
            <div className="skill-card-back">
              <p>
                Capacità di identificare e definire adeguatamente il problema, nelle sue diverse
                dimensioni (comprensione), approfondendo la situazione e raccogliendo le
                informazioni necessarie, per poi individuare possibili soluzioni (ragionamento), cercando di guardare il problema in modo flessibile da più punti di vista (creatività).
              </p>
            </div>
          </div>
        </article>

        <article className="skill-card">
          <div className="skill-card-inner">
            <div className="skill-card-front">
              <h4>Adozione di strategie adeguate nell’affrontare il compito</h4>
            </div>
            <div className="skill-card-back">
              <p>Capacità di scegliere lo strumento giusto per affrontare un compito specifico.</p>
            </div>
          </div>
        </article>

        <article className="skill-card">
          <div className="skill-card-inner">
            <div className="skill-card-front">
              <h4>Autoregolazione emotiva (consapevolezza emotiva e tolleranza di ansia e stress)</h4>
            </div>
            <div className="skill-card-back">
              <p>Capacità di contenere le proprie reazioni di fronte a stimoli esterni ed interni di forte intensità, sia positivi sia negativi, evitando comportamenti non controllati.</p>
            </div>
          </div>
        </article>

        <article className="skill-card">
          <div className="skill-card-inner">
            <div className="skill-card-front">
              <h4>Valorizzazione di sé (Autostima)</h4>
            </div>
            <div className="skill-card-back">
              <p>E’ l’esito di un processo complesso che prevede la valutazione di sé, il confronto tra sé percepito e sé ideale e il conseguente giudizio che il soggetto esprime su di sé.</p>
            </div>
          </div>
        </article>

        <article className="skill-card">
          <div className="skill-card-inner">
            <div className="skill-card-front">
              <h4>Orientamento all'obiettivo</h4>
            </div>
            <div className="skill-card-back">
              <p>Capacità di focalizzare l’attenzione e le risorse cognitive ed emotive per il raggiungimento dei propri scopi.</p>
            </div>
          </div>
        </article>

        <article className="skill-card">
          <div className="skill-card-inner">
            <div className="skill-card-front">
              <h4>Intraprendenza</h4>
            </div>
            <div className="skill-card-back">
              <p>Capacità di agire in autonomia, spirito d'iniziativa e propensione a proporre soluzioni innovative o proattive nel contesto professionale.</p>
            </div>
          </div>
        </article>

        <article className="skill-card">
          <div className="skill-card-inner">
            <div className="skill-card-front">
              <h4>Attribuzione causale interna in caso di successo/insuccesso</h4>
            </div>
            <div className="skill-card-back">
              <p>
                Il processo in base al quale il soggetto procede a spiegare la causa del
                comportamento proprio e altrui, ad attribuire la causa di ciò che accade (in
                situazione di successo o insuccesso), ricercandola tra fattori interni o esterni e
                tra cause removibili o permanenti.
              </p>
            </div>
          </div>
        </article>

        <article className="skill-card">
          <div className="skill-card-inner">
            <div className="skill-card-front">
              <h4>Resilienza</h4>
            </div>
            <div className="skill-card-back">
              <p>Capacità di affrontare eventi stressanti o difficoltosi, riorganizzando in maniera positiva la propria vita.</p>
            </div>
          </div>
        </article>

        <article className="skill-card">
          <div className="skill-card-inner">
            <div className="skill-card-front">
              <h4>Lavoro in Gruppo (Teamwork)</h4>
            </div>
            <div className="skill-card-back">
              <p>Collaborare efficacemente all’interno dei gruppi di studio e di lavoro, perseguendo obiettivi comuni.</p>
            </div>
          </div>
        </article>

        <article className="skill-card">
          <div className="skill-card-inner">
            <div className="skill-card-front">
              <h4>Comunicazione</h4>
            </div>
            <div className="skill-card-back">
              <p>
                L’utilizzo di strategie per trasmettere informazioni in modo efficace a tutti i livelli, sia in forma orale che scritta, curando la chiarezza, la sintesi, la quantità e la qualità delle informazioni, l’adeguatezza dei messaggi, nonché l’ascolto attivo dell’altro nelle interazioni.
              </p>
            </div>
          </div>
        </article>

        <article className="skill-card">
          <div className="skill-card-inner">
            <div className="skill-card-front">
              <h4>Gestione del Conflitto</h4>
            </div>
            <div className="skill-card-back">
              <p>Saper trovare le strategie efficaci per far fronte alle divergenze di opinioni che caratterizzano il lavoro in gruppo.</p>
            </div>
          </div>
        </article>
      </div>
 </>
  );
};

export { Home };