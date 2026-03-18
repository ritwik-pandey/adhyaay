import React from 'react';
import './socials.css';

const socialData = [
  {
    id: 1,
    platform: 'Instagram',
    handle: '@eknayaadhyaay',
    link: 'https://www.instagram.com/eknayaadhyaay',
    color: '#E1306C', // Insta pink/purple
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
  },
  {
    id: 2,
    platform: 'YouTube',
    handle: '@eknayaadhyaay',
    link: 'https://www.youtube.com/@eknayaadhyaay',
    color: '#FF0000', // YouTube Red
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
  },
  {
    id: 3,
    platform: 'Spotify',
    handle: 'Adhyaay',
    link: 'https://open.spotify.com/artist/2DGCbESlwQtKYmbjhBfq5i?si=daHZSxN_TESDaUnj56a6PQ',
    color: '#1DB954',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.32-1.32 9.84-.6 13.561 1.621.42.181.6.779.18 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.279c-.6.181-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.139-1.26 11.22-1.019 15.72 1.561.54.3.719 1.02.419 1.56-.24.54-.96.72-1.56.36z"/>
      </svg>
    )
  }
];

const Socials = () => {
  return (
    <section className="social-section" id='socials-adhyaay'>
      <div className="social-header">
        <h4 className="section-subtitle">Connect with Adhyaay!</h4>
        <h2 className="section-title">JOIN THE <span className="gold-text">COMMUNITY</span></h2>
      </div>

      <div className="social-grid">
        {socialData.map((item) => (
          <a 
            href={item.link} 
            key={item.id} 
            className="social-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon-wrapper" style={{ color: item.color }}>
              {item.icon}
            </div>
            <div className="social-info">
              <h3>{item.platform}</h3>
              <p>{item.handle}</p>
            </div>
            <div className="arrow-icon">→</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Socials;