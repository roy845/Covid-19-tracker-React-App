import  React from 'react'
import {useState} from 'react'
import loginImg from "../login.svg"
import { useSnackbar } from 'notistack';
import {getUser} from '../server/serverAPI'


 const Login = (props) =>{

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const {enqueueSnackbar} = useSnackbar();
    

    const onAlert = (message, variant) => {
      enqueueSnackbar (message, {variant});
    };


    const onSubmit=(e)=>{
        e.preventDefault()
        
        if(!email||!password){
            onAlert("Please fill all your details!","error")
            return
        }
  

        setEmail('')
        setPassword('')
      
        getUser ({email, password}).then (res => {
        
          if (res.data === "userNotFound") {
            onAlert ('User not found', 'error');
            console.log(res.data)
           
          } 
          if(res.data === "userFound"){
              onAlert ('Login successfully!','success');
          
              window.location = "/global"
              console.log(res)
             
             
              
          }
                
          
          
        });
     
        }

return(
    <form className='add-form' onSubmit={onSubmit}> 
    <div className="base-container" ref={props.containerRef}>

<div className="header">Login</div>
<div className="content">
<div className="image"> 
<img src ={loginImg} alt=""/>
</div>

<div className="form">

<div className="form-group">
    <label htmlFor="username">Email</label>
    <input type="text"
     name="email" 
     placeholder="Email"
     value={email}
     onChange={(e)=>setEmail(e.target.value)}/>
   </div> 

   <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" 
    name="password" 
    placeholder="Password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}/>
    
   </div> 

</div>
   
</div>

</div>
<div className="footer">
<input
            type="submit"
            value='Login'
            variant="contained"
            className="btn btn-primary"
            onClick={onSubmit}
          />
     </div>
 
    </form>          
      
);

}

export default Login
