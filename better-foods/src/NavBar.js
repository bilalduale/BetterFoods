import React from 'react';
import { NavLink } from "react-router-dom";

export function NavBar (){
  return (
    <nav className="nav-bar">
      <NavLink to="/homepage">
        <img src="/img/logo.png" alt="Better Foods Logo" className="nav-logo" />
      </NavLink>
      
      <NavLink className="nav-button" to ="/aboutpage"> 
        <button>
            About Us
        </button>
      </NavLink>
    </nav>
  );
}
