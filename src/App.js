import Navbar from './components/Navbar/Navbar';
import Showcase from './components/Showcase/Showcase';
import About from './components/About/About';
import Social from './components/Social/Social';
import Work from './components/Work/Work';
import FadeIn from './components/FadeIn/FadeIn';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Showcase />

      <FadeIn direction='up' delay={2}>
        <About />
      </FadeIn>

      <Social />

      <FadeIn direction='left' delay={2}>
        <Work />
      </FadeIn>

      <FadeIn direction='up' delay={2}>
        <Contact />
      </FadeIn>

      <Footer />
    </>
  );
};

export default App;
