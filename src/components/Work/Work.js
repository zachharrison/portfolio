import React from 'react';
import Project from '../Project/Project';
import './Work.css';

const Work = () => {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div className='grid-container'>
      <h1>My Projects</h1>
      <div id='work' className='gallery'>
        <Project name='Kustom Ecommerce' image='/kustom/home-page.png' />
        <Project name='Hand on Demand' image='/helperr/home-page.png' />
        <Project name='Contact Keeper' image='/contact-keeper/home.png' />
        <Project name='Scheduler' image='/scheduler/home-page.png' />
        <Project name='Pizza Bytes' image='/pizza-bytes/home-page.png' />
        <Project name='Tweeter' image='/tweeter/home-page.png' />
      </div>
    </div>
  );
};

export default Work;
