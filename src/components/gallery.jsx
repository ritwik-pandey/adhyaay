import React from 'react';
import './gallery.css';

// --- IMPORTANT: IMPORT YOUR LOCAL IMAGES HERE ---
// Change names/paths to match your actual files
import img1 from '../assets/img/banaras.jpg';
import img2 from '../assets/img/banaras.jpg';
import img3 from '../assets/img/banaras.jpg';
import img4 from '../assets/img/banaras.jpg';
import img5 from '../assets/img/banaras.jpg';
import img6 from '../assets/img/banaras.jpg';


// Define your gallery data using the imported variables
const galleryData = [
  {
    id: 1,
    image: img1,
    caption: 'THE STADIUM TOUR',
    location: 'London, UK'
  },
  {
    id: 2,
    image: img2,
    caption: 'BACKSTAGE PASS',
    location: 'Paris, France'
  },
  {
    id: 3,
    image: img3,
    caption: 'FAN EXCLUSIVE',
    location: 'Meet & Greet'
  },
  {
    id: 4,
    image: img4,
    caption: 'LIVE RECORDING',
    location: 'New York City'
  },
  {
    id: 5,
    image: img5,
    caption: 'THE ENCORE',
    location: 'Tokyo Dome'
  },
  {
    id: 6,
    image: img6,
    caption: 'ON THE ROAD',
    location: 'Tour Bus Life'
  },
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      {/* Reusing the header style from Socials for consistency */}
      <div className="gallery-header">
        <h4 className="gallery-subtitle">OUR WORLD</h4>
        <h2 className="gallery-title">VISUAL <span className="gold-text">EXPERIENCES</span></h2>
      </div>

      <div className="gallery-grid">
        {galleryData.map((item) => (
          <div className="gallery-card" key={item.id}>
            <img src={item.image} alt={item.caption} className="gallery-img" />
            {/* This overlay appears on hover */}
            <div className="gallery-overlay">
              <div className="overlay-content">
                 <h3>{item.caption}</h3>
                 <p>{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;