import Header from './Commponent/Header';
import './App.css';
import Home from './Commponent/Home';
import CheckOut from './Commponent/CheckOut';
import Err404 from './Commponent/Err404';
import { Route,Routes } from 'react-router-dom';
import SignIn from './Commponent/SignIn';
import { auth } from './firebase';
import React,{useEffect} from 'react'
import { useStateValue } from './Commponent/Data/StateProvider';
import Payment from './Commponent/Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
const promise=loadStripe("pk_test_51InLW8GaWx1ftVCsYn4v6lJ9zuxxbtCA2jQ6icoGs3nyKOgcSHRszPvzHbqnX8gVfWCSvNpyoybSAIyjVzRPIdyh00zpwh6Pa1")
function App() {
 const [{},dispatch]=useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log(authUser);
      if(authUser)
      {
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }
      else{
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
  },[])

  return (
    
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route  path="/amazon" element={<Home/>}></Route>
        <Route  path='/checkout'  element={<CheckOut/>}></Route>
        <Route  path='/payment' element={<><Elements stripe={promise}><Payment/></Elements></>}></Route>
        <Route  path='/login'  element={<SignIn/>}></Route>
        <Route   element={<Err404/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
