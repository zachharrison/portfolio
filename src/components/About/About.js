import React, { useEffect, useState } from 'react';
import './About.css';
import FadeIn from '../FadeIn/FadeIn';

const About = () => {
  return (
    <div id='about' className='container'>
      <FadeIn>
        <div className='about-content'>
          <h1>About Me</h1>
          <img src='/bio-image.jpg' className='bio-image' alt='bio-image' />
        </div>
      </FadeIn>
    </div>
  );
};

export default About;
