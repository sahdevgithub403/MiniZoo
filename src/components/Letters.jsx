import React, { useState } from 'react';
import { initialLetters } from '../data/mockData';
import FadeInSection from './FadeInSection';

const Letters = () => {
  const [letters] = useState(initialLetters);
  
  return (
    <section id="letters" className="section">
      <FadeInSection>
        <div style={{ textAlign: 'left', marginBottom: '4rem' }}>
          <span className="section-label">Messages</span>
          <h2 className="section-title">Words From the Heart</h2>
        </div>
        
        <div className="letters-grid">
          {letters.map(letter => (
            <div className="letter-card" key={letter.id}>
              <div className="quote-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="letter-content">"{letter.text}"</p>
              
              <div className="letter-author">
                <div>
                  <span className="letter-author-name">{letter.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default Letters;
