import React, { useEffect, useState, useRef } from 'react';
import './FadeIn.css';
import { debounce } from '../../utils/helpers';
import { gsap } from 'gsap';

// const FadeIn = (props) => {
//   const [visible, setVisible] = useState(true);
//   const domRef = useRef();
//   const currentScrollPos = window.pageYOffset;
//   useEffect(
//     debounce(() => {
//       const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => setVisible(entry.isIntersecting));
//       });
//       if (observer.trackVisibility === false) {
//         console.log('something');
//       }
//       observer.observe(domRef.current);
//       return () => observer.unobserve(domRef.current);
//     }, [setVisible]),
//     100
//   );
//   return (
//     <div className={`fade-in ${visible ? 'visible' : ''}`} ref={domRef}>
//       {props.children}
//     </div>
//   );
// };

const FadeIn = ({
  children,
  wrapperElement = 'div',
  direction = null,
  delay = 0,
  ...props
}) => {
  const Component = wrapperElement;
  let compRef = useRef(null);
  const distance = 200;
  let fadeDirection;
  switch (direction) {
    case 'left':
      fadeDirection = { x: -distance };
      break;
    case 'right':
      fadeDirection = { x: distance };
      break;
    case 'up':
      fadeDirection = { y: distance };
      break;
    case 'down':
      fadeDirection = { y: -distance };
      break;
    default:
      fadeDirection = { x: 0 };
  }
  useEffect(() => {
    gsap.from(compRef.current, 1, {
      ...fadeDirection,
      opacity: 0,
      delay,
    });
  }, [compRef, fadeDirection, delay]);
  return (
    <Component ref={compRef} {...props}>
      {children}
    </Component>
  );
};

export default FadeIn;
