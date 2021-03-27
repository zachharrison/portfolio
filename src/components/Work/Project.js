import React, { useState } from 'react';
import './Work.css';
import Modal from 'react-modal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

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
        className='modal'
        overlayClassName='overlay'
        closeTimeoutMS={500}
      >
        <Carousel>
          <div>
            <img src={image} />
          </div>
          <div>
            <img src={image} />
          </div>
          <div>
            <img src={image} />
          </div>
        </Carousel>
        <div className='modal-content'>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <button onClick={toggleModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Project;
