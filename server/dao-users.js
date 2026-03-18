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
                const user={"id":row.id,"email":row.email,"name":row.name,"secret":row.secret};
                resolve(user);
            }
        });
    });
};

exports.getUser=(email,password)=>{
 
    return new Promise((resolve,reject)=>{
        db.get("Select * from users where email=?",[email],(err,row)=>{
            
            if(err){
                 reject(err);
            }else if(row==undefined){
                reject("user not found");
                  
            }else{
                const user={"id":row.id,"email":row.email,"name":row.name,"surname":row.surname,"course":row.course};
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