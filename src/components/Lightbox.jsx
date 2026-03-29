import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ img, onClose, onNext, onPrev }) => {
  if (!img) return null;

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 1000 }}>
      {/* Close Button */}
      <button 
        className="modal-close" 
        style={{ top: '30px', right: '30px', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', width: '50px', height: '50px'}} 
        onClick={(e) => { e.stopPropagation(); onClose(); }}
      >
        <X size={24} />
      </button>

      {/* Navigation Buttons */}
      <button 
        className="control-btn"
        style={{ 
          position: 'absolute', left: '2vw', top: '50%', transform: 'translateY(-50%)', 
          width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', 
          border: '1px solid rgba(255,255,255,0.2)', color: 'white' 
        }}
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
      >
        <ChevronLeft size={32} />
      </button>

      <img 
        src={img} 
        style={{ 
          maxWidth: '85%', maxHeight: '85vh', objectFit: 'contain', 
          borderRadius: '12px', boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
          animation: 'scaleUp 0.3s ease' 
        }} 
        alt="Gallery View" 
        onClick={(e)=> e.stopPropagation()} 
      />

      <button 
        className="control-btn"
        style={{ 
          position: 'absolute', right: '2vw', top: '50%', transform: 'translateY(-50%)', 
          width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', 
          border: '1px solid rgba(255,255,255,0.2)', color: 'white' 
        }}
        onClick={(e) => { e.stopPropagation(); onNext(); }}
      >
        <ChevronRight size={32} />
      </button>

      {/* Counter UI */}
      <div style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', letterSpacing: '2px' }}>
        DRAG OR USE ARROWS
      </div>
    </div>
  );
};

export default Lightbox;
