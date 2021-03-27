import React from 'react';
import Project from './Project';
import { projects } from '../../data';
import './Work.css';

const Work = () => {
  return (
    <div className='grid-container'>
      <h1>My Projects</h1>
      <div id='work' className='gallery'>
        {projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            images={project.images}
            description={project.description}
            code={project.code}
            website={project.website}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
