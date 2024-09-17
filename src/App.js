import Navbar from './components/Navbar/Navbar';
import Showcase from './components/Showcase/Showcase';
import About from './components/About/About';
import Social from './components/Social/Social';
import Work from './components/Work/Work';
import FadeIn from './components/FadeIn/FadeIn';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import { useEffect } from 'react';
const App = () => {
  useEffect(() => {
    const body = document.body;

    // Function to check for the class and disable scrolling
    const disableScrolling = () => {
      const modalOverlay = document.querySelector(
        '.ReactModal__Overlay--after-open'
      );

      if (modalOverlay) {
        body.style.overflow = 'hidden'; // Disable scrolling
      } else {
        body.style.overflow = ''; // Re-enable scrolling
      }
    };

    // Run the check initially and on DOM changes
    const observer = new MutationObserver(disableScrolling);
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
      body.style.overflow = ''; // Ensure scrolling is re-enabled if component unmounts
    };
  }, []);
  return (
    <>
      <Navbar />
      <Showcase />
      <Social />

      <FadeIn direction='up' delay={2}>
        <About />
      </FadeIn>

      {/* <FadeIn direction='left' delay={2}>
        <Skills />
      </FadeIn> */}

      {/* <FadeIn direction='left' delay={2}>
        <Work />
      </FadeIn> */}

      <FadeIn direction='up' delay={2}>
        <Contact />
      </FadeIn>

      <Footer />
    </>
  );
};

export default App;
