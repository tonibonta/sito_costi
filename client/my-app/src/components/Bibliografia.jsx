import React, { useEffect } from 'react';
import '../App.css';

// Unico array piatto contenente solo i testi, senza link o categorie
const bibliografiaData = [
  "Toolkit Understanding My Journey, ",
  "Emanuel, F., Ricchiardi, P., & Ghislieri, C. (2022). PassportTest Uno strumento per rilevare le soft skill.",
  "Cinque Perché",
  "Serenis – Bassa autostima: sintomi, cause e come aumentarla",
  "Locke, E. A., & Latham, G. P. (1990). A theory of goal setting and task performance. Prentice Hall.",
  "Zimmerman, B. J. (2002). Becoming a self-regulated learner: An overview. Theory Into Practice, 41(2), 64–70.",
  "Bandura, A. (1997). Self-efficacy: The exercise of control. Freeman.",
  "Dweck, C. S. (2006). Mindset: The New Psychology of Success.",
  "Steel, P. (2007). The nature of procrastination: A meta-analytic and theoretical review. Psychological Bulletin, 133(1), 65–94.",
  "Tracy, B. (2001). Eat That Frog!: 21 Great Ways to Stop Procrastinating and Get More Done in Less Time.",
  "Walker, M. P. (2009). Why we sleep: Unlocking the power of sleep and dreams. Scribner.",
  "Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. Cognitive Science, 12, 257–285.",
  "Rott, B., Specht, B., & Knipping, C. (2021). A descriptive phase model of problem-solving processes.",
  "Gross, J. J. (2015). Emotion regulation: Current status and future prospects. Psychological Inquiry, 26(1), 1–26.",
  "Pennebaker, J. W. (1997). Writing about emotional experiences as a therapeutic process. Psychological Science, 8(3), 162–166.",
  "Weiner, B. (1985). An attributional theory of achievement motivation and emotion. Psychological Review.",
  "Benson, H. (1975). The Relaxation Response.",
  "Lehrer, P., & Woolfolk, R. L. (2007). Principles and Practice of Stress Management.",
  "Kabat-Zinn, J. (1990). Full Catastrophe Living.",
  "Creswell, J. D. (2017). Mindfulness interventions. Annual Review of Psychology, 68, 491–516.",
  "Carver, C. S. (1997). You want to measure coping but your protocol's too long: Consider the Brief COPE. International Journal of Behavioral Medicine, 4(1), 92–100.",
  "Biggs, A., Brough, P., & Drummond, S. (2017). Lazarus and Folkman's Psychological Stress and Coping Theory.",
  "Jones, A. (2019). The Tuckman's model implementation, effect, and analysis & the new development of Jones LSI model on a small group. Journal of Management.",
  "Sayadat, N. (2024). Review: The Thomas Kilmann Conflict Resolution Model – What Lesson for Organizational Conflict Management can be Drawn from this Model?"
];

const Bibliografia = () => {
  useEffect(() => {
    document.title = "Bibliografia - Soft Skills Rehab UniTo";
    setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
  }, []);

  return (
    <>
      <section className="hero">
        <h2>Bibliografia</h2>
        <a href="#bib-content" className="btn">Esplora le Fonti</a>
      </section>

      <section className="info-section">
        <h3>Fonti e Riferimenti Scientifici</h3>
        <p>
          Le risorse elencate di seguito costituiscono la base teorica e scientifica dei contenuti
          del percorso Soft Skills Rehab UniTo. I riferimenti spaziano dalla psicologia cognitiva
          alla gestione delle emozioni, dal lavoro di gruppo alla resilienza.
        </p>
      </section>

      <div id="bib-content" style={{ textAlign: 'center', margin: '4rem 0 2rem 0' }}>
        <h2 style={{ color: 'var(--primary-color)', fontSize: '2rem' }}>Tutti i Riferimenti</h2>
        <p style={{ color: '#4a5568' }}>Tutte le fonti utilizzate nella costruzione del progetto.</p>
      </div>

      <div className="bib-sections">
        {/* Unico blocco contenitore per tutti i testi */}
        <div className="bib-category">
          <ul className="bib-list">
            {bibliografiaData.map((itemTesto, i) => (
              <li key={i} className="bib-item">
                <span className="bib-bullet" aria-hidden="true">—</span>
                <span className="bib-text">
                  {itemTesto}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .bib-sections {
          max-width: 860px;
          margin: 0 auto 4rem auto;
          padding: 0 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .bib-category {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          padding: 2.5rem;
          border-left: 4px solid var(--primary-color);
          transition: box-shadow 0.2s ease;
        }

        .bib-category:hover {
          box-shadow: 0 6px 24px rgba(0,0,0,0.12);
        }

        .bib-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1.2rem; /* Leggermente aumentato il gap per dare respiro visto che è una lista lunga */
        }

        .bib-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          line-height: 1.65;
          color: #2d3748;
        }

        .bib-bullet {
          color: var(--primary-color);
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 0.05em;
        }

        .bib-text {
          flex: 1;
        }

        @media (max-width: 600px) {
          .bib-category {
            padding: 1.5rem 1rem;
          }
        }
      `}</style>
    </>
  );
};

export { Bibliografia };