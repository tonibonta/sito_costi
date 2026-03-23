import React, { useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router';



const Lab = (props) => {
  useEffect(() => {
    document.title = "Lab - Soft Skills Rehab UniTo";
    setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
  }, []);

  return (
    <>
          <div className="profile-header-banner">
          <h2>IL LAB</h2>
          <p>              Qui troverai tutte le attività interattive che potrai svolgere per potenziare e sviluppare le soft skills
</p>
        </div>



  
       <section className="info-section" style={{marginTop:"100px"}}>
        <h3 style={{color:"#a14128"}}>AREA DEL COMPITO</h3>
        <p>
Include quelle abilità che sono legate al modo in cui il soggetto affronta e gestisce i problemi e la presa di decisione, insieme a modalità di programmazione e organizzazione del lavoro e del tempo.
        </p>

         <section className="info-section" style={{marginTop:"20px",}}>
        <h3 >Gestione del tempo</h3>
        <p>
Capacità di pianificare, organizzare e gestire efficacemente il tempo, per conseguire i propri obiettivi.        </p>
         <Link to="/gestione-tempo" className="btn btn-outline-primary btn-sm" style={{ backgroundColor: "transparent", color:"var(--primary-color)", boxShadow: "none" }}>
                  Vai alle attività
                </Link>
      </section>
         <section className="info-section" style={{marginTop:"20px",}}>
        <h3 >Problem solving</h3>
        <p>
Capacità di identificare e definire adeguatamente il problema, nelle sue diverse dimensioni (comprensione), approfondendo la situazione e raccogliendo le informazioni necessarie, per poi individuare possibili soluzioni (ragionamento), cercando di guardare il problema in modo flessibile da più punti di vista (creatività).
     
        </p>
    

     <h3 style={{marginTop:"35px"}} >Adozione di strategie adeguate nell'affrontare il compito</h3>
        <p>
Capacità di scegliere lo strumento giusto per affrontare un compito specifico. 
     
        </p>
        <Link to="/problem-solving" className="btn btn-outline-primary btn-sm" style={{ backgroundColor: "transparent", color:"var(--primary-color)", boxShadow: "none" }}>
                  Vai alle attività
                </Link>
      </section>
         
      </section>
      <section className="info-section" style={{marginTop:"100px"}}>
        <h3 style={{color:"#eca93c"}}>AREA DEL SE'</h3>
        <p>
Comprende abilità legate alla capacità del soggetto di valorizzarsi, conoscersi e accettarsi sapendo riconoscere le proprie capacità e limiti, oltre alla capacità di gestione e regolazione delle emozioni.
        </p>

         <section className="info-section" style={{marginTop:"20px",}}>
        <h3 >Valorizzazione di sè (autostima)</h3>
        <p>
E’ l’esito di un processo complesso che prevede la valutazione di sé, il confronto tra sé percepito e sé ideale e il conseguente giudizio che il soggetto esprime su di sé.      </p>
         <Link to="/valorizzazione-di-se" className="btn btn-outline-primary btn-sm" style={{ backgroundColor: "transparent", color:"var(--primary-color)", boxShadow: "none" }}>
                  Vai alle attività
                </Link>
      </section>
         <section className="info-section" style={{marginTop:"20px",}}>
        <h3 >Autoregolazione emotiva (tolleranza di ansia e stress volezza emotiva)</h3>
        <p>
Capacità di contenere le proprie reazioni di fronte a stimoli esterni ed interni di forte Intensità, sia positivi sia negativi, evitando comportamenti non controllati.      
        </p>
        <Link to="/autoregolazione-emotiva" className="btn btn-outline-primary btn-sm" style={{ backgroundColor: "transparent", color:"var(--primary-color)", boxShadow: "none" }}>
                  Vai alle attività
                </Link>
      </section>
          <section className="info-section" style={{marginTop:"20px",}}>
        <h3 >Intraprendenza</h3>
        <p>
Capacità di agire in autonomia, spirito d'iniziativa e propensione a proporre soluzioni
innovative o proattive nel contesto professionale.
     
        </p>
        <Link to="/intraprendenza" className="btn btn-outline-primary btn-sm" style={{ backgroundColor: "transparent", color:"var(--primary-color)", boxShadow: "none" }}>
                  Vai alle attività
                </Link>
      </section>
      </section>
      <section className="info-section" style={{marginTop:"100px"}}>
        <h3 style={{color:"#a1bdc3"}}>AREA MOTIVAZIONALE</h3>
        <p>
Include skills che sono connesse al conseguimento dell’obiettivo, al modo in cui i soggetti danno senso alla propria esperienza ed interpretano le cose che accadono loro, oltre ad aspetti legati alla capacità di reagire e resistere alle situazioni stressanti.
        </p>

         <section className="info-section" style={{marginTop:"20px",}}>
        <h3 >Orientamento all'obiettivo</h3>
        <p>
Capacità di focalizzare l’attenzione e le risorse cognitive ed emotive per il raggiungimento
dei propri scopi.
     </p>
         <Link to="/orientamento-obiettivo" className="btn btn-outline-primary btn-sm" style={{ backgroundColor: "transparent", color:"var(--primary-color)", boxShadow: "none" }}>
                  Vai alle attività
                </Link>
      </section>
         <section className="info-section" style={{marginTop:"20px",}}>
        <h3 >Attribuzione causale interna in caso di successo/insuccesso</h3>
        <p>
Il processo in base al quale il soggetto procede a spiegare la causa del comportamento proprio e altrui, ad attribuire la causa di ciò che accade (in situazione di successo o insuccesso), ricercandola tra fattori interni o esterni e tra cause removibili o permanenti.     
        </p>
        <Link to="/attribuzione-causale" className="btn btn-outline-primary btn-sm" style={{ backgroundColor: "transparent", color:"var(--primary-color)", boxShadow: "none" }}>
                  Vai alle attività
                </Link>
      </section>
          <section className="info-section" style={{marginTop:"20px",}}>
        <h3 >Resilienza</h3>
        <p>
Capacità di affrontare eventi stressanti o difficoltosi, riorganizzando in maniera positiva la propria vita.     
        </p>
        <Link to="/resilienza" className="btn btn-outline-primary btn-sm" style={{ backgroundColor: "transparent", color:"var(--primary-color)", boxShadow: "none" }}>
                  Vai alle attività
                </Link>
      </section>
      </section>
      <section className="info-section" style={{marginTop:"100px"}}>
        <h3 style={{color:"#debeb1"}}>AREA DELLE RELAZIONI INTERPERSONALI</h3>
        <p>
Comprende abilità legate alla relazione con i pari e con le figure di responsabilità, e le strategie utilizzate per gestire e organizzare la comunicazione e affrontare le situazioni conflittuali che si generano abitualmente nelle attività che coinvolgono più persone.
        </p>

         <section className="info-section" style={{marginTop:"20px",}}>
        <h3 >Lavoro in gruppo</h3>
        <p>
Collaborare efficacemente all’interno dei gruppi di studio e di lavoro, perseguendo obiettivi comuni.      </p>
         <Link to="/lavoro-in-gruppo" className="btn btn-outline-primary btn-sm" style={{ backgroundColor: "transparent", color:"var(--primary-color)", boxShadow: "none" }}>
                  Vai alle attività
                </Link>
      </section>
         <section className="info-section" style={{marginTop:"20px",}}>
        <h3 >Comunicazione</h3>
        <p>
L’utilizzo di strategie per trasmettere informazioni in modo efficace a tutti i livelli, sia in forma orale che scritta, curando la chiarezza, la sintesi, la quantità e la qualità delle informazioni, l’adeguatezza dei messaggi, nonché l’ascolto attivo dell’altro nelle interazioni.     
        </p>
        <Link to="/comunicazione" className="btn btn-outline-primary btn-sm" style={{ backgroundColor: "transparent", color:"var(--primary-color)", boxShadow: "none" }}>
                  Vai alle attività
                </Link>
      </section>
          <section className="info-section" style={{marginTop:"20px",}}>
        <h3 >Gestione del conflitto</h3>
        <p>
Saper trovare le strategie efficaci per far fronte alle divergenze di opinioni che caratterizzano il lavoro in gruppo.     
        </p>
        <Link to="/gestione-conflitto" className="btn btn-outline-primary btn-sm" style={{ backgroundColor: "transparent", color:"var(--primary-color)", boxShadow: "none" }}>
                  Vai alle attività
                </Link>
      </section>
      </section>


     


    </>
  );
};

export { Lab };