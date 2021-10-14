import './App.scss';
import './components/style.scss';
import React, { Fragment } from 'react'
import Drawer from './components/Drawer'
import ExposureMap from './components/ExposureMap';
import GlobalStats from './components/GlobalStats';
import AffectedCountries from './components/AffectedCountries';
import AffectedContinents from './components/AffectedContinents';
import {Redirect,BrowserRouter  as Router, Route } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
const axios = require ('axios');
const URL = 'http://localhost:5000';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      isLogginActive : true,
      isConnected:false
      
    }
  }

  


  changeState(){
    const {isLogginActive} = this.state;
    
    if(isLogginActive){
      this.rightSide.classList.remove("right")
      this.rightSide.classList.add("left")
    }else{
      this.rightSide.classList.remove("left")
      this.rightSide.classList.add("right")
    }
    this.setState((prevState)=>({isLogginActive:!prevState.isLogginActive}))

  }


  componentDidMount(){
    try {
  
      const url = `${URL}/isConnected`;
      return axios.get (url,{withCredentials:true} //for saving cookies
       ).then (res => {
        if(res.data==="userIsConnected"){ 
          this.setState({isConnected:true})
          
          
         }
        else{
          this.setState({isConnected:false})
          
        }
      });
    } catch (error) {
      console.error (error);
    }

  }



 render(){
   const {isLogginActive} = this.state;
   const current = isLogginActive ? "Register": "Login";
   const currentActive = isLogginActive ? "Login" :"Register"
  return (

    <Fragment>

<Router>
  
  {this.state.isConnected && <Drawer />}
  {this.state.isConnected && <Redirect to='/global'/>}
  {!this.state.isConnected && <Redirect to='/'/>}
  

  <Route
          path='/'
          exact
          render={(props) => (
            <>
            <div className="App">
            <div className="login">
            <div className="container">
           {isLogginActive && <Login containerRef={(ref)=>this.current=ref}/>}
           {!isLogginActive && <Register containerRef={(ref)=>this.current=ref}/>}
           </div>
           <RightSide current={current} containerRef={ref=>this.rightSide=ref} onClick={this.changeState.bind(this)}/>
           </div>
           </div>
            </>
            
          )}
        
        />
         

<Route
          path='/global' component={GlobalStats}
    
        />

<Route
          path='/continents' component={AffectedContinents}
    
        />
        
        <Route path='/countries' component={AffectedCountries} />

        <Route path='/map' component={ExposureMap} />
         </Router>
         
    </Fragment>

    

   
  );
}
}

const RightSide = props =>{
  return <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
    <div className="inner-container">
  
  <div className="text">
      
  {props.current}
    </div>
  
    </div>
  
  </div>
  }

export default App;
