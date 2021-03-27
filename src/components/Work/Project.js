import React from 'react';
import './Work.css';

const Project = ({ image, name, description }) => {
  return (
    <div className='gallery-item'>
      <button className='btn-dark'>Learn More</button>
      <img className='gallery-image' src={image} alt={name} />
    </div>
  );
};

export default Project;
