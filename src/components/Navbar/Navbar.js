import React, { useEffect, useState } from 'react';
import { debounce } from '../../utils/helpers';
import './Navbar.css';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible, prevScrollPos, handleScroll]);

  return (
    <nav className='navbar' style={{ top: visible ? '0' : '-100px' }}>
      <div className='nav-container'>
        <img className='logo' src='/ZH-logo/profile.png' alt='logo' />
        <ul className='nav-links'>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Work</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
