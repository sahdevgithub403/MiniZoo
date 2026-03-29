import React from 'react';
import { X } from 'lucide-react';

const MemberModal = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={20} /></button>
        <img src={member.photo} alt={member.name} className="modal-img" />
        <div className="modal-text">
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>{member.name}</h2>
          <p style={{ color: 'var(--primary-accent)', fontWeight: '600', marginBottom: '1rem' }}>{member.role}</p>
          <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>"{member.message}"</p>
        </div>
      </div>
    </div>
  );
};

export default MemberModal;
