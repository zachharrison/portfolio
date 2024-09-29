import React, { useState } from 'react';
import './About.css';

import { EmailButton } from '../Button/EmailButton';
const About = () => {
  return (
    <div id='about' className='container'>
      <div className='profile-content'>
        <h1 className='profile-header'>Hi, I'm Zach</h1>
        <p className='bio-text'>
          I'm a frontend web developer with an eye for detail, and a passion for
          bringing beautiful user interfaces to life.
        </p>
        {/* <Button onClick={toggleModal}>Resume</Button> */}
        <EmailButton />
      </div>

      <div className='about-content'>
        <img src='headshot2.png' className='bio-image' />
      </div>
    </div>
  );
};

export default About;
