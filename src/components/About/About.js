import React, { useEffect, useState } from 'react';
import './About.css';
import FadeIn from '../FadeIn/FadeIn';

const About = () => {
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [visible, setVisible] = useState(true);

  // const handleScroll = () => {
  //   const currentScrollPos = window.pageYOffset;

  //   setVisible(currentScrollPos >= 700);

  //   // setPrevScrollPos(currentScrollPos);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  //   // console.log(window.pageYOffset);
  // }, []);

  return (
    <div id='about' className='container'>
      <FadeIn>
        <h1>About Me</h1>
      </FadeIn>
    </div>
  );
};

export default About;
