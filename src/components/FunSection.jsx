import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { funFactsData } from '../data/mockData';
import FadeInSection from './FadeInSection';

const FunSection = () => {
  const [randomFact, setRandomFact] = useState("Click to remember a sweet memory! ✨");

  const showRandomFact = () => {
    const facts = funFactsData.filter(f => f !== randomFact);
    const random = facts[Math.floor(Math.random() * facts.length)];
    setRandomFact(random);
  };

  return (
    <section id="fun" className="section" style={{ textAlign: 'center', padding: '6rem 2vw' }}>
      <FadeInSection>
        <div style={{
          maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem', 
          background: 'var(--card-bg)', borderRadius: '24px', 
          boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-color)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem'
        }}>
          <Heart size={40} fill="var(--tertiary-accent)" color="var(--primary-accent)" />
          <div style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: '1.4' }}>
            "{randomFact}"
          </div>
          <button className="btn-primary" onClick={showRandomFact} style={{ marginTop: 0 }}>
            <Sparkles size={16} /> Random Memory
          </button>
        </div>
      </FadeInSection>
    </section>
  );
};

export default FunSection;
