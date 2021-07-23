import React from "react";
import axios from 'axios'

import { useHistory } from "react-router-dom"

var UserStateContext = React.createContext();
var UserDispatchContext = React.createContext();


function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isAuthenticated: true };
    case "SIGN_OUT_SUCCESS":
      return { ...state, isAuthenticated: false };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  var [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !! localStorage.getItem("id"),
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}


  


function useUserState() {
  var context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserDispatch() {
  var context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUserState, useUserDispatch, loginUser, signOut };

// ###########################################################

function loginUser(dispatch, login, password, history, setIsLoading, setError) {
  setError(false);
  setIsLoading(true);
  axios.get(`http://localhost:1919/api/utilisateur/${password}/${login}`) 
  .then(response => {
  console.log(response)
  
  console.log("aaaaaaa",response.data.adresse_facturation)
  console.log("type",response.data.type_user)
   // this.setState({posts: response.data})
   if(response.data!=null){
     //client
     if(response.data.type_user== 10){
    localStorage.setItem('id',response.data.id);
    localStorage.setItem('client',10);
    setError(null)
    setIsLoading(false)
    dispatch({ type: 'LOGIN_SUCCESS' })
    history.push('/app/clt_cmd_encours')}

//imprimeur
    if(response.data.type_user== 20){
      localStorage.setItem('id',response.data.id);
      localStorage.setItem('imp',20);
      setError(null)
      setIsLoading(false)
      dispatch({ type: 'LOGIN_SUCCESS' })
      history.push('/app/listclient_imp')}

//admin vente
      if(response.data.type_user== 30){
        localStorage.setItem('id',response.data.id);
        localStorage.setItem('admin',30);
        setError(null)
        setIsLoading(false)
        dispatch({ type: 'LOGIN_SUCCESS' })
        history.push('/app/dashboardAdmin')}

        console.log("********************************************* localstorge client")
        console.log(localStorage.getItem("client"))
        console.log("********************************************* localstorge imp")
        console.log(localStorage.getItem("imp"))
        console.log("********************************************* localstorge admin")
        console.log(localStorage.getItem("admin"))
     
   }else{
  //  console.log(response) ;
    setError(true);
    setIsLoading(false);
     
   }

})
.catch(error =>{
    console.log(error)
})

}

function signOut(dispatch, history) {
  localStorage.removeItem("client");
  localStorage.removeItem("imp");
  localStorage.removeItem("admin");
  localStorage.removeItem("id");
  localStorage.removeItem("id_admin");
  console.log("********************************************* localstorge client")
  console.log(localStorage.getItem("client"))
  console.log("********************************************* localstorge imp")
  console.log(localStorage.getItem("imp"))
  console.log("********************************************* localstorge admin")
  console.log(localStorage.getItem("admin"))
  dispatch({ type: "SIGN_OUT_SUCCESS" });
  history.push("/login");
}

