"use strict";

const express=require("express");
const {check,validationResult}=require("express-validator");
const userDao=require("./dao-users.js");
const attivitadao=require("./dao-attivita.js");

const app=express();
const cors = require('cors');
const morgan = require("morgan");
app.use(express.json()); // <- obbligatorio per leggere il body JSON
app.use(morgan('dev'));
const corsOptions = {
  origin: ['http://localhost:5173','http://localhost:5174'],
  credentials: true,
};
app.use(cors(corsOptions));


app.get('/api/attivita',(req,res)=>{
    attivitadao.getAll().then((attivita)=>{
        console.log(attivita);
        res.send(attivita)
    })
    
});
app.get('/api/attivita/classe/:classe',(req,res)=>{
    attivitadao.getByClasse(req.params.classe).then((attivita)=>{
        console.log(attivita);
    })
    
});

app.get('/api/attivita/tipo/:tipo',(req,res)=>{
    attivitadao.getByTipo(req.params.tipo).then((attivita)=>{
        console.log(attivita);
    })
    
});
app.post('/api/attivita/',(req,res)=>{
    const attivita=req.body;
    attivitadao.storeAttivita(attivita).then((result)=>{
        console.log(result);
    })
})

app.listen(3001,()=>{
    console.log("Server is running on port 3001");
});

