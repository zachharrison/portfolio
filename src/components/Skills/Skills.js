import React from 'react';
import './Skills.css';
import HtmlIcon from './icons/HtmlIcon';
import CSSIcon from './icons/CssIcon';
import TypescriptIcon from './icons/TypescriptIcon';
import ReactIcon from './icons/ReactIcon';
import ScssIcon from './icons/ScssIcon';
import VueIcon from './icons/VueIcon';
import NextIcon from './icons/NextIcon';
import StencilIcon from './icons/StencilIcon';
import WordpressIcon from './icons/WordpressIcon';
import StorybookIcon from './icons/StorybookIcon';
import CucumberIcon from './icons/CucumberIcon';
import FigmaIcon from './icons/FigmaIcon';
import VercelIcon from './icons/VercelIcon';
import RemixLogo from './icons/RemixLogo';
import GraphQLIcon from './icons/GraphQLIcon';

const Skills = () => {
  const skills = [
    <HtmlIcon />,
    <CSSIcon />,
    <TypescriptIcon />,
    <ReactIcon />,
    <FigmaIcon />,
    <VueIcon />,
    <ScssIcon />,
    <NextIcon />,
    <StencilIcon />,
    <RemixLogo />,
    <GraphQLIcon />,
    <WordpressIcon />,
    <StorybookIcon />,
    <CucumberIcon />,
    <VercelIcon />,
  ];
  return (
    <div className='skills-container'>
      <h1 className='skills-header'>Skills</h1>
      <div className='skills-grid'>
        {skills.map((skill, idx) => (
          <div key={skill + idx} className='icon-container'>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
