import React, { useState } from 'react'
import "./login.css"
import {getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase-config';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [userEmail,setUserEmail]=useState('');
  const [userPassword,setUserPassword]=useState('');
const navigate = useNavigate();
  const createAcc =()=>{
    navigate('/SignUp')
  }

  const forgetPw=()=>{
    navigate('/forgetpw')
  }

  const login=async()=>{
  
    try{
      if(userEmail==="" || userPassword==="") {
        alert("Please enter all fields");
      return
    }
        const userCredential = await signInWithEmailAndPassword(auth,userEmail,userPassword)
        const userId = userCredential.user;
        console.log(userId.uid);
        navigate("/homepage")
       
    }
    catch(error){
        if(error.code==='auth/invalid-credential'){
         alert("Email or password is wrong");
        }   
        else if (error.code === 'auth/invalid-email') {
          alert("Enter valid Email address");
       }
       
  }
}

  return (
    <div className='login-main-div'>
    <div>
    <h1 className='login-font'>Login</h1>
    </div>
    
    <div className='login-inputs col-2'>
        <input className='log-inp' type="email" placeholder='Enter your email'  onChange={(event)=>{
            setUserEmail(event.target.value)
          
        }}/>

        <input className='log-inp' placeholder='Enter your password' type="password" onChange={(event)=>{
            setUserPassword(event.target.value)
          
        }}/>
    </div>
   
    <div className='fp-div'>
    
    <h8 onClick={forgetPw} className='forgetpw'>Forget Password?</h8>
  
    </div>
         
   
    <div className='log-sign'>
    <button className="login-button" onClick={login}>Login</button>
    <div className='hr-login'>
    <hr className='log-hr'></hr>
    <div className='or'>or</div>
    <hr className='log-hr'></hr>
    </div>
    
       <button className="signup-button" onClick={createAcc} >Sign Up</button>
    </div>    

    </div>

   
    
  )
}

export default Login