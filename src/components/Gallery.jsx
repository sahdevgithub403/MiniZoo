import React, { useState } from 'react';
import { galleryData } from '../data/mockData';
import FadeInSection from './FadeInSection';
import Lightbox from './Lightbox';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Gallery = ({ isFullPage = false }) => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const displayData = isFullPage ? galleryData : galleryData.slice(0, 3);

  const handleNext = () => {
    setSelectedIdx((prevIdx) => (prevIdx + 1) % displayData.length);
  };

  const handlePrev = () => {
    setSelectedIdx((prevIdx) => (prevIdx - 1 + displayData.length) % displayData.length);
  };

  return (
    <section id="gallery" className="section">
      <FadeInSection>
        <div className="gallery-header">
          <div className="gallery-header-text">
            <span className="section-label">{isFullPage ? "The Complete Archives" : "Polaroids"}</span>
            <h2 className="section-title" style={{marginBottom: 0}}>{isFullPage ? "Full Memory Collection" : "Moments in Time"}</h2>
          </div>
          {!isFullPage && (
            <div className="gallery-desc">
              A beautiful glimpse of times when we laughed a little too hard and loved a little too much.
            </div>
          )}
        </div>
        
        <div className="gallery-grid">
          {displayData.map((item, index) => (
            <div className="gallery-item" key={item.id} onClick={() => setSelectedIdx(index)}>
              <img src={item.img} alt={item.category} loading="lazy" />
              <div className="gallery-overlay">
                <span style={{color: '#fff', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.85rem'}}>View Memory</span>
              </div>
            </div>
          ))}
        </div>

        {!isFullPage && (
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/gallery" className="btn-primary" style={{ textDecoration: 'none' }}>
              See All Moments <ArrowRight size={18} style={{ marginLeft: '10px' }} />
            </Link>
          </div>
        )}

        {isFullPage && (
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/" className="btn-primary" style={{ textDecoration: 'none' }}>
              Back to Home
            </Link>
          </div>
        )}
      </FadeInSection>
      
      {selectedIdx !== null && (
        <Lightbox 
          img={displayData[selectedIdx].img} 
          onClose={() => setSelectedIdx(null)} 
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
};

export default Gallery;
