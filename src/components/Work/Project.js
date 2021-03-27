import React from 'react';
import './Work.css';

const Project = ({ image, name, description }) => {
  return (
    <div className='gallery-item'>
      <img className='gallery-image' src={image} alt={name} />
    </div>
  );
};

export default Project;
