import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#hero">Origin</a>
        <a href="#members">Family</a>
        <a href="#gallery">Moments</a>
        <a href="#timeline">Journey</a>
      </div>
      <div className="footer-logo">Our Memories</div>
      <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
        Forever & Always <Heart size={14} fill="var(--primary-accent)" color="var(--primary-accent)" /> 
      </p>
    </footer>
  );
};

export default Footer;
