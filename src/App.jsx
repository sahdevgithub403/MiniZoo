import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Heart } from 'lucide-react';
import Home from './pages/Home';
import FullGallery from './pages/FullGallery';
import MusicPlayer from './components/MusicPlayer';
import './App.css';

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleMemberClick = (member) => {
    if (member.song) {
      setCurrentSong(member.song);
      setIsPlaying(true);
    }
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <Router>
      <div className={`app-container ${isDarkMode ? 'dark' : ''}`}>
        <MusicPlayer 
          currentSong={currentSong} 
          isPlaying={isPlaying} 
          setIsPlaying={setIsPlaying} 
        />

        <div className="hearts-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
          {[...Array(8)].map((_, i) => (
            <Heart 
              key={i} 
              className="floating-heart" 
              style={{ 
                position: 'absolute',
                bottom: '-50px',
                color: 'var(--primary-accent)',
                opacity: isDarkMode ? 0.15 : 0.3,
                left: `${Math.random() * 100}%`, 
                animation: `floatUp ${15 + Math.random() * 15}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `scale(${0.3 + Math.random() * 0.8})`
              }} 
            />
          ))}
        </div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <Routes>
            <Route path="/" element={
              <Home 
                onMemberClick={handleMemberClick} 
                isDarkMode={isDarkMode} 
                onThemeToggle={toggleDarkMode} 
              />
            } />
            <Route path="/gallery" element={
              <FullGallery 
                isDarkMode={isDarkMode} 
                onThemeToggle={toggleDarkMode} 
              />
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
