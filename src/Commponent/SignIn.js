import React, { useState } from 'react'
import './css/SignIn.css'
import Button from '@mui/material/Button';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
function SignIn() {
    const navigate = useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const signIn=e=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth)
            {
                navigate('/')
            }
        })
        .catch(error=>alert(error.massage))
        
    };

    const register=e=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth)
            {
                navigate('/')
            }
        })
        .catch(error=>alert(error.massage))
        // some fancy firbase register
    }
  return (
    <div className='signin__container'>
        <img className='sigin__logoimage' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=''/>
        <div className='form__container'>
            <h1>Sign In</h1>
            <form onSubmit={signIn}>
                <h5>E-mail</h5>
                <input type="email" placeholder='' value={email} onChange={e=>setEmail(e.target.value)} required/>
                <h5>Password</h5>
                <input type="password" placeholder='' value={password} onChange={e=>setPassword(e.target.value)} required/>
                <Button style={{background:"orange",color:"black"}} type="submit" >Sign In</Button>
            </form>
            <p>
                By signing-in you agree to the amazon fake colone Conditions of Use & Sale. Please see our Privacy Notice, our cookies Notice and our Interest-Based Ads Notice. 
            </p>

            <Button className='login__registerButton' style={{color:"blue"}} onClick={register}>Create your Amazon Account</Button>
        </div>
    </div>
  )
}

export default SignIn