import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  StarsCanvas,
  Navbar,
  Tech,
  Works,
} from './components';
function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center " > */}
        <div className="relative">
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        {/* </div> */}
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks/> */}
        <div className="relative z-0">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
