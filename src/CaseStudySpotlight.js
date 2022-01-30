import React, { useRef } from "react";
import { useParallax } from 'react-scroll-parallax';

import './CaseStudySpotlight.css';



export function CaseStudySpotlight() {
  const target = useRef(null);
  const mid = useParallax({
    speed: 50,
    rotateZ: [-13,-13],
    targetElement: target.current
  });

  return (
    <div className="CaseStudySpotlight">

      <div className="parallaxBg" ref={mid.ref}/>

      <div className="WorkHeader">


        <div className="DeviceWeb">
          <div className="header">
            <div className="webBubble"/>
            <div className="webBubble"/>
            <div className="webBubble"/>
          </div>

          <div className="img">
          </div>
        </div>
      </div>


      <main>
        <h1>Pandora.com</h1>
        <h4>Bringing personalized music streaming to millions of listeners</h4>
      </main>
    </div>
  )
};


/*

export const CaseStudySpotlight = () => (

    <div className="CaseStudySpotlight">

      <div className="parallaxBg" ref={mid.ref} />

      <div className="WorkHeader">


        <div className="DeviceWeb">
          <div className="header">
            <div className="webBubble"/>
            <div className="webBubble"/>
            <div className="webBubble"/>
          </div>

          <div className="img">
          </div>
        </div>

      </div>



      <main>
        <h1>Pandora.com</h1>
        <h4>Bringing personalized music streaming to millions of listeners</h4>
      </main>
    </div>
)
*/
