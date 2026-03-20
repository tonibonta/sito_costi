"use strict";


const db=require("./db.js");
const crypto=require("crypto");

exports.getUserById=(id)=>{
    return new Promise((resolve,reject)=>{
        db.get("SELECT * FROM users WHERE id=?",[id],(err,row)=>{
            if(err){
                 reject(err);
            }else if(row==undefined){
                reject("user not found");
            }else{
                const user={"id":row.id,"email":row.email};
                resolve(user);
            }
        });
    });
};

exports.registrazione=async (user)=>{
  
    try{
    const cryptoData = await hashPassword(user.password);
   
    return new Promise((resolve,reject)=>{
         db.run("insert into users(email,hash,salt,course) values(?,?,?,?)",[user.email,cryptoData.hash,cryptoData.salt,user.course],(err)=>{
            if(err){
                reject(err);
            }else{
                resolve("correct");
            }
        })
})}catch(err){
    console.log("c")
    return  err;

}
}

exports.getUser=(email,password)=>{
 
    return new Promise((resolve,reject)=>{
        db.get("Select * from users where email=?",[email],(err,row)=>{
            
            if(err){
                 reject(err);
            }else if(row==undefined){
                reject("user not found");
                  
            }else{
                const user={"id":row.id,"email":row.email,"course":row.course};
                 crypto.scrypt(password, row.salt, 32, function (err, hashedPassword) { // WARN: it is 64 and not 32 (as in the week example) in the DB
                if (err) reject(err);
                if (!crypto.timingSafeEqual(Buffer.from(row.hash, 'hex'), hashedPassword)) // WARN: it is hash and not password (as in the week example) in the DB
                    resolve(false);
                else
                    resolve(user);
                });
               
            }
        });
    })

}

function hashPassword(password) {
  return new Promise((resolve, reject) => {
    // 1. Genera un salt casuale e sicuro (16 byte sono lo standard, convertiti in stringa hex)
    const salt = crypto.randomBytes(16).toString('hex');

    // 2. Calcola l'hash usando scrypt (deve corrispondere ai 32 byte usati nel login)
    crypto.scrypt(password, salt, 32, (err, derivedKey) => {
      if (err) {
        reject(err);
      } else {
        // 3. Risolve restituendo l'hash (convertito in hex) e il salt pronti per il DB
        resolve({
          salt: salt,
          hash: derivedKey.toString('hex')
        });
      }
    });
  });
}