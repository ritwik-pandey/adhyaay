// src/components/Navbar.jsx
import React from 'react';
import './navbar.css'; // Import the specific styles for this component
import logoImage from '../assets/img/adhyaay_logo.jpg'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo"><a href='/'><img src={logoImage} /></a></div>
      <ul className="navbar-links">
        <li><a href='#about-adhyaay'>About</a></li>
        <li><a href="#gallery-adhyaay">Gallery</a></li>
        <li><a href="#socials-adhyaay">Socials</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;