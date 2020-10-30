import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const ModalWrapper = ({ children, modalLabel, modalIsOpen, color, closeModal }) => {
  const customStyles = {
    overlay: {
      zIndex: '11',
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    content: {
      top: '50%',
      left: '50%',
      width: '90vw',
      height: '80vh',
      border: `3px solid ${color}`,
      borderRadius: '10px',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel={modalLabel}
    >
      <div className="modal">
        {children[0]}
        {children[1]}
        {children[2]}
      </div>
    </Modal>
  );
};

export default ModalWrapper;
