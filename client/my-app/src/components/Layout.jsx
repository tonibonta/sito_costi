import {Navigation} from './Navigation'
import {Home} from './Home'
import { Dashboard } from './Dashboard';
import {GestioneTempo} from './GestioneTempo';
import {ProblemSolving} from './ProblemSolving';
import { AutoregolazioneEmotiva } from './AutoregolazioneEmotiva';
import { ValorizzazioneDiSe } from './ValorizzazioneDiSe';
import { OrientamentoObiettivo } from './OrientamentoObiettivo';
import { Intraprendenza } from './Intraprendenza';
import { AttribuzioneCausale } from './AttribuzioneCausale';
import { Resilienza } from './Resilienza';
import { LavoriInGruppo } from './LavoriInGruppo';
import { Comunicazione } from './Comunicazione';
import { GestioneConflitto } from './GestioneConflitto';
import { Storico } from './Storico';
import { Loginform } from './Loginform';
import { Link, useLocation } from 'react-router';
import { useEffect } from 'react';
import { Bibliografia } from './Bibliografia';



function Home_layout(props){
return(
    <>
 
    <Navigation user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    <main className="fade-in">
    <Home user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
          <Link to="/bibliografia">bibliografia</Link>
       

      </footer>

    </>);

}

function Dashboard_layout(props){
return(
    <>
 
    <Navigation user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    <main className="fade-in">
    <Dashboard user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
          <Link to="/bibliografia">bibliografia</Link>
      </footer>

    </>);

}


function GestioneTempo_layout(props){
return(
    <>
 
    <Navigation user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    <main className="fade-in">
   
    <GestioneTempo user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
          <Link to="/bibliografia">bibliografia</Link>
      </footer>

    </>);

}
function ProblemSolving_layout(props){
return(
    <>
 
    <Navigation user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    <main className="fade-in">
   
    <ProblemSolving user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
          <Link to="/bibliografia">bibliografia</Link>
      </footer>

    </>);

}

function AutoregolazioneEmotiva_layout(props){
return(
    <>
 
    <Navigation user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    <main className="fade-in">
   
    <AutoregolazioneEmotiva user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
          <Link to="/bibliografia">bibliografia</Link>
      </footer>

    </>);

}
function ValorizzazioneDiSe_layout(props){
return(
    <>
 
    <Navigation user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    <main className="fade-in">
   
    <ValorizzazioneDiSe user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
          <Link to="/bibliografia">bibliografia</Link>
      </footer>

    </>);

}
function OrientamentoObiettivo_layout(props){
return(
    <>
 
    <Navigation user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    <main className="fade-in">
   
    <OrientamentoObiettivo user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
          <Link to="/bibliografia">bibliografia</Link>
      </footer>

    </>);

}
function Intraprendenza_layout(props){
return(
    <>
 
    <Navigation user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    <main className="fade-in">
   
    <Intraprendenza user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
          <Link to="/bibliografia">bibliografia</Link>
      </footer>

    </>);

}
function AttribuzioneCausale_layout(props){
return(
    <>
 
    <Navigation user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    <main className="fade-in">
   
    <AttribuzioneCausale user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
          <Link to="/bibliografia">bibliografia</Link>
      </footer>

    </>);

}
function Resilienza_layout(props){
return(
    <>
 
    <Navigation user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    <main className="fade-in">
   
    <Resilienza user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
          <Link to="/bibliografia">bibliografia</Link>
      </footer>

    </>);

}
function LavoriInGruppo_layout(props){
return(
    <>
 
    <Navigation user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    <main className="fade-in">
   
    <LavoriInGruppo user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>  <Link to="/bibliografia">bibliografia</Link>
      </footer>

    </>);

}

function Comunicazione_layout(props){
return(
    <>
 
    <Navigation user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    <main className="fade-in">
   
    <Comunicazione user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
          <Link to="/bibliografia">bibliografia</Link>
      </footer>

    </>);

}

function GestioneConflitti_layout(props){
return(
    <>
 
    <Navigation user={props.user} loggedIn={props.loggedIn} logOut={props.handleLogout}/>
    <main className="fade-in">
   
    <GestioneConflitto user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
          <Link to="/bibliografia">bibliografia</Link>
      </footer>

    </>);

}



function Storico_layout(props){
  const location=useLocation()
useEffect(() => {
  window.scrollTo(-50, 0);
}, [location.pathname]);

return(
    <>
 
    <Navigation user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    <main className="fade-in">
      
   <Dashboard user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    <Storico user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
          <Link to="/bibliografia">bibliografia</Link>
      </footer>

    </>);

}

function PageNotFound(){
  return(
    <h1>PAGE NOT FOUND</h1>
  );
}


function LoginLayout(props){
  return(
    <>
     <Navigation user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    <main className="fade-in">
   
        <Loginform login={props.login} logout={props.logout}/>

    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
          <Link to="/bibliografia">bibliografia</Link>
      </footer>
    
    </>
  );

}

function BibliografiaLayout(props){
  return(
    <>
     <Navigation user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>
    <main className="fade-in">
   
        <Bibliografia user={props.user} loggedIn={props.loggedIn}logOut={props.handleLogout}/>

    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
        <Link to="/bibliografia">bibliografia</Link>
      </footer>
    
    </>
  );

}

export {Home_layout,Dashboard_layout,GestioneTempo_layout,
        ProblemSolving_layout,AutoregolazioneEmotiva_layout,ValorizzazioneDiSe_layout,OrientamentoObiettivo_layout,
        Intraprendenza_layout,AttribuzioneCausale_layout,Resilienza_layout,
        LavoriInGruppo_layout,Comunicazione_layout,GestioneConflitti_layout,Storico_layout,LoginLayout,PageNotFound,BibliografiaLayout

}