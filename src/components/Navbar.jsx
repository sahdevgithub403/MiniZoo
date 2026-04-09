import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const Navbar = ({ isDarkMode, onThemeToggle }) => {
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${navScrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-logo" style={{fontFamily: 'var(--font-script)', fontSize: '2.5rem', textTransform: 'none', letterSpacing: '0'}}>
        Mini Zoo
      </a>
      <div className="nav-links">
        <a href="#members" className="nav-link">Family</a>
        <a href="#gallery" className="nav-link">Moments</a>
        <a href="#timeline" className="nav-link">Journey</a>
        <a href="#letters" className="nav-link">Letters</a>
      </div>
      <div style={{display: 'flex', alignItems: 'center', gap: '1.5rem'}}>
        <button 
          onClick={onThemeToggle} 
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--primary-accent)',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            transition: 'transform 0.3s ease'
          }}
          className="theme-toggle"
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
