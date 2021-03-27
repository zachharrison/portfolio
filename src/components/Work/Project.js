import React, { useState } from 'react';
import './Work.css';
import Modal from 'react-modal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

// Modal.setAppElement('#root');

const Project = ({ images, name, description, code, website }) => {
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
        appElement={document.getElementById('root')}
      >
        <Carousel className='carousel'>
          {images.map((image, index) => (
            <div key={index}>
              <img className='slide' src={image} alt={name} />
            </div>
          ))}
        </Carousel>
        <div className='modal-content'>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div className='modal-btns'>
          {website ? (
            <div className='btns'>
              <a
                className='btn-dark'
                rel='noreferrer'
                target='_blank'
                href={website}
              >
                View Website
              </a>
              <a
                className='btn-dark'
                rel='noreferrer'
                target='_blank'
                href={code}
              >
                View Code
              </a>
            </div>
          ) : (
            <a
              className='btn-dark'
              rel='noreferrer'
              target='_blank'
              href={code}
            >
              View Code
            </a>
          )}
          <button onClick={toggleModal}>
            <i className='fas fa-times' onClick={toggleModal} />
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Project;
