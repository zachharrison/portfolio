import React from 'react';
import '../Work/Work.css';

const Project = ({ image, name }) => {
  return (
    <div className='gallery-item'>
      <img className='gallery-image' src={image} alt={name} />
    </div>
  );
};

export default Project;
