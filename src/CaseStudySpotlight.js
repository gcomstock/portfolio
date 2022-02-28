import React, { useRef } from "react";
import { useParallax } from 'react-scroll-parallax';

import './CaseStudySpotlight.css';



export function CaseStudySpotlight() {
  const target = useRef(null);
  const header = useParallax({
    speed: -30,
    rotateZ: [-13,-13],
    targetElement: target.current,
    rootMargin: { top: 0, left: 0, bottom: 700, right: 0 }
  });
  const filet = useParallax({
    speed: -10,
    rotateZ: [-13,-13],
    targetElement: target.current
  });
  const filet2 = useParallax({
    speed: -10,
    rotateZ: [-13,-13],
    targetElement: target.current
  });
  const banquet = useParallax({
    speed: -10,
    rotateZ: [-13,-13],
    targetElement: target.current
  });
  const banquetTitle = useParallax({
    speed: -5,
    rotateZ: [-13,-13],
    targetElement: target.current
  });

  return (
    <div className="CaseStudySpotlight">
      <div className="parallaxBg" ref={header.ref}/>


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
        <h1 className="gradientText">Pandora.com</h1>
        <div className="headerTagline">Enabling Netflix engineers to discover, create, and manage a mature microservice ecosystem</div>

        <div className="flex">
          <div className="flexMain">
            <h1 className="sub">Opportunity</h1>
            <p>
              Pandora began as a competior to terrestrial radio. Users would seed a music station with an artist or song, then provide feedback to craft their own personal station. After five years since the last rewrite of pandora.com, it was evident that in order to gracefully add on new features like on-demand listening, playlists, and podcasts, the product would need to be re-imagined. It also gave the engineering team an opportunity to shed Adobe Flash, and adopt modern frontend technologies.
            </p>
          </div>
          <div className="flexSide">
            <h3>Credits</h3>
            <h3 className="sub">Frontend development</h3>
            <p>High-fidelity prototyping, UI, transitions, display ad implementation</p>
            <h3 className="sub">Design</h3>
            <p>Display ad architecture, transitions</p>
            <h3>Tooling</h3>
            <p>
              React + Redux (Javascript ES6)<br/>
              Webpack, npm, SASS<br/>
              Sketch<br/>
              Photoshop<br/>
              Illustrator<br/>
            </p>
          </div>
        </div>


        <div className="Filet">
          <div className="Filet-bg" ref={filet.ref}/>
          <div className="Filet-img"></div>
          <div className="Filet-text">
            <h2>Research & Prototyping</h2>
            <hr/>
            <p>Bacon ipsum dolor amet tri-tip strip steak jerky meatloaf chislic turducken cupim. Fatback corned beef ham hock swine spare ribs, jowl bresaola meatloaf frankfurter turkey doner. Filet mignon ribeye flank, shank strip steak beef ribs pork belly chuck porchetta boudin. Sirloin spare ribs burgdoggen, brisket cupim shank meatloaf chislic chicken shoulder leberkas tenderloin bacon. Fatback frankfurter cupim cow andouille chicken boudin, turducken corned beef strip steak sausage.</p>
          </div>
        </div>


        <div className="Buffet">
          <h2>Display Ad Architecture</h2>
          <p>Bacon ipsum dolor amet tri-tip strip steak jerky meatloaf chislic turducken cupim. Fatback corned beef ham hock swine spare ribs, jowl bresaola meatloaf frankfurter turkey doner. Filet mignon ribeye flank, shank strip steak beef ribs pork belly chuck porchetta boudin. Sirloin spare ribs burgdoggen, brisket cupim shank meatloaf chislic chicken shoulder leberkas tenderloin bacon. Fatback frankfurter cupim cow andouille chicken boudin, turducken corned beef strip steak sausage.</p>
        </div>

        <div className="BuffetImg">
          <div className="fullImg"></div>
          <div className="fullImg"></div>
        </div>


        <div className="Filet">
          <div className="Filet-bg" ref={filet2.ref}/>
          <div className="Filet-img"></div>
          <div className="Filet-text">
            <h2>Display Ad Production Tool</h2>
            <hr/>
            <p>Bacon ipsum dolor amet tri-tip strip steak jerky meatloaf chislic turducken cupim. Fatback corned beef ham hock swine spare ribs, jowl bresaola meatloaf frankfurter turkey doner. Filet mignon ribeye flank, shank strip steak beef ribs pork belly chuck porchetta boudin. Sirloin spare ribs burgdoggen, brisket cupim shank meatloaf chislic chicken shoulder leberkas tenderloin bacon. Fatback frankfurter cupim cow andouille chicken boudin, turducken corned beef strip steak sausage.</p>
          </div>
        </div>


        <div className="Banquet">
          <div className="Banquet__bg slantedBg" ref={banquet.ref}/>
          <div className="Banquet__top">
            <div className="Banquet__top__title">
              <div className="Banquet__top__titlebg slantedBg" ref={banquetTitle.ref}/>
              <h2>Example <br/>Display Ads</h2>
            </div>
            <div className="Banquet__top__text">
              <p>Bacon ipsum dolor amet tri-tip strip steak jerky meatloaf chislic turducken cupim. Fatback corned beef ham hock swine spare ribs, jowl bresaola meatloaf frankfurter turkey doner. Filet mignon ribeye flank, shank strip steak beef ribs pork belly chuck porchetta boudin. Sirloin spare ribs burgdoggen, brisket cupim shank meatloaf chislic chicken shoulder leberkas tenderloin bacon. Fatback frankfurter cupim cow andouille chicken boudin, turducken corned beef strip steak sausage.</p>
            </div>
          </div>



        </div>


      </main>
    </div>
  )
};
