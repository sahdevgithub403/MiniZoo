import React from 'react';
import { timelineData } from '../data/mockData';
import FadeInSection from './FadeInSection';
import { Heart } from 'lucide-react';

const Timeline = () => {
  return (
    <section id="timeline" className="section">
      <FadeInSection>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="section-label">Our Journey</span>
          <h2 className="section-title">Timeline of Us</h2>
        </div>
        
        <div className="timeline-container">
          {timelineData.map(item => (
            <div className="timeline-item" key={item.id}>
              <div className="timeline-icon">
                {/* A lovely heart icon replacing the metallic ring */}
                <Heart size={16} fill="white" strokeWidth={3} />
              </div>
              <div className="timeline-content">
                <span className="timeline-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default Timeline;
