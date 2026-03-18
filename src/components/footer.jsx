import React from 'react';
import './footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear(); 
  return (
    <section className="footer-section">
      <footer className='footer-element'>
        <div className="footer-container">
          <h2 className='footer-linktree'>Checkout my <a href="https://linktr.ee/eknayaadhyaay" target='blank_'>linktree</a> for more!</h2>
          <p className='footer-copyright-text'>&copy; {currentYear} Adhyaay. All rights reserved.</p>
      </div>
      </footer>
    </section>
  );
};

export default Footer;