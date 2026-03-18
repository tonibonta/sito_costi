import { useState,useEffect } from 'react'
import { Home_layout,Dashboard_layout, GestioneTempo_layout, 
  ProblemSolving_layout, AutoregolazioneEmotiva_layout, 
  ValorizzazioneDiSe_layout, OrientamentoObiettivo_layout,
   Intraprendenza_layout, AttribuzioneCausale_layout, Resilienza_layout,
    LavoriInGruppo_layout, 
    Comunicazione_layout,
    GestioneConflitti_layout,
    Storico_layout,LoginLayout,PageNotFound} from './components/Layout'

import {Routes ,Route,useLocation ,useNavigate,Navigate } from 'react-router'
import './App.css'
import API from './components/API'
function App() {
   const [loggedIn, setLoggedIn] = useState(false);
  
  // This state contains the user's info.
  const [user, setUser] = useState(null);
  const navigate=useNavigate();
 const location=useLocation();
 useEffect(()=> {
  const checkAuth = async() => {
    try {
      // here you have the user info, if already logged in
      const user = await API.getUserInfo();
      if(user.error){
        setLoggedIn(false);
      }else{
      setLoggedIn(true);
      setUser(user);
      }
    } catch(err) {
    }
  };
  checkAuth();
      

}, []); 
const handleLogin = async (credentials) => {
  try {
  
    const user = await API.logIn(credentials);
    if(!user.error){
    setUser(user);

    setLoggedIn(true);
  return "correct";
}else{
      return "incorrect;"
    }

  } catch (err) {
    // error is handled and visualized in the login form, do not manage error, throw it
    throw err;
  }
};

/**
 * This function handles the logout process.
 */ 
const handleLogout = async () => {

  await API.logOut();
  setLoggedIn(false);
  // clean up everything
  setUser(null);

};
  

  return (
    <>

    <Routes>
      <Route path='/' element={loggedIn?
        <Home_layout user={user} loggedIn={loggedIn} handleLogout={handleLogout} />:<LoginLayout loggedIn={loggedIn} login={handleLogin}
                                        user={user}/>
      }></Route>
      
       <Route path='/gestione-tempo' element={loggedIn?
        <GestioneTempo_layout user={user} loggedIn={loggedIn} handleLogout={handleLogout} />:<LoginLayout loggedIn={loggedIn} login={handleLogin}
                                        user={user}/>
      }></Route>

       <Route path='/problem-solving' element={loggedIn?
        <ProblemSolving_layout user={user} loggedIn={loggedIn} handleLogout={handleLogout} />:<LoginLayout loggedIn={loggedIn} login={handleLogin}
                                        user={user}/>
      }></Route>
       <Route path='/autoregolazione-emotiva' element={loggedIn?
        <AutoregolazioneEmotiva_layout user={user} loggedIn={loggedIn} handleLogout={handleLogout} />:<LoginLayout loggedIn={loggedIn} login={handleLogin}
                                        user={user}/>
      }></Route>
        <Route path='/valorizzazione-di-se' element={loggedIn?
        <ValorizzazioneDiSe_layout user={user} loggedIn={loggedIn} handleLogout={handleLogout} />:<LoginLayout loggedIn={loggedIn} login={handleLogin}
                                        user={user}/>
      }></Route>
        <Route path='/orientamento-obiettivo' element={loggedIn?
        <OrientamentoObiettivo_layout user={user} loggedIn={loggedIn} handleLogout={handleLogout} />:<LoginLayout loggedIn={loggedIn} login={handleLogin}
                                        user={user}/>
      }></Route>
        <Route path='/intraprendenza' element={loggedIn?
        <Intraprendenza_layout user={user} loggedIn={loggedIn} handleLogout={handleLogout} />:<LoginLayout loggedIn={loggedIn} login={handleLogin}
                                        user={user}/>
      }></Route>
        <Route path='/attribuzione-causale' element={loggedIn?
        <AttribuzioneCausale_layout user={user} loggedIn={loggedIn} handleLogout={handleLogout} />:<LoginLayout loggedIn={loggedIn} login={handleLogin}
                                        user={user}/>
      }></Route>
       <Route path='/dashboard' element={loggedIn?
        <Dashboard_layout user={user} loggedIn={loggedIn} handleLogout={handleLogout} />:<LoginLayout loggedIn={loggedIn} login={handleLogin}
                                        user={user}/>
      }></Route>
  
         <Route path='/resilienza' element={loggedIn?
        <Resilienza_layout user={user} loggedIn={loggedIn} handleLogout={handleLogout} />:<LoginLayout loggedIn={loggedIn} login={handleLogin}
                                        user={user}/>
      }></Route>
        <Route path='/lavoriingruppo' element={loggedIn?
        <LavoriInGruppo_layout user={user} loggedIn={loggedIn} handleLogout={handleLogout} />:<LoginLayout loggedIn={loggedIn} login={handleLogin}
                                        user={user}/>
      }></Route>
       <Route path='/comunicazione'element={loggedIn?
        <Comunicazione_layout user={user} loggedIn={loggedIn} handleLogout={handleLogout} />:<LoginLayout loggedIn={loggedIn} login={handleLogin}
                                        user={user}/>
      }></Route>
       <Route path='/gestioneconflitto' element={loggedIn?
        <GestioneConflitti_layout user={user} loggedIn={loggedIn} handleLogout={handleLogout} />:<LoginLayout loggedIn={loggedIn} login={handleLogin}
                                        user={user}/>
      }></Route>
 
       <Route path='/storico' element={loggedIn?
        <Storico_layout user={user} loggedIn={loggedIn} handleLogout={handleLogout} />:<LoginLayout loggedIn={loggedIn} login={handleLogin}
                                        user={user}/>
      }></Route>
      <Route path='/login' element={
        <LoginLayout loggedIn={loggedIn} login={handleLogin}
                                        user={user}/>
      }></Route>
      <Route path='*' element={
        <PageNotFound loggedIn={loggedIn} login={handleLogin}
                                        user={user}/>
      }></Route>
      
      

    </Routes>

     
    </>
  )
}

export default App
