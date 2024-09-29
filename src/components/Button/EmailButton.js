import React from 'react';
import Button from './Button';
import './EmailButton.css';

export const EmailButton = () => {
  return (
    <Button
      onClick={() => (window.location.href = 'mailto:zharrison100@gmail.com')}
    >
      <div className='email-text-container'>
        <p className='button-text'>Email</p>
        {/* <svg
          className='email-logo'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 32 32'
        >
          <path
            fill='white'
            d='M29 4H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.72 2L16 14.77 3.72 6zM30 25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23z'
          />
        </svg> */}
        <i className='fa-solid fa-envelope'></i>
      </div>
    </Button>
  );
};
