import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../Assets/TUT_Logo_Transparent.png'; // Adjust the path as necessary

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="TUT Logo" />
      </div>
      <div className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/work">Work</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
