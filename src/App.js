import Navbar from './components/Navbar/Navbar';
import Showcase from './components/Showcase/Showcase';
import About from './components/About/About';
import Social from './components/Social/Social';
import Work from './components/Work/Work';
import FadeIn from './components/FadeIn/FadeIn';

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
    </>
  );
};

export default App;
