import React, { useState } from 'react';
import './Work.css';
import Modal from 'react-modal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Project = ({ images, name, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className='gallery-item'>
      <button className='btn-dark' onClick={toggleModal}>
        Learn More
      </button>
      <img className='gallery-image' src={images[0]} alt={name} />

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel='My dialog'
        className='modal'
        overlayClassName='overlay'
        closeTimeoutMS={500}
      >
        <Carousel>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={name} />
            </div>
          ))}
        </Carousel>
        <div className='modal-content'>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div className='modal-btns'>
          <a
            className='btn-dark'
            rel='noreferrer'
            target='_blank'
            href='https://github.com/zachharrison'
          >
            View Code
          </a>
          <button onClick={toggleModal}>X</button>
        </div>
      </Modal>
    </div>
  );
};

export default Project;
