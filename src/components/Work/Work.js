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
            src='/kustom/home-page.png'
            alt='project-image'
          />
        </div>

        <div className='gallery-item'>
          <img
            className='gallery-image'
            src='/helperr/home-page.png'
            alt='project-image'
          />
        </div>

        <div className='gallery-item'>
          <img
            className='gallery-image'
            src='/contact-keeper/home.png'
            alt='project-image'
          />
        </div>

        <div className='gallery-item'>
          <img
            className='gallery-image'
            src='/scheduler/home-page.png'
            alt='project-image'
          />
        </div>

        <div className='gallery-item'>
          <img
            className='gallery-image'
            src='/pizza-bytes/home-page.png'
            alt='project-image'
          />
        </div>

        <div className='gallery-item'>
          <img
            className='gallery-image'
            src='/tweeter/home-page.png'
            alt='project-image'
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
