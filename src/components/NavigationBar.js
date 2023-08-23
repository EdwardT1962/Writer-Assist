import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ isAuthenticated }) => {
  return (
    <div className="header">
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginLeft: '30px' }}>
          <img src={`${process.env.PUBLIC_URL}/Writer-Assist-Logo.png`} alt="Logo" className="logo" />
        </div>
        <ul style={{ display: 'flex', gap: '15px', marginRight: '20px' }}>
          <li><Link to="/" className="nav-button">Home</Link></li>
          <li><Link to="/about" className="nav-button">About</Link></li>
          <li><Link to="/services" className="nav-button">Services</Link></li>
          <li><Link to="/marketplace" className="nav-button">Marketplace</Link></li>
          <li><Link to="/resources" className="nav-button">Resources</Link></li>
          <li><Link to="/community" className="nav-button">Community</Link></li>
          <li><Link to="/contact" className="nav-button">Contact</Link></li>
          {isAuthenticated ? (
            <>
              <li><Link to="/profile" className="nav-button">Profile</Link></li>
              <li><a href="/logout" className="nav-button">Logout</a></li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="nav-button">Log In</Link></li>
              <li><Link to="/signup" className="nav-button">Sign Up</Link></li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
