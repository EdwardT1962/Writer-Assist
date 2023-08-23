import React from 'react';
const Footer = ({ homePage }) => {
    return (
      <footer className={homePage ? "home-page-footer" : ""} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
        <p style={{ margin: "0" }}>Writer-Assist. All rights reserved.</p>
        <div>
          <a href="/privacy-policy" style={{ margin: "0 5px" }}>Privacy Policy</a>
          <span>|</span>
          <a href="/terms-of-service" style={{ margin: "0 5px" }}>Terms of Service</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
  
  
  
