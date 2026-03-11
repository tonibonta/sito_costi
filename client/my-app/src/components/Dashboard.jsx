import React, { useEffect,useState} from 'react';



const Dashboard = () => {

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
                  src="https://ui-avatars.com/api/?name=Mario+Rossi&background=2b6cb0&color=fff&size=120" 
                  alt="Avatar Utente" 
                  className="avatar" 
                />
              </div>
              <h3>Mario Rossi</h3>
              <p className="user-role">Studente - Fisioterapia</p>
              <p className="user-id">Matricola: <strong>876543</strong></p>
              <button className="badge">Dati personali</button>
       
              <hr className="divider" />

              <div className="badges-section">
                <h4>Attività</h4>
                <div className="badges-container">
                  <button className="badge">Gestione tempo</button>
                  <button className="badge">Problem Solving</button>
                  <button className="badge">Autoregolazione emotiva</button>
                  <button className="badge">Valorizzazione di sè</button>
                  <button className="badge">Orientamento all'obiettivo</button>
         


                </div>
              </div>
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
                    <input type="text" id="nome" name="nome" defaultValue="Mario" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cognome">Cognome</label>
                    <input type="text" id="cognome" name="cognome" defaultValue="Rossi" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Istituzionale</label>
                    <input type="email" id="email" name="email" defaultValue="mario.rossi@edu.unito.it" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="corso">Corso di Laurea</label>
                    {/* Il defaultValue in React va sul tag select, non sulle singole option */}
                    <select id="corso" name="corso" defaultValue="fisioterapia">
                      <option value="fisioterapia">Fisioterapia</option>
                      <option value="logopedia">Logopedia</option>
                      <option value="infermieristica">Infermieristica</option>
                      <option value="tecniche_riabilitazione">Tecniche della Riabilitazione Psichiatrica</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="bio">Breve Presentazione (Bio)</label>
                  <textarea 
                    id="bio" 
                    name="bio" 
                    rows="4" 
                    placeholder="Scrivi qualcosa su di te e sui tuoi obiettivi professionali..."
                  ></textarea>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">Salva Modifiche</button>
                  <button type="button" className="btn btn-secondary">Cambia Password</button>
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