import React, { useEffect,useState} from 'react';



const Dashboard = (props) => {

  const [selezione,setSelezione]=useState('dati_personali');
  // Imposta il titolo della scheda del browser
  useEffect(() => {
    document.title = "Profilo Utente - Soft Skills Rehab UniTo";
  }, []);

  return (
    <>
      <div className="profile-wrapper fade-in">
        
        {/* Intestazione della pagina Profilo */}
        <div className="profile-header-banner">
          <h2>Il Tuo Profilo Personale</h2>
          <p>Gestisci le tue informazioni e monitora i tuoi progressi nel percorso formativo.</p>
        </div>

        <div className="profile-grid">
          
          {/* Colonna Sinistra: Card Utente e Progressi */}
          <div className="profile-sidebar">
            <div className="profile-card user-info-card">
              <div className="avatar-container">
                {/* Immagine con tag di chiusura */}
                <img 
                  src={"https://ui-avatars.com/api/?name="+props.user.name+"+"+props.user.surname+"+&background=2b6cb0&color=fff&size=120"} 
                  alt="Avatar Utente" 
                  className="avatar" 
                />
              </div>
              <h3>{props.user.name} {props.user.surname}</h3>
              <p className="user-role">Studente - {props.user.course}</p>
              <p className="user-id">Email: <strong>{props.user.email}</strong></p>
              <button className="badge">Dati personali</button>
       
              
            </div>
          </div>
          

          {/* Colonna Destra: Form di Modifica Dati */}
          <div className="profile-main">
            <div className="profile-card">
              <h3 className="card-title">Dati Personali</h3>
              
              {/* Il form per ora mantiene action e method per struttura */}
              <form action="#" method="POST" className="profile-form">
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" name="nome" defaultValue={props.user.name} disabled={true} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cognome">Cognome</label>
                    <input type="text" id="cognome" name="cognome" defaultValue={props.user.surname} disabled={true} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Istituzionale</label>
                    <input type="email" id="email" name="email" defaultValue={props.user.email} disabled={true} />
                  </div>
                    <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Corso</label>
                    <input type="corso" id="corso" name="corso" defaultValue={props.user.course} disabled={true} />
                  </div>
                  </div>
                </div>

                

              
              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export { Dashboard};