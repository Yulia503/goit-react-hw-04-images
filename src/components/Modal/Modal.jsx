import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledModal, StyledOverlay } from './Modal.styled';

export const Modal = ({ onCloseModal, modalData }) => {

//*закриття модалки клавіатурою--------

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onCloseModal();
    }
  };


//*-------------------------

  const handleClickOverlay = event => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  const { largeImageURL, tags } = modalData;

  return (
    <StyledOverlay onClick={handleClickOverlay}>
      <StyledModal>
        <img src={largeImageURL} alt={tags} />
      </StyledModal>
    </StyledOverlay>
  );
};

Modal.propTypes = {
  modalData: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
