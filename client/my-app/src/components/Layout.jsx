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



function Home_layout(props){
return(
    <>
 
    <Navigation/>
    <main class="fade-in">
    <Home/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
      </footer>

    </>);

}

function Dashboard_layout(props){
return(
    <>
 
    <Navigation/>
    <main class="fade-in">
    <Dashboard/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
      </footer>

    </>);

}


function GestioneTempo_layout(props){
return(
    <>
 
    <Navigation/>
    <main class="fade-in">
   
    <GestioneTempo/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
      </footer>

    </>);

}
function ProblemSolving_layout(props){
return(
    <>
 
    <Navigation/>
    <main class="fade-in">
   
    <ProblemSolving/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
      </footer>

    </>);

}

function AutoregolazioneEmotiva_layout(props){
return(
    <>
 
    <Navigation/>
    <main class="fade-in">
   
    <AutoregolazioneEmotiva/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
      </footer>

    </>);

}
function ValorizzazioneDiSe_layout(props){
return(
    <>
 
    <Navigation/>
    <main class="fade-in">
   
    <ValorizzazioneDiSe/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
      </footer>

    </>);

}
function OrientamentoObiettivo_layout(props){
return(
    <>
 
    <Navigation/>
    <main class="fade-in">
   
    <OrientamentoObiettivo/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
      </footer>

    </>);

}
function Intraprendenza_layout(props){
return(
    <>
 
    <Navigation/>
    <main class="fade-in">
   
    <Intraprendenza/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
      </footer>

    </>);

}
function AttribuzioneCausale_layout(props){
return(
    <>
 
    <Navigation/>
    <main class="fade-in">
   
    <AttribuzioneCausale/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
      </footer>

    </>);

}
function Resilienza_layout(props){
return(
    <>
 
    <Navigation/>
    <main class="fade-in">
   
    <Resilienza/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
      </footer>

    </>);

}
function LavoriInGruppo_layout(props){
return(
    <>
 
    <Navigation/>
    <main class="fade-in">
   
    <LavoriInGruppo/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
      </footer>

    </>);

}

function Comunicazione_layout(props){
return(
    <>
 
    <Navigation/>
    <main class="fade-in">
   
    <Comunicazione/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
      </footer>

    </>);

}

function GestioneConflitti_layout(props){
return(
    <>
 
    <Navigation/>
    <main class="fade-in">
   
    <GestioneConflitto/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
      </footer>

    </>);

}



function Storico_layout(props){
return(
    <>
 
    <Navigation/>
    <main class="fade-in">
   
    <Storico/>
    </main>
       <footer>
        <p>&copy; 2024 Progetto Soft Skills - Professioni Sanitarie Riabilitative Università di Torino.</p>
      </footer>

    </>);

}



export {Home_layout,Dashboard_layout,GestioneTempo_layout,
        ProblemSolving_layout,AutoregolazioneEmotiva_layout,ValorizzazioneDiSe_layout,OrientamentoObiettivo_layout,
        Intraprendenza_layout,AttribuzioneCausale_layout,Resilienza_layout,
        LavoriInGruppo_layout,Comunicazione_layout,GestioneConflitti_layout,Storico_layout

}