import React, { useEffect, useState } from 'react';
import { debounce } from '../../utils/helpers';
import './Navbar.css';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [linkColor, setLinkColor] = useState('light');

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    if (currentScrollPos > 1000) {
      setLinkColor('dark');
    } else {
      setLinkColor('light');
    }

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible, prevScrollPos, handleScroll]);

  return (
    <nav className='navbar' style={{ top: visible ? '0' : '-120px' }}>
      <div className='nav-container'>
        <img className='logo' src='/ZH-logo/profile.png' alt='logo' />
        <ul className='nav-links'>
          <li>
            <a
              className={linkColor === 'light' ? 'light-links' : 'dark-links'}
              href='#about'
            >
              About
            </a>
          </li>
          <li>
            <a
              className={linkColor === 'light' ? 'light-links' : 'dark-links'}
              href='#work'
            >
              Work
            </a>
          </li>
          <li>
            <a
              className={linkColor === 'light' ? 'light-links' : 'dark-links'}
              href='#contact'
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
