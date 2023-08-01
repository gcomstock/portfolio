import { ParallaxProvider } from 'react-scroll-parallax';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { useParallax } from 'react-scroll-parallax';


import { Nav } from './Nav';
import { Home } from './Home';
import { CaseStudySpotlight } from './CaseStudySpotlight';
import { CaseStudyPandora } from './CaseStudyPandora';

import './App.css';

function App() {
  // const bg = useParallax({
  //   speed: -500,
  //   targetElement: target.current
  // });

  return (
    <ParallaxProvider>
      <div className="App">
        {/* <div className="crossBg" ref={bg.ref} /> */}
        <Nav/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="spotlight" element={<CaseStudySpotlight/>} />
          <Route path="pandora" element={<CaseStudyPandora/>} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch/>} />
        </Routes>
      </div>
    </ParallaxProvider>
  );
}


function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}


export default App;
