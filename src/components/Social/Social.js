import React from 'react';
import './Social.css';

const Social = () => {
  return (
    <div className='social'>
      <ul className='social-icons'>
        <li>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://github.com/zachharrison'
          >
            <i className='fab fa-github' />
          </a>
        </li>

        <li>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://www.linkedin.com/in/zach-harrison-333974176/'
          >
            <i className='fab fa-linkedin' />
          </a>
        </li>
        <li>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://twitter.com/Zach__Harrison'
          >
            <i class='fa-brands fa-x-twitter'></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
