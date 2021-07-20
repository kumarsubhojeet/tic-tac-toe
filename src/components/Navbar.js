import React from "react";
import { Link, useHistory } from "react-router-dom"
import {auth} from '../Firebase'

const Navbar = ({user}) => {
  const history = useHistory();
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navheading" to="/">
          AVRNGames
        </Link>
        
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        
        </button>
        <div class="collapse navbar-collapse" id="navbarNav"> 

          
          <ul class="navbar-nav ml-auto">

            
        {user?
        <>
         <li class="nav-item">
         <Link class="nav_link" onClick={()=>{
           auth.signOut()
           history.push("/Login")
         }} 
         
         >
           Logout
         </Link>
       </li>
       <h3 className="name_uyser">
        {user.email} 
       </h3>
       </>
       :
       <>
       <li class="nav-item">
       <Link class="nav_link" to="/Login">
         Login
       </Link>
     </li>

   
</>
      }
           
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
