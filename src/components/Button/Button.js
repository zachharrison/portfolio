import React from 'react';
// Variant type is outline | primary | secondary
import './Button.css';
const Button = (props) => {
  const { variant, children, onClick } = props;
  return (
    <button onClick={onClick} className='button button-primary'>
      {children}
    </button>
  );
};

export default Button;
