import React from 'react';
import './About.css';

const About = () => {
  return (
    <div id='about' className='container'>
      <div className='about-content'>
        <div className='about-text'>
          <h1>Hey, I'm Zach</h1>
          <p>
            Web developer located in beautiful Victoria BC. My speciality is
            building clean and responsive user interfaces with the most up to
            date tools in the industry.
          </p>
        </div>
        <img src='/bio-image.jpg' className='bio-image' alt='bio-image' />
      </div>
    </div>
  );
};

export default About;
