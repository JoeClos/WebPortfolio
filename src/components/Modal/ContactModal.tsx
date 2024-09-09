import React from 'react';
import './contactModal.css';

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ContactModal: React.FC <ContactModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ContactModal;
