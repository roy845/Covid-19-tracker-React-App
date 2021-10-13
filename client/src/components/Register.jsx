import React from "react";
import {useState} from 'react'
import loginImg from "../login.svg";
import { useSnackbar } from 'notistack';
import validator from 'validator'
import {insertUser} from '../server/serverAPI'

const Register = (props) =>{

  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[repeatPassword,setRepeatPassword]=useState('')
  const {enqueueSnackbar} = useSnackbar();

  const onAlert = (message, variant) => {
    enqueueSnackbar (message, {variant});
  };

  const validateEmail = () => {
    
    if (validator.isEmail(email)) {
      return true
    } else {
   
      return false
    }
  }

  
const onSubmit=(e)=>{
    e.preventDefault()
    
    if(!email||!password||!repeatPassword){
        onAlert("Please fill all your details!","error")
        return
    }

    if(password!==repeatPassword){
      onAlert("Password don't match!","error")
      return
  }


    if(!validateEmail()){
      onAlert("Enter valid Email!","error")
      return
  }
    
    setEmail('')
    setPassword('')
    setRepeatPassword('')

    insertUser({email,password}).then(res=>{
    if(res.data==="alreadyExistsUser"){
      onAlert("User already exists!","error")
    }
    else{
      onAlert ('Account created, log in','success');
    }
      
    })
   
    
    }

 
    return (
      <form className='add-form' onSubmit={onSubmit}>
      <div className="base-container" ref={props.containerRef}>
        
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt=""/>
          </div>
          <div className="form">
      
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" 
              name="email" 
              placeholder="Email"
              value={email} 
              onChange={(e)=>setEmail(e.target.value)}
              required/>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" 
              name="password" 
              placeholder="Password"
              value={password}   
              onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
            <label htmlFor="repeatPassword">Repeat Password</label>
            <input type='password' 
            placeholder='Repeat Password' 
            value={repeatPassword}   
            onChange={(e)=>setRepeatPassword(e.target.value)}/>
           </div>
          </div>
        </div>
        <div className="footer">
      
        <input
            type="submit"
      
            value='Register'
            variant="contained"
            className="btn btn-primary"
            onClick={onSubmit}
          />
            
        
        </div>
       
      </div>
      </form>
     
    );
  
}
export default Register