import React, {useEffect,useState} from 'react'
import "./App.css";
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Game from "./components/Game"
import Signup from "./components/SignUp"
import {auth} from "./Firebase"
import { Switch,Route} from 'react-router-dom'
import PleaseLogin from './components/PleaseLogin';

const App = () => {

const [user,setuser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) setuser(user)
      else setuser(null)
    })
  }, [])

  return (
    <>
      <Navbar user={user} />
   
     <Switch>
     <Route exact path='/' component={Home} />
       <Route exact path="/Login" component={Login} /> 
       <Route exact path="/Signup" component={Signup} /> 
       
       {
         user?
         <Route exact path="/Game" user={user} component={Game} /> 
         :
        <PleaseLogin />
       }

       
      

    </Switch>

    </>
  )
}

export default App
