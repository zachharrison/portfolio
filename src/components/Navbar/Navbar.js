import React, { useEffect, useState } from 'react';
import { debounce } from '../../utils/helpers';
import './Navbar.css';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const [backgroundColor, setBackgroundColor] = useState('transparent');

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    console.log('The current scroll position is ', currentScrollPos);
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    if (currentScrollPos > 529) {
      console.log(currentScrollPos, backgroundColor);
      setBackgroundColor('#2e5195');
    } else {
      setBackgroundColor('transparent');
    }

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible, prevScrollPos, handleScroll]);

  return (
    <nav
      className='navbar'
      style={{
        top: visible ? '0' : '-300px',
        backgroundColor: backgroundColor,
      }}
    >
      <div className='nav-container'>
        <a href='#showcase'>
          <img className='logo' src='/ZH-logo/profile.png' alt='logo' />
        </a>
        <ul className='nav-links'>
          <li>
            <a className={'light-links'} href='#about'>
              About
            </a>
          </li>
          <li>
            <a className='light-links' href='#contact'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
