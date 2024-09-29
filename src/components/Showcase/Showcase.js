import React, { useState } from 'react';
import Modal from 'react-modal';
import './Showcase.css';
const Showcase = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div id='showcase' className='showcase'>
      <Modal
        zIndex={2}
        isOpen={isOpen}
        onRequestClose={toggleModal}
        style={{
          content: {
            zIndex: '2',
            width: '90%',
            height: '90%',
            margin: 'auto',
            padding: '0px',
            borderRadius: '12px',
            overflow: 'hidden',
          },
        }}
      >
        <iframe
          className='iframe'
          style={{
            borderRadius: '12px',
            border: 'none',
            width: '100%',

            zIndex: 50000000,
          }}
          src={`resume.pdf#zoom=120`}
          width='100%'
          height='100%'
          title='Resume'
        ></iframe>
      </Modal>
      <div className='dotWrapper dotWrapper-1'>
        <div className='dot dot-1'></div>
      </div>
      <div className='dotWrapper dotWrapper-2'>
        <div className='dot dot-2'></div>
      </div>
      <div className='dotWrapper dotWrapper-3'>
        <div className='dot dot-3'></div>
      </div>
      <div className='dotWrapper dotWrapper-4'>
        <div className='dot dot-4'></div>
      </div>
      <div className='dotWrapper dotWrapper-5'>
        <div className='dot dot-5'></div>
      </div>
      <div className='dotWrapper dotWrapper-6'>
        <div className='dot dot-6'></div>
      </div>
      <div className='dotWrapper dotWrapper-7'>
        <div className='dot dot-7'></div>
      </div>
      <div className='dotWrapper dotWrapper-8'>
        <div className='dot dot-8'></div>
      </div>
      <div className='dotWrapper dotWrapper-9'>
        <div className='dot dot-9'></div>
      </div>
      <div className='dotWrapper dotWrapper-10'>
        <div className='dot dot-10'></div>
      </div>
      <div className='dotWrapper dotWrapper-11'>
        <div className='dot dot-11'></div>
      </div>
      <div className='dotWrapper dotWrapper-12'>
        <div className='dot dot-12'></div>
      </div>
      <div className='dotWrapper dotWrapper-13'>
        <div className='dot dot-13'></div>
      </div>
      <div className='dotWrapper dotWrapper-14'>
        <div className='dot dot-14'></div>
      </div>
      <div className='dotWrapper dotWrapper-15'>
        <div className='dot dot-15'></div>
      </div>
      <div className='dotWrapper dotWrapper-16'>
        <div className='dot dot-16'></div>
      </div>
      <div className='dotWrapper dotWrapper-17'>
        <div className='dot dot-17'></div>
      </div>
      <div className='dotWrapper dotWrapper-18'>
        <div className='dot dot-18'></div>
      </div>
      <div className='dotWrapper dotWrapper-19'>
        <div className='dot dot-19'></div>
      </div>
      <div className='dotWrapper dotWrapper-20'>
        <div className='dot dot-20'></div>
      </div>
      <div className='showcase-content'>
        <h1>
          Zach <span>Harrison</span>
        </h1>
        <h5>Frontend Web Developer.</h5>
        <a onClick={toggleModal} className='btn showcase-btn'>
          Resume
        </a>
      </div>
    </div>
  );
};

export default Showcase;
