// About.js
import React from 'react';
import './about.css'; // We will define this below
import aboutImage from '../assets/img/adhyaay_about.jpg'; // Make sure you have an image here

const About = () => {
  return (
    <section className="about-section" id='about-adhyaay'>
      <div className="about-container">
        <div className="about-image-wrapper">
           <img src={aboutImage} alt="About Us" className="about-image" />
        </div>
        <div className="about-content">
           <h2 className="about-title">Desi Hip-Hop ka Ek Naya Adhyaay!</h2>
           <p className="about-text">
             With a vision to convert non-listeners of Hip-Hop into listeners, I picked up the pen for the first time in 2014. I have been crafting poetry on beats since then. Aspiring to open a new chapter of Hip-Hop, I blend a range of styles varying from lyrical Hip-Hop, commercial party numbers, melodic to social raps. Music can bring a change, and I aspire to be a part of it.
           </p>
           <a href="public/docs/adhyaay_brochure.pdf" target="_blank">
            <button className="about-btn">Download Artist Brochure</button>
           </a>
        </div>
      </div>
    </section>
  );
};

export default About;