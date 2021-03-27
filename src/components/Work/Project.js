import React, { useState } from 'react';
import './Work.css';
import Modal from 'react-modal';

const Project = ({ image, name, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className='gallery-item'>
      <button className='btn-dark' onClick={toggleModal}>
        Learn More
      </button>
      <img className='gallery-image' src={image} alt={name} />

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel='My dialog'
        className='mymodal'
        overlayClassName='myoverlay'
        closeTimeoutMS={500}
      >
        <h1>Modal</h1>
        <button onClick={toggleModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Project;
