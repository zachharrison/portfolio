import React from 'react';
// Variant type is outline | primary | secondary
import './Button.css';
const Button = (props) => {
  const { variant, children, onClick, background, link } = props;
  return link ? (
    <a
      className='button'
      style={{ background: background ? background : '' }}
      href={link}
      target='_blank'
    >
      {children}
    </a>
  ) : (
    <button
      className='button'
      style={{ background: background ? background : '' }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
