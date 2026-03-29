import React from 'react';

const MemberCard = ({ member, onClick }) => {
  return (
    <div className="member-card glass" onClick={onClick}>
      <div className="member-img-wrap">
        <img src={member.photo} alt={member.name} />
      </div>
      <div className="member-info">
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>
    </div>
  );
};

export default MemberCard;
