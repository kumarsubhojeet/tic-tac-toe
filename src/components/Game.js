import React from 'react'
import Bord from "./Bord";
import Heading from "./Heading";
import "../App.css";

const Game = () => {
      return (
            <div>
                   <div className="playground">
                  <Heading />
          <Bord/>
          </div>
            </div>
      )
}

export default Game
