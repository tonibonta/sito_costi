"use strict";
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
const SERVER_URL=`${BASE_URL}/api/`;

const storeAttivita=async(attivita)=>{
   const request =`${SERVER_URL}attivita`;
   const response=await fetch(request,{method: 'POST',headers: {
    'Content-Type': 'application/json',
  },credentials:'include',body:JSON.stringify(attivita)});
const data = await response.json();
console.log(data);
return data;
}

const getAll=async(id)=>{
  const request =`${SERVER_URL}attivita/${id}`;
   const response=await fetch(request,{method: 'GET',headers: {
    'Content-Type': 'application/json',
    
  },credentials:'include'});
const data = await response.json();

return data;
  
}

const logIn = async (credentials) => {

    
    return fetch(SERVER_URL + 'sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',  // this parameter specifies that authentication cookie must be forwarded
      body: JSON.stringify(credentials),
    }).then(response=>response.json()).then(data=>{
      return data;
    }).catch((err=>{console.log(err)}));
    
  };
  
  /**
   * This function is used to verify if the user is still logged-in.
   * It returns a JSON object with the user info.
   */
  const getUserInfo = async () => {
    return fetch(SERVER_URL + 'sessions/current', {
      // this parameter specifies that authentication cookie must be forwarded
      credentials: 'include'
    }).then(response=>response.json()).then(data=>{
     
      return data;
    }).catch(err=>err);
    
  };

  /**
   * This function destroy the current user's session and execute the log-out.
   */
  const logOut = async() => {
    return fetch(SERVER_URL + 'sessions/current', {
      method: 'DELETE',
      credentials: 'include'  // this parameter specifies that authentication cookie must be forwarded
    }).then(response=>{console.log(response.status);return response.status})
    
  }
  function getJson(httpResponsePromise) {
    // server API always return JSON, in case of error the format is the following { error: <message> } 
    return new Promise((resolve, reject) => {
      httpResponsePromise
        .then((response) => {
          if (response.ok) {
  
           // the server always returns a JSON, even empty {}. Never null or non json, otherwise the method will fail
           response.json()
              .then( json => resolve(json) )
              .catch( err => reject({ error: "Cannot parse server response" }))
  
          } else {
            // analyzing the cause of error
            response.json()
              .then(obj => 
                reject(obj)
                ) // error msg in the response body
              .catch(err => reject({ error: "Cannot parse server response" })) // something else
          }
        })
        .catch(err => 
          reject({ error: "Cannot communicate"  })
        ) // connection error
    });
  }





const API={storeAttivita,getAll,getUserInfo,logIn,logOut,};
export default API;

