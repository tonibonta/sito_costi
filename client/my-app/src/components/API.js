"use strict";

const SERVER_URL="http://localhost:3001/api/";

const storeAttivita=async(attivita)=>{
   const request =`${SERVER_URL}attivita`;
   const response=await fetch(request,{method: 'POST',headers: {
    'Content-Type': 'application/json',
  },body:JSON.stringify(attivita)});
const data = await response.json();
console.log(data);
return data;
}


const API={storeAttivita};
export default API;