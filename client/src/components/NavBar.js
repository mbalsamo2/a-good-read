import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="NavBar">
      <NavLink className="NavLink" to="/">Home</NavLink>
    </div>
  );
};

export default NavBar;
