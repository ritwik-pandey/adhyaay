import React, { useState, useEffect } from 'react';
import './slider.css';

// IMPORT YOUR LOCAL IMAGES HERE
import img1 from '../assets/img/banaras.jpg'; 
import img2 from '../assets/img/comeback.jpg'; 


const HeroSlider = () => {
  // Define your slides here using the imported images
  const slides = [
    {
      id: 1,
      image: img1, // Using the imported variable
      title: "Banaras",
      subtitle: "On youtube",
      cta: "Watch now",
      link: "https://youtube.com"
    },
    {
      id: 2,
      image: img2, // Using the imported variable
      title: "Comeback",
      subtitle: "On youtube",
      cta: "Watch now",
      link: "https://youtube.com"
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