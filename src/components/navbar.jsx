// src/components/Navbar.jsx
import React from 'react';
import './navbar.css'; // Import the specific styles for this component

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Adhyaay</div>
      <ul className="navbar-links">
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Socials</a></li>
        <li><a href="/contact">Gallery</a></li>

      </ul>
    </nav>
  );
}

export default Navbar;