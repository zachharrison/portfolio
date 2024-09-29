import React from 'react';
import './Footer.css';
import { getCurrentYear } from '../../utils/helpers';
const Footer = () => {
  return <footer>Zach Harrison &copy; {getCurrentYear()}</footer>;
};

export default Footer;
