import React, { useEffect, useState } from 'react';
import './About.css';
import FadeIn from '../FadeIn/FadeIn';

const About = () => {
  return (
    <div id='about' className='container'>
      <FadeIn>
        <div className='about-content'>
          <div className='about-text'>
            <h1>Hey, I'm Zach</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              vitae quia enim voluptatem qui incidunt in nemo magni modi,
              doloribus optio, dolores voluptates. Autem, soluta! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sed dolore laborum
              tempore exercitationem autem explicabo in, neque est tempora nobis
              beatae ratione pariatur ducimus numquam expedita ea totam ut
              excepturi fugiat fugit corporis odit iusto illo!
              <br />
              <br />
              Dolores doloremque delectus reiciendis deleniti quae sapiente
              dignissimos eius. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Accusantium nam voluptatem aspernatur deserunt
              doloremque totam?
            </p>
          </div>
          <img src='/bio-image.jpg' className='bio-image' alt='bio-image' />
        </div>
      </FadeIn>
    </div>
  );
};

export default About;
