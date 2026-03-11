import { useState } from 'react'
import { Home_layout,Dashboard_layout, GestioneTempo_layout, ProblemSolving_layout, AutoregolazioneEmotiva_layout, ValorizzazioneDiSe_layout, OrientamentoObiettivo_layout, Intraprendenza_layout, AttribuzioneCausale_layout } from './components/Layout'

import {Routes ,Route,useLocation ,useNavigate,Navigate } from 'react-router'
import './App.css'
function App() {
  

  return (
    <>

    <Routes>
      <Route path='/' element={
        <Home_layout/>
      }></Route>
      
       <Route path='/gestione-tempo' element={
        <GestioneTempo_layout/>
      }></Route>

       <Route path='/problem-solving' element={
        <ProblemSolving_layout/>
      }></Route>
       <Route path='/autoregolazione-emotiva' element={
        <AutoregolazioneEmotiva_layout/>
      }></Route>
        <Route path='/valorizzazione-di-se' element={
        <ValorizzazioneDiSe_layout/>
      }></Route>
        <Route path='/orientamento-obiettivo' element={
        <OrientamentoObiettivo_layout/>
      }></Route>
        <Route path='/intraprendenza' element={
        <Intraprendenza_layout/>
      }></Route>
        <Route path='/attribuzione-causale' element={
        <AttribuzioneCausale_layout/>
      }></Route>
       <Route path='/dashboard' element={
        <Dashboard_layout/>
      }></Route>
       <Route path='/' element={
        <Home_layout/>
      }></Route>
      

    </Routes>

     
    </>
  )
}

export default App
