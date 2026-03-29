import React from 'react';
import { Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="title-aesthetic">Mini Zoo</h1>
        <p className="subtitle">Because some souls just belong together.</p>
        
        <a href="#members" style={{textDecoration: 'none'}}>
          <button className="btn-primary">
            Relive The Memories <Heart size={16} style={{marginLeft: '5px'}} fill="currentColor" />
          </button>
        </a>
      </div>
      <a href="#members" className="scroll-indicator">
        <div style={{ width: '1px', height: '40px', background: 'var(--primary-accent)', marginTop: '20px', display: 'inline-block', opacity: '0.8' }}></div>
      </a>
    </section>
  );
};

export default Hero;
