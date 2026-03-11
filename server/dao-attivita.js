"use strict";
const filters={
    'first-class':{id:'first-class',row:10,seat:2,},
    'second-class':{id:'second-class',row:15,seat:3},
    'economy-class':{id:'economy-class',row:18,seat:4}
  }
const { ResultWithContextImpl } = require("express-validator/lib/chain/context-runner-impl.js");
const db=require("./db.js");


exports.getAll=()=>{
return new Promise((resolve,reject)=>{
    db.all('select * from attivita',[],(err,rows)=>{
        if(err){
            reject(err);
        }else if(rows.length===0){
            resolve("empty");
        }else{
           
            resolve(rows);
        }

    });
});
}
exports.getByClasse=(classe)=>{
return new Promise((resolve,reject)=>{
    db.all('select * from attivita where classe=? ',[classe],(err,rows)=>{
        if(err){
            reject(err);
        }else if(rows.length===0){
            resolve("empty");
        }else{
           
            resolve(rows);
        }

    });
});
}
exports.getByTipo=(tipo)=>{
return new Promise((resolve,reject)=>{
    db.all('select * from attivita where tipo=? ',[tipo],(err,rows)=>{
        if(err){
            reject(err);
        }else if(rows.length===0){
            resolve("empty");
        }else{
           
            resolve(rows);
        }

    });
});
}

exports.storeAttivita=(attivita)=>{
    return new Promise((resolve,reject)=>{
         db.run("insert into attivita(date,classe,tipo,valore,id_user) values(?,?,?,?,?)",[attivita.date,attivita.classe,attivita.tipo,attivita.valore,attivita.id_user],(err)=>{
            if(err){
                reject(err);
            }else{
                resolve("Store done");
            }
        })
})
}




exports.deletebyid=(user,reservation)=>{
    return new Promise((resolve,reject)=>{
        db.run("delete from train where user=? and reservation=?",[user,reservation],(err)=>{
            if(err){
                reject(err);
            }else{
                resolve({msg:"Deleted",type:"success"});
            }
        })
    })
}

