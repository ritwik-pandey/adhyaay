import React from 'react';
import './gallery.css';

// --- IMPORTANT: IMPORT YOUR LOCAL IMAGES HERE ---
// Change names/paths to match your actual files
import img1 from '../assets/img/adhyaay_banaras.jpg';
import img2 from '../assets/img/adhyaay_banaras.jpg';
import img3 from '../assets/img/adhyaay_banaras.jpg';
import img4 from '../assets/img/adhyaay_banaras.jpg';
import img5 from '../assets/img/adhyaay_banaras.jpg';
import img6 from '../assets/img/adhyaay_banaras.jpg';


// Define your gallery data using the imported variables
const galleryData = [
  {
    id: 1,
    image: img1,
    caption: 'Opening set for Karma',
    location: "Fandom at Gilly's Redefined, Koramangala",
    link: 'https://www.instagram.com/eknayaadhyaay'
  },
  {
    id: 2,
    image: img2,
    caption: 'Opening set for Panther',
    location: 'Secret Story Bar & Kitchen, Indiranagar',
    link: 'https://www.instagram.com/eknayaadhyaay'
  },
  {
    id: 3,
    image: img3,
    caption: 'Opening set for Lashcurry',
    location: 'Sunburn Union, Koramangala',
    link: 'https://www.instagram.com/eknayaadhyaay'
  },
  {
    id: 4,
    image: img4,
    caption: 'Opening set for MC Square x Khullar G',
    location: 'Sunburn Union, Koramangala',
    link: 'https://www.instagram.com/eknayaadhyaay'
  },
  {
    id: 5,
    image: img5,
    caption: 'Next Drop by BLR Groove Co',
    location: 'Social (Multiple Locations in Bangalore)',
    link: 'https://www.instagram.com/eknayaadhyaay'
  },
  {
    id: 6,
    image: img6,
    caption: 'A Hundred Hands',
    location: 'Jayamahal Palace, NIFT HSR, Forum South Bengaluru',
    link: 'https://www.instagram.com/eknayaadhyaay'
  },
];

const Gallery = () => {
  return (
    <section className="gallery-section" id='gallery-adhyaay'>
      {/* Reusing the header style from Socials for consistency */}
      <div className="gallery-header">
        <h4 className="gallery-subtitle">Gallery</h4>
        <h2 className="gallery-title">Notable <span className="gold-text">Performances</span></h2>
      </div>

      <div className="gallery-grid">
        {galleryData.map((item) => (
          <a href={item.link} target='blank_'>
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
          </a>
        ))}
      </div>
    </section>
  );
};

export default Gallery;