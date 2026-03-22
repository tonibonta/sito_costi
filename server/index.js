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
  origin: ['http://localhost:5173','http://localhost:5174','https://sito-costi.vercel.app'],
  credentials: true,
};
app.use(cors(corsOptions));

const passport = require('passport');                              // authentication middleware
const LocalStrategy = require('passport-local'); // authentication strategy (username and password)
const base32 = require('thirty-two');

/** Set up authentication strategy to search in the DB a user with a matching password.
 * The user object will contain other information extracted by the method userDao.getUser (i.e., id, username, name).
 **/
passport.use(new LocalStrategy(async function verify(username, password, callback) {
    try{
  const user = await userDao.getUser(username, password);
  if(!user)
    return callback(null, false, 'Incorrect username or password');  
  return callback(null, user);
    }catch{
        return callback(null, false, 'Incorrect username or password');  
    }
  
    
   // NOTE: user info in the session (all fields returned by userDao.getUser, i.e, id, username, name)
}));

// Serializing in the session the user object given from LocalStrategy(verify).
passport.serializeUser(function (user, callback) { // this user is id + username + name 
  callback(null, user);
});

// Starting from the data in the session, we extract the current (logged-in) user.
passport.deserializeUser(function (user, callback) { // this user is id + email + name 
  // if needed, we can do extra check here (e.g., double check that the user is still in the database, etc.)
  // e.g.: return userDao.getUserById(id).then(user => callback(null, user)).catch(err => callback(err, null));

  return callback(null, user); // this will be available in req.user
});

/** Creating the session */
const session = require('express-session');

app.use(session({
  secret: "LXBSMDTMSP2I5XFXIYRGFVWSFI",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,        // Obbligatorio su Render (HTTPS)
    sameSite: 'none',    // Permette l'invio tra Vercel e Render
    httpOnly: true
  }
}));
app.use(passport.authenticate('session'));


/** Defining authentication verification middleware **/
const isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()) {
    return next();
}
  return res.status(401).json({error: 'Not authorized'});
}

function clientUserInfo(req) {
  const user=req.user;
  
	return {id: user.id,email:user.email,course:user.course};
}

app.post('/api/sessions', function(req, res, next) {
   
  passport.authenticate('local', (err, user, info) => { 
    if (err)
      return next(err);
      if (!user) {
        // display wrong login messages
        return res.status(401).json({ error: info});
      }
      // success, perform the login and extablish a login session
      req.login(user, (err) => {
        if (err)
          return next(err);
        
        // req.user contains the authenticated user, we send all the user info back
        // this is coming from userDao.getUser() in LocalStratecy Verify Fn
        return res.json(clientUserInfo(req));
      });
  })(req, res, next);
});

// GET /api/sessions/current
// This route checks whether the user is logged in or not.
app.get('/api/sessions/current', (req, res) => {
  if(req.isAuthenticated()) {
    res.status(200).json(clientUserInfo(req));}
  else
    res.status(401).json({error: 'Not authenticated'});
});

// DELETE /api/session/current
// This route is used for loggin out the current user.
app.delete('/api/sessions/current', isLoggedIn, (req, res) => {
  req.logout(() => {
    res.status(200).json({});
  });
});


app.post('/api/registrazione',[check('email').isEmail(),
  check('course').notEmpty(),
  check('password').isLength({ min: 8 })],(req,res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Restituiamo 400 Bad Request con la lista degli errori

    return res.status(400).json({ errors: errors.array() });
   
  }
 
  userDao.registrazione(req.body).then((risultato)=>{
    console.log(risultato)
    res.send({"risultato":risultato});

  })

})


app.get('/api/attivita/:id',isLoggedIn,(req,res)=>{
   if(req.user.id==req.params.id){
    attivitadao.getAll(req.params.id).then((attivita)=>{
        console.log(attivita);
        res.send({"attivita":attivita})
    })}else{
      res.send({"attivita":"errore"})
    }
    
});
app.get('/api/attivita/classe/:classe',isLoggedIn,(req,res)=>{
    attivitadao.getByClasse(req.params.classe,req.body,id).then((attivita)=>{
        console.log(attivita);
    })
    
});

app.get('/api/attivita/tipo/:tipo',isLoggedIn,(req,res)=>{
    attivitadao.getByTipo(req.params.tipo).then((attivita)=>{
        console.log(attivita);
    })
    
});
app.post('/api/attivita/',isLoggedIn,(req,res)=>{
    if(req.user.id==req.body.id_user){
    const attivita=req.body;
    attivitadao.storeAttivita(attivita).then((result)=>{
     
        res.send({"risultato":result});
    })}else{
        res.send({"risultato":"Errore "});


    }
})

app.delete('/api/attivita/',isLoggedIn,(req,res)=>{
  if(req.user.id==req.body.id_user){
    const attivita=req.body;
    attivitadao.deleteAttivita(attivita).then((result)=>{
       console.log("delete done");
     
        res.send({"risultato":result});
    })}else{
        res.send({"risultato":"Errore"});

    }
})
const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log("Server is running on port 3001");
});

