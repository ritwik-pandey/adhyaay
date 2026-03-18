import React, { useState, useEffect } from 'react';
import './slider.css';

// IMPORT YOUR LOCAL IMAGES HERE
import img1 from '../assets/img/adhyaay_parichay_artwork.jpg'; 
import img2 from '../assets/img/adhyaay_db_mixtape.jpg';
import img3 from '../assets/img/adhyaay_banaras.jpg' 


const HeroSlider = () => {
  // Define your slides here using the imported images
  const slides = [
    {
      id: 1,
      image: img1, // Using the imported variable
      title: "Parichay",
      subtitle: "First Solo Studio Album",
      cta: "Listen now",
      link: "https://youtube.com/playlist?list=PLDSy40BJDNVf825qSYfs4WrUO97PgBYd5&si=OaJ8617fjNWMuUgo"
    },
    {
      id: 2,
      image: img2, // Using the imported variable
      title: "dB MixTape",
      subtitle: "Bollywood MixTape",
      cta: "Listen now",
      link: "https://youtube.com/playlist?list=PLDSy40BJDNVf9MMWSq-Zpv8Me8TDstFNa&si=f0FlQLYxg0CkkrrQ"
    },
    {
      id: 3,
      image: img3, // Using the imported variable
      title: "Banaras",
      subtitle: "Rap Blog",
      cta: "Listen now",
      link: "https://youtu.be/t2qhxp0gcM0?si=6D4kXXRfGtptDVpo"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // This logic handles the "one by one" auto-play
  useEffect(() => {
    let timeOut = null;
    timeOut = autoPlay && setTimeout(() => {
      setCurrent(current === slides.length - 1 ? 0 : current + 1);
    }, 5000); 
    return () => clearTimeout(timeOut);
  }, [current, autoPlay, slides.length]);

  return (
    <div 
      className="slider" 
      onMouseEnter={() => setAutoPlay(false)} 
      onMouseLeave={() => setAutoPlay(true)}
    >
      {slides.map((slide, index) => (
        <div 
          className={index === current ? 'slide active' : 'slide'} 
          key={slide.id}
        >
          {index === current && (
            <>
              <img src={slide.image} alt={slide.title} className="slide-image" />
              <iframe width="560" height="315" src="https://www.youtube.com/embed/t2qhxp0gcM0?si=OuQpglYvIoT7_C8A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <div className="slide-content">
                <h1 className="main-title">{slide.title}</h1>
                <h2 className="subtitle">{slide.subtitle}</h2>
                <a href={slide.link} className="cta-button" target="_blank" rel="noopener noreferrer">{slide.cta}</a>
                {/* <button className="cta-button">{slide.cta}</button> */}
              </div>
            </>
          )}
        </div>
      ))}

      {/* Navigation Dots & Controls */}
      <div className="slider-controls">
        {slides.map((_, index) => (
          <div 
            key={index} 
            onClick={() => setCurrent(index)}
            className={index === current ? 'dot active-dot' : 'dot'}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;