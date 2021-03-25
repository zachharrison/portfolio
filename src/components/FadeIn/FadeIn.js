import React, { useEffect, useState, useRef } from 'react';
import './FadeIn.css';

const FadeIn = (props) => {
  const [visible, setVisible] = useState(true);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div className={`fade-in ${visible ? 'visible' : ''}`} ref={domRef}>
      {props.children}
    </div>
  );
};

export default FadeIn;
