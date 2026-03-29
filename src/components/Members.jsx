import React, { useState } from 'react';
import { membersData } from '../data/mockData';
import FadeInSection from './FadeInSection';
import MemberCard from './MemberCard';
import MemberModal from './MemberModal';

const Members = ({ onMemberClick }) => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleCardClick = (member) => {
    setSelectedMember(member);
    if (onMemberClick) {
      onMemberClick(member);
    }
  };

  return (
    <section id="members" className="section">
      <FadeInSection>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="section-label">Our Circle</span>
          <h2 className="section-title">The Found Family</h2>
        </div>
        <div className="members-grid">
          {membersData.map(member => (
            <MemberCard 
              key={member.id} 
              member={member} 
              onClick={() => handleCardClick(member)} 
            />
          ))}
        </div>
      </FadeInSection>
      
      <MemberModal 
        member={selectedMember} 
        onClose={() => setSelectedMember(null)} 
      />
    </section>
  );
};

export default Members;
