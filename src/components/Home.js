import React from 'react'
import Bord from "./Bord";
import Heading from "./Heading";
import "../App.css";
import {Link} from 'react-router-dom'

const Home = () => {
      return (
            <div className="Home_main">
            
            <Link to="/Game" className="Play_gane"> Play Game</Link>
          </div>
      )
}

export default Home
