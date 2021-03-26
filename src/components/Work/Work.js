import React from 'react';
import './Work.css';
// <header>
//   <h1>
//     Balkan Style <br /> <span>[ Portfolio Gallery ]</span>
//   </h1>
// </header>

const Work = () => {
  return (
    <div className='grid-container'>
      <div className='gallery'>
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
