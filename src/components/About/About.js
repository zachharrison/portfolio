import React, { useState } from 'react';
import './About.css';
import Button from '../Button/Button';
import Modal from 'react-modal';
const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle modal open/closes
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div id='about' className='container'>
      <div className='profile-content'>
        <h1 className='profile-header'>Hi, I'm Zach</h1>
        <p>
          I'm a frontend web developer with an eye for detail, and a passion for
          bringing beautiful user interfaces to life.
        </p>
        <Button onClick={toggleModal}>Resume</Button>
      </div>

      <Modal
        zIndex={2}
        isOpen={isOpen}
        onRequestClose={toggleModal}
        style={{
          content: {
            zIndex: '2',
            width: '80%',
            height: '90%',
            margin: 'auto',
            padding: '0px',
            borderRadius: '12px',
            overflow: 'hidden',
          },
        }}
      >
        <iframe
          style={{ borderRadius: '12px', zIndex: 50000000 }}
          src={`resume.pdf`}
          width='100%'
          height='100%'
          title='Resume'
        ></iframe>
      </Modal>

      <div className='about-content'>
        <img src='headshot2.png' className='bio-image' />
      </div>
    </div>
  );
};

export default About;
