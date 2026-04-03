import React from 'react';
import './footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear(); 
  return (
    <footer className='footer-element'>
      <div className='footer-container'>
        <p className='footer-linktree'>Checkout my <a href="https://linktr.ee/eknayaadhyaay" target='blank_'>linktree</a> for more!</p>
        <p className='footer-copyright-text'>&copy; {currentYear} Adhyaay. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;