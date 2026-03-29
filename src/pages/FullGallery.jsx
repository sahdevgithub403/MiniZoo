import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const FullGallery = ({ isDarkMode, onThemeToggle }) => {
  // Scroll to top when this page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="full-gallery-page">
      <Navbar isDarkMode={isDarkMode} onThemeToggle={onThemeToggle} />
      <div style={{ paddingTop: '100px' }}>
        <Gallery isFullPage={true} />
      </div>
      <Footer />
    </div>
  );
};

export default FullGallery;
