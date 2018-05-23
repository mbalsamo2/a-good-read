import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
    <ul>
      <li><NavLink
        to="/"
        exact
        activeStyle={{
          background: 'darkblue'
        }}
        >Home</NavLink></li>
      </ul>
    </div>
  );
};

export default NavBar;
