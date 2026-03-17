import React, { useState, useEffect } from 'react';
import API from './API';
import { AutovalutazioneGestioneTempo } from './gestione_tempo_components/AutovalutazioneGestioneTempo';
import { ActionLearning } from './problem_solving/ActionLearning';
import { Biofeedback } from './autoregolazione_emotiva/Biofeedback';
import { ModelloSmart } from './gestione_tempo_components/ModelloSmart';
import { MatriceEisenhower } from './gestione_tempo_components/MatriceEisenhower';
import { TecnicaPomodoro } from './gestione_tempo_components/TecnicaPomodoro';
import { Procastinazione } from './gestione_tempo_components/Procastinazione';
import { Consigli } from './gestione_tempo_components/Consigli';
import { CinquePerche } from './problem_solving/CinquePerche';
import { AlberoProblemi } from './problem_solving/AlberoProblemi';
import { RisoluzionePassaggi } from './problem_solving/RisoluzionePassaggi';
import { DiarioEmotivo } from './autoregolazione_emotiva/DiarioEmotivo';
import { Coping } from './autoregolazione_emotiva/Coping';
import { CopingStrategie } from './autoregolazione_emotiva/CopingStrategie';
import { DigitalJournaling } from './valorizzazionedise/DigitalJournaling';
import { GoalSetter } from './orientamentoobiettivo/GoalSetter';
import { GestioneConflitto } from './GestioneConflitto';
import { SfideGiornaliere } from './resilienza/SfideGiornaliere';

const Storico = () => {
  // Stato per gestire l'apertura delle MACRO-CATEGORIE (Livello 1)
  const [categoria,setCategoria]=useState([]);
  const [openCategory, setOpenCategory] = useState({
    tempo: false,
    problem_solving: false,
    intraprendenza: false,
    autoregolazione: false,
    valorizzazione: false,
    orientamento: false,
    attribuzione: false,
    resilienza: false,
    lavorogruppo: false,
    comunicazione: false,
    gestioneconflitto: false
  });

  // useEffect corretto con l'array vuoto per non far impazzire le chiamate

  useEffect(() => {
    document.title = "Storico - Soft Skills Rehab UniTo";
    API.getAll().then((data)=>{
        
        setCategoria(data);
    
        console.log(data[4].tipo);

    });

      
  },[]); 

  // Funzione per aprire/chiudere la Categoria
  const toggleCategory = (id) => {
    setOpenCategory(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <>
      <div className="fade-in" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 0' }}>
        
        <div className="page-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--primary-dark)', fontSize: '2.2rem' }}>Storico Questionari</h2>
         
        </div>
        <div style={{
          backgroundColor: 'var(--card-bg)',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
          marginBottom: '1.5rem',
          overflow: 'hidden'
         }}>
          
          {/* Intestazione Cliccabile della Categoria */}
          <div 
            onClick={() => toggleCategory('tempo')} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '1.5rem 2rem', 
              cursor: 'pointer', 
              backgroundColor: openCategory.tempo ? '#f8fafc' : 'white',
              transition: 'background-color 0.3s ease',
              borderBottom: openCategory.tempo ? '1px solid #edf2f7' : 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            
              <h3 style={{ color: 'var(--primary-dark)', fontSize: '1.4rem', margin: 0 }}>
                Gestione del Tempo
              </h3>
            </div>
            <span style={{ 
              fontSize: '1.8rem', 
              color: 'var(--primary-color)', 
              transition: 'transform 0.3s ease',
              transform: openCategory.tempo ? 'rotate(180deg)' : 'rotate(0deg)'
            }}>
              ▼
            </span>
          </div>

          {/* Contenuto della Categoria (Lista Questionari) con animazione fluida */}
          <div style={{
            display: 'grid',
            gridTemplateRows: openCategory.tempo ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            backgroundColor: '#fafbfc'
          }}>
            <div style={{ overflow: 'hidden', minHeight: 0 }}>
              
              {/* Box interno con padding */}
              <div style={{ padding: '2rem' }}>
                {categoria.filter(val=>val.tipo==="questionario_autovalutativo").map(val=>{
                    return  <AutovalutazioneGestioneTempo val={val}/>
                })}
                {categoria.filter(val=>val.tipo==="modello_smart").map(val=>{
                    return  <ModelloSmart val={val}/>
                })}
                
                {categoria.filter(val=>val.tipo==="matrice_eisenhower").map(val=>{
                    return  <MatriceEisenhower val={val}/>
                })}
                {categoria.filter(val=>val.tipo==="tecnica_pomodoro").map(val=>{
                    return  <TecnicaPomodoro val={val}/>
                })}
                {categoria.filter(val=>val.tipo==="procastinazione").map(val=>{
                    return  <Procastinazione val={val}/>
                })}
                
                {categoria.filter(val=>val.tipo==="consigli").map(val=>{
                    return  <Consigli val={val}/>
                })}
              

              </div>

            </div>
          </div>
        </div>
        <div style={{
          backgroundColor: 'var(--card-bg)',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
          marginBottom: '1.5rem',
          overflow: 'hidden'
         }}>
          
          {/* Intestazione Cliccabile della Categoria */}
          <div 
            onClick={() => toggleCategory('problem_solving')} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '1.5rem 2rem', 
              cursor: 'pointer', 
              backgroundColor: openCategory.problem_solving ? '#f8fafc' : 'white',
              transition: 'background-color 0.3s ease',
              borderBottom: openCategory.problem_solving ? '1px solid #edf2f7' : 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            
              <h3 style={{ color: 'var(--primary-dark)', fontSize: '1.4rem', margin: 0 }}>
                Problem Solving
              </h3>
            </div>
            <span style={{ 
              fontSize: '1.8rem', 
              color: 'var(--primary-color)', 
              transition: 'transform 0.3s ease',
              transform: openCategory.problem_solving ? 'rotate(180deg)' : 'rotate(0deg)'
            }}>
              ▼
            </span>
          </div>

          {/* Contenuto della Categoria (Lista Questionari) con animazione fluida */}
          <div style={{
            display: 'grid',
            gridTemplateRows: openCategory.problem_solving ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            backgroundColor: '#fafbfc'
          }}>
            <div style={{ overflow: 'hidden', minHeight: 0 }}>
              
              {/* Box interno con padding */}
              <div style={{ padding: '2rem' }}>
   
                  {categoria.filter(val=>val.tipo==="cinque_perche").map(val=>{
                    return  <CinquePerche val={val}/>
                })}
                {categoria.filter(val=>val.tipo==="albero_problemi").map(val=>{
                    return  <AlberoProblemi val={val}/>
                })}
                {categoria.filter(val=>val.tipo==="risoluzione_passaggi").map(val=>{
                    return  <RisoluzionePassaggi val={val}/>
                })}
                
                {categoria.filter(val=>val.tipo==="action_learning").map(val=>{
                    return  <ActionLearning val={val}/>
                })}
              </div>

            </div>
          </div>
          </div>
        <div style={{
          backgroundColor: 'var(--card-bg)',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
          marginBottom: '1.5rem',
          overflow: 'hidden'
         }}>
          
          {/* Intestazione Cliccabile della Categoria */}
          <div 
            onClick={() => toggleCategory('autoregolazione')} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '1.5rem 2rem', 
              cursor: 'pointer', 
              backgroundColor: openCategory.autoregolazione ? '#f8fafc' : 'white',
              transition: 'background-color 0.3s ease',
              borderBottom: openCategory.autoregolazione ? '1px solid #edf2f7' : 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            
              <h3 style={{ color: 'var(--primary-dark)', fontSize: '1.4rem', margin: 0 }}>
               Autoregolazione Emotiva
              </h3>
            </div>
            <span style={{ 
              fontSize: '1.8rem', 
              color: 'var(--primary-color)', 
              transition: 'transform 0.3s ease',
              transform: openCategory.autoregolazione ? 'rotate(180deg)' : 'rotate(0deg)'
            }}>
              ▼
            </span>
          </div>

          {/* Contenuto della Categoria (Lista Questionari) con animazione fluida */}
          <div style={{
            display: 'grid',
            gridTemplateRows: openCategory.autoregolazione ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            backgroundColor: '#fafbfc'
          }}>
            <div style={{ overflow: 'hidden', minHeight: 0 }}>
              
              {/* Box interno con padding */}
              <div style={{ padding: '2rem' }}>
       {categoria.filter(val=>val.tipo==="diario_emotivo").map(val=>{
                    return  <DiarioEmotivo val={val}/>
                })}
                {categoria.filter(val=>val.tipo==="coping").map(val=>{
                    return  <Coping val={val}/>
                })}
                {categoria.filter(val=>val.tipo==="coping_strategie").map(val=>{
                    return  <CopingStrategie val={val}/>
                })}
        
              </div>

            </div>
          </div>
          </div>
        <div style={{
          backgroundColor: 'var(--card-bg)',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
          marginBottom: '1.5rem',
          overflow: 'hidden'
         }}>
          
          {/* Intestazione Cliccabile della Categoria */}
          <div 
            onClick={() => toggleCategory('valorizzazione')} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '1.5rem 2rem', 
              cursor: 'pointer', 
              backgroundColor: openCategory.valorizzazione ? '#f8fafc' : 'white',
              transition: 'background-color 0.3s ease',
              borderBottom: openCategory.valorizzazione ? '1px solid #edf2f7' : 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            
              <h3 style={{ color: 'var(--primary-dark)', fontSize: '1.4rem', margin: 0 }}>
               Valorizzazione di sè
              </h3>
            </div>
            <span style={{ 
              fontSize: '1.8rem', 
              color: 'var(--primary-color)', 
              transition: 'transform 0.3s ease',
              transform: openCategory.valorizzazione ? 'rotate(180deg)' : 'rotate(0deg)'
            }}>
              ▼
            </span>
          </div>

          {/* Contenuto della Categoria (Lista Questionari) con animazione fluida */}
          <div style={{
            display: 'grid',
            gridTemplateRows: openCategory.valorizzazione ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            backgroundColor: '#fafbfc'
          }}>
            <div style={{ overflow: 'hidden', minHeight: 0 }}>
              
              {/* Box interno con padding */}
              <div style={{ padding: '2rem' }}>
       {categoria.filter(val=>val.tipo==="digital_journaling").map(val=>{
                    return  <DigitalJournaling val={val}/>
                })}
  
              </div>

            </div>
          </div>
          </div>
        <div style={{
          backgroundColor: 'var(--card-bg)',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
          marginBottom: '1.5rem',
          overflow: 'hidden'
         }}>
          
          {/* Intestazione Cliccabile della Categoria */}
          <div 
            onClick={() => toggleCategory('orientamento')} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '1.5rem 2rem', 
              cursor: 'pointer', 
              backgroundColor: openCategory.orientamento ? '#f8fafc' : 'white',
              transition: 'background-color 0.3s ease',
              borderBottom: openCategory.orientamento ? '1px solid #edf2f7' : 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            
              <h3 style={{ color: 'var(--primary-dark)', fontSize: '1.4rem', margin: 0 }}>
                Orientamento all'obiettivo
              </h3>
            </div>
            <span style={{ 
              fontSize: '1.8rem', 
              color: 'var(--primary-color)', 
              transition: 'transform 0.3s ease',
              transform: openCategory.orientamento ? 'rotate(180deg)' : 'rotate(0deg)'
            }}>
              ▼
            </span>
          </div>

          {/* Contenuto della Categoria (Lista Questionari) con animazione fluida */}
          <div style={{
            display: 'grid',
            gridTemplateRows: openCategory.orientamento ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            backgroundColor: '#fafbfc'
          }}>
            <div style={{ overflow: 'hidden', minHeight: 0 }}>
              
              {/* Box interno con padding */}
              <div style={{ padding: '2rem' }}>
   
                   {categoria.filter(val=>val.tipo==="goal_setter").map(val=>{
                    return  <GoalSetter val={val}/>
                })}
   
              </div>

            </div>
          </div>
          </div>
        <div style={{
          backgroundColor: 'var(--card-bg)',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
          marginBottom: '1.5rem',
          overflow: 'hidden'
         }}>
          
          {/* Intestazione Cliccabile della Categoria */}
          <div 
            onClick={() => toggleCategory('intraprendenza')} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '1.5rem 2rem', 
              cursor: 'pointer', 
              backgroundColor: openCategory.intraprendenza ? '#f8fafc' : 'white',
              transition: 'background-color 0.3s ease',
              borderBottom: openCategory.intraprendenza ? '1px solid #edf2f7' : 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            
              <h3 style={{ color: 'var(--primary-dark)', fontSize: '1.4rem', margin: 0 }}>
               Intraprendenza
              </h3>
            </div>
            <span style={{ 
              fontSize: '1.8rem', 
              color: 'var(--primary-color)', 
              transition: 'transform 0.3s ease',
              transform: openCategory.intraprendenza ? 'rotate(180deg)' : 'rotate(0deg)'
            }}>
              ▼
            </span>
          </div>

          {/* Contenuto della Categoria (Lista Questionari) con animazione fluida */}
          <div style={{
            display: 'grid',
            gridTemplateRows: openCategory.intraprendenza ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            backgroundColor: '#fafbfc'
          }}>
            <div style={{ overflow: 'hidden', minHeight: 0 }}>
              
              {/* Box interno con padding */}
              <div style={{ padding: '2rem' }}>

              </div>

            </div>
          </div>
          </div> 
         
         <div style={{
          backgroundColor: 'var(--card-bg)',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
          marginBottom: '1.5rem',
          overflow: 'hidden'
         }}>
          
          {/* Intestazione Cliccabile della Categoria */}
          <div 
            onClick={() => toggleCategory('attribuzione')} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '1.5rem 2rem', 
              cursor: 'pointer', 
              backgroundColor: openCategory.attribuzione ? '#f8fafc' : 'white',
              transition: 'background-color 0.3s ease',
              borderBottom: openCategory.attribuzione ? '1px solid #edf2f7' : 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            
              <h3 style={{ color: 'var(--primary-dark)', fontSize: '1.4rem', margin: 0 }}>
                Attribuzione causale del successo e dell'insuccesso
              </h3>
            </div>
            <span style={{ 
              fontSize: '1.8rem', 
              color: 'var(--primary-color)', 
              transition: 'transform 0.3s ease',
              transform: openCategory.attribuzione ? 'rotate(180deg)' : 'rotate(0deg)'
            }}>
              ▼
            </span>
          </div>

          {/* Contenuto della Categoria (Lista Questionari) con animazione fluida */}
          <div style={{
            display: 'grid',
            gridTemplateRows: openCategory.attribuzione ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            backgroundColor: '#fafbfc'
          }}>
            <div style={{ overflow: 'hidden', minHeight: 0 }}>
              
              {/* Box interno con padding */}
              <div style={{ padding: '2rem' }}>
   
              </div>

            </div>
          </div>
          </div>
         <div style={{
          backgroundColor: 'var(--card-bg)',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
          marginBottom: '1.5rem',
          overflow: 'hidden'
         }}>
          
          {/* Intestazione Cliccabile della Categoria */}
          <div 
            onClick={() => toggleCategory('resilienza')} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '1.5rem 2rem', 
              cursor: 'pointer', 
              backgroundColor: openCategory.resilienza ? '#f8fafc' : 'white',
              transition: 'background-color 0.3s ease',
              borderBottom: openCategory.resilienza ? '1px solid #edf2f7' : 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            
              <h3 style={{ color: 'var(--primary-dark)', fontSize: '1.4rem', margin: 0 }}>
               Resilienza
              </h3>
            </div>
            <span style={{ 
              fontSize: '1.8rem', 
              color: 'var(--primary-color)', 
              transition: 'transform 0.3s ease',
              transform: openCategory.resilienza ? 'rotate(180deg)' : 'rotate(0deg)'
            }}>
              ▼
            </span>
          </div>

          {/* Contenuto della Categoria (Lista Questionari) con animazione fluida */}
          <div style={{
            display: 'grid',
            gridTemplateRows: openCategory.resilienza ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            backgroundColor: '#fafbfc'
          }}>
            <div style={{ overflow: 'hidden', minHeight: 0 }}>
              
              {/* Box interno con padding */}
              <div style={{ padding: '2rem' }}>
   
                
                {categoria.filter(val=>val.tipo==="sfide_giornaliere").map(val=>{
                    return  <SfideGiornaliere val={val}/>
                })}
              </div>

            </div>
          </div>
          </div>
           <div style={{
          backgroundColor: 'var(--card-bg)',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
          marginBottom: '1.5rem',
          overflow: 'hidden'
         }}>
          
          {/* Intestazione Cliccabile della Categoria */}
          <div 
            onClick={() => toggleCategory('lavorogruppo')} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '1.5rem 2rem', 
              cursor: 'pointer', 
              backgroundColor: openCategory.lavorogruppo ? '#f8fafc' : 'white',
              transition: 'background-color 0.3s ease',
              borderBottom: openCategory.lavorogruppo ? '1px solid #edf2f7' : 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            
              <h3 style={{ color: 'var(--primary-dark)', fontSize: '1.4rem', margin: 0 }}>
               Lavoro in gruppo
              </h3>
            </div>
            <span style={{ 
              fontSize: '1.8rem', 
              color: 'var(--primary-color)', 
              transition: 'transform 0.3s ease',
              transform: openCategory.lavorogruppo ? 'rotate(180deg)' : 'rotate(0deg)'
            }}>
              ▼
            </span>
          </div>

          {/* Contenuto della Categoria (Lista Questionari) con animazione fluida */}
          <div style={{
            display: 'grid',
            gridTemplateRows: openCategory.lavorogruppo ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            backgroundColor: '#fafbfc'
          }}>
            <div style={{ overflow: 'hidden', minHeight: 0 }}>
              
              {/* Box interno con padding */}
              <div style={{ padding: '2rem' }}>
   
                <ActionLearning />
              </div>

            </div>
          </div>
          </div>
           <div style={{
          backgroundColor: 'var(--card-bg)',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
          marginBottom: '1.5rem',
          overflow: 'hidden'
         }}>
          
          {/* Intestazione Cliccabile della Categoria */}
          <div 
            onClick={() => toggleCategory('comunicazione')} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '1.5rem 2rem', 
              cursor: 'pointer', 
              backgroundColor: openCategory.comunicazione ? '#f8fafc' : 'white',
              transition: 'background-color 0.3s ease',
              borderBottom: openCategory.comunicazione ? '1px solid #edf2f7' : 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            
              <h3 style={{ color: 'var(--primary-dark)', fontSize: '1.4rem', margin: 0 }}>
               Comunicazione
              </h3>
            </div>
            <span style={{ 
              fontSize: '1.8rem', 
              color: 'var(--primary-color)', 
              transition: 'transform 0.3s ease',
              transform: openCategory.comunicazione ? 'rotate(180deg)' : 'rotate(0deg)'
            }}>
              ▼
            </span>
          </div>

          {/* Contenuto della Categoria (Lista Questionari) con animazione fluida */}
          <div style={{
            display: 'grid',
            gridTemplateRows: openCategory.comunicazione ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            backgroundColor: '#fafbfc'
          }}>
            <div style={{ overflow: 'hidden', minHeight: 0 }}>
              
              {/* Box interno con padding */}
              <div style={{ padding: '2rem' }}>
   
                <ActionLearning />
              </div>

            </div>
          </div>
          </div>
           <div style={{
          backgroundColor: 'var(--card-bg)',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
          marginBottom: '1.5rem',
          overflow: 'hidden'
         }}>
          
          {/* Intestazione Cliccabile della Categoria */}
          <div 
            onClick={() => toggleCategory('gestioneconflitto')} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '1.5rem 2rem', 
              cursor: 'pointer', 
              backgroundColor: openCategory.gestioneconflitto ? '#f8fafc' : 'white',
              transition: 'background-color 0.3s ease',
              borderBottom: openCategory.gestioneconflitto ? '1px solid #edf2f7' : 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            
              <h3 style={{ color: 'var(--primary-dark)', fontSize: '1.4rem', margin: 0 }}>
               Gestione del conflitto
              </h3>
            </div>
            <span style={{ 
              fontSize: '1.8rem', 
              color: 'var(--primary-color)', 
              transition: 'transform 0.3s ease',
              transform: openCategory.gestioneconflitto ? 'rotate(180deg)' : 'rotate(0deg)'
            }}>
              ▼
            </span>
          </div>

          {/* Contenuto della Categoria (Lista Questionari) con animazione fluida */}
          <div style={{
            display: 'grid',
            gridTemplateRows: openCategory.gestioneconflitto ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            backgroundColor: '#fafbfc'
          }}>
            <div style={{ overflow: 'hidden', minHeight: 0 }}>
              
              {/* Box interno con padding */}
              <div style={{ padding: '2rem' }}>
   
               
                   {categoria.filter(val=>val.tipo==="gestione_conflitto").map(val=>{
                    return  <GestioneConflitto val={val}/>
                })}
              </div>

            </div>
          </div>
          </div>
      </div>
    </>
  );
};

export { Storico };