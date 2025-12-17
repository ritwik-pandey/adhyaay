// About.js
import React from 'react';
import './about.css'; // We will define this below
import aboutImage from '../assets/img/banaras.jpg'; // Make sure you have an image here

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image-wrapper">
           <img src={aboutImage} alt="About Us" className="about-image" />
        </div>
        <div className="about-content">
           <h4 className="about-subtitle">WHO AM I</h4>
           <h2 className="about-title">Bringing The Music To You</h2>
           <p className="about-text">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam risus ut vehicula lacinia. Integer orci elit, pharetra in hendrerit ut, egestas sit amet mauris. Vestibulum dolor elit, condimentum quis euismod vitae, posuere ac est. Nunc convallis tempor nulla, id placerat nisi dignissim nec. Aliquam sed interdum diam, sit amet tristique ligula. Maecenas ornare suscipit mi eu gravida. Curabitur sollicitudin vitae est vitae mollis. Nullam at nulla justo. Vivamus sed orci eros. Vivamus et risus et lacus blandit condimentum. 
           </p>
           <button className="about-btn">Download my brochure</button>
        </div>
      </div>
    </section>
  );
};

export default About;