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

      
       
          

        
          <div className="profile-main">
            <div className="profile-card">
              <h3 className="card-title">Dati Personali</h3>
              
              {/* Il form per ora mantiene action e method per struttura */}
              <form className="profile-form">
                
             

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
    </>
  );
};

export { Dashboard};