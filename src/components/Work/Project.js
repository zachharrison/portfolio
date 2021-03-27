import React from 'react';
import './Work.css';

const Project = ({ image, name, description }) => {
  return (
    <div
      className='gallery-item'
      // style={{
      //   backgroundColor: 'rgba(0,0,0,0.5)',
      //   backgroundImage: `url(${image})`,
      //   backgroundRepeat: 'no-repeat',
      //   backgroundPosition: 'center',
      //   backgroundSize: 'cover',
      // }}
    >
      <button className='btn-dark'>Learn More</button>
      <img className='gallery-image' src={image} alt={name} />
    </div>
  );
};

export default Project;
