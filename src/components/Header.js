import React from 'react';
import { NavLink } from 'react-router-dom'; // Make sure to import NavLink

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={`${process.env.PUBLIC_URL}/Writer-Assist-Logo.png`} alt="Logo" className="logo" />
        <h1><NavLink to="/" className="site-title">Writer Assist</NavLink></h1>
      </div>
      <nav>
        <ul>
          <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
          <li><NavLink to="/marketplace" activeClassName="active">Marketplace</NavLink></li>
          <li><NavLink to="/resources" activeClassName="active">Resources</NavLink></li>
          <li><NavLink to="/community" activeClassName="active">Community</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
          <li><NavLink to="/signup" activeClassName="active">Sign Up</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
