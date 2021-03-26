import React from 'react';
import './Work.css';
const Work = () => {
  return (
    <div className='grid-container'>
      <h1>My Projects</h1>
      <div id='work' className='gallery'>
        <div className='gallery-item'>
          <img
            className='gallery-image'
            src='/tofino.jpg'
            alt='project-image'
          />
        </div>

        <div className='gallery-item'>
          <img
            className='gallery-image'
            src='/tofino.jpg'
            alt='project-image'
          />
        </div>

        <div className='gallery-item'>
          <img
            className='gallery-image'
            src='/tofino.jpg'
            alt='project-image'
          />
        </div>

        <div className='gallery-item'>
          <img
            className='gallery-image'
            src='/tofino.jpg'
            alt='project-image'
          />
        </div>

        <div className='gallery-item'>
          <img
            className='gallery-image'
            src='/tofino.jpg'
            alt='project-image'
          />
        </div>

        <div className='gallery-item'>
          <img
            className='gallery-image'
            src='/tofino.jpg'
            alt='project-image'
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
