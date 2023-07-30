import React, { useRef } from "react";
import { useParallax } from 'react-scroll-parallax';

import { ProjectHeader } from './components/ProjectHeader';

import './CaseStudyPandora.css';
import img from './assets/placeholder.jpg';


export function CaseStudyPandora() {
  const target = useRef(null);
  const header = useParallax({
    speed: -30,
    rotateZ: [-13,-13],
    targetElement: target.current,
    rootMargin: { top: 0, left: 0, bottom: 700, right: 0 }
  });
  const cross = useParallax({
    speed: -500,
    targetElement: target.current
  });
  const filet = useParallax({
    speed: -15,
    rotateZ: [-13,-13],
    targetElement: target.current,
    rootMargin: { top: 0, left: 0, bottom: 700, right: 0 }
  });
  const filet2 = useParallax({
    speed: -15,
    rotateZ: [-13,-13],
    targetElement: target.current,
    rootMargin: { top: 0, left: 0, bottom: 700, right: 0 }
  });
  const banquet = useParallax({
    speed: -15,
    rotateZ: [-13,-13],
    targetElement: target.current,
    rootMargin: { top: 0, left: 0, bottom: 700, right: 0 }
  });
  const banquetTitle = useParallax({
    speed: 5,
    rotateZ: [-13,-13],
    targetElement: target.current,
    rootMargin: { top: 0, left: 0, bottom: 700, right: 0 }
  });
  const morsel = useParallax({
    speed: -15,
    rotateZ: [-13,-13],
    targetElement: target.current,
    rootMargin: { top: 0, left: 0, bottom: 700, right: 0 }
  });

  const PandoraContent = {
    projectHeader: {
      title: 'Pandora.com',
      subtitle: 'Bringing personalized music streaming to millions of listeners',
      description: [
        'Pandora is the largest ad-supported audio entertainment streaming service in the U.S. Since its launch in 2005, listeners could create and curate personalized music stations. Fast forward to 2016, and the music streaming landscape had changed. Pandora now wanted to support listening to any song on-demand, the creation of playlists, podcasts, live-event ticket purchases, and new levels of promotions and sponsorships. The web app was last refreshed in 2011, so bolting on all of these new features to a player that was still running flash and had little consideration for responsive design, was less feasible than a complete redesign.',
        'In 2016, I was working as a Front-end engineer in Pandora’s engineering org. Because of my design background and several years on the Pandora design team, I was responsible for the most prominent presentation-layer features: The now playing page, animations, transitions, and decisions around the responsive design. I also worked closely with the design team to spec out and implement all the behaviors around display ads.'
      ],
      credits: [
        {
          title: 'Frontend development',
          text: 'High-fidelity prototyping, UI, transitions, display ad implementation'
        },
        {
          title: 'Design',
          text: 'Display ad architecture, transitions'
        }
      ],
      tooling: [
        'React + Redux (Javascript ES6)', 'Webpack, npm, SASS', 'Sketch'
      ]
    }
  };


  return (
    <div className="CaseStudySpotlight">
      <div className="parallaxBg" ref={header.ref}/>
      <div className="crossBg" ref={cross.ref}/>


      <div className="WorkHeader">
      <div className="DeviceWeb">
        <div className="header">
          <div className="webBubble"/>
          <div className="webBubble"/>
          <div className="webBubble"/>
        </div>
        <img src={img} width="1200"/>
      </div>
      </div>


      <main>
        <ProjectHeader content={PandoraContent.projectHeader}/>

        <div className="Filet">
          <div className="Filet-bg slantedBg" ref={filet.ref}/>
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
          <div className="Filet-bg slantedBg" ref={filet2.ref}/>
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
          <div className="Banquet__spread">
            <div className="Banquet__spread__img"></div>
            <div className="Banquet__spread__img"></div>
            <div className="Banquet__spread__img"></div>
            <div className="Banquet__spread__img"></div>
          </div>
        </div>


        <div className="MainCourse">
          <h2>Bringing it<br/>all to life</h2>
          <hr className="imgNext"/>
          <br/>
          <div className="MainCourse__content">
            <div className="DeviceWeb">
              <div className="header">
                <div className="webBubble"/>
                <div className="webBubble"/>
                <div className="webBubble"/>
              </div>
              <img src={img} width="1200"/>
            </div>
            <div className="MainCourse__text">
              <p>Bacon ipsum dolor amet tri-tip strip steak jerky meatloaf chislic turducken cupim. Fatback corned beef ham hock swine spare ribs, jowl bresaola meatloaf frankfurter turkey doner. Filet mignon ribeye flank, shank strip steak beef ribs pork belly chuck porchetta boudin. Sirloin spare ribs burgdoggen, brisket cupim shank meatloaf chislic chicken shoulder leberkas tenderloin bacon. Fatback frankfurter cupim cow andouille chicken boudin, turducken corned beef strip steak sausage.</p>
            </div>
          </div>
        </div>


        <div className="Morsel">
          <div className="Morsel__bg" ref={morsel.ref}></div>
          <h2>Lessons<br/>Learned</h2>
          <p>Bacon ipsum dolor amet tri-tip strip steak jerky meatloaf chislic turducken cupim. Fatback corned beef ham hock swine spare ribs, jowl bresaola meatloaf frankfurter turkey doner. Filet mignon ribeye flank, shank strip steak beef ribs pork belly chuck porchetta boudin. Sirloin spare ribs burgdoggen, brisket cupim shank meatloaf chislic chicken shoulder leberkas tenderloin bacon. Fatback frankfurter cupim cow andouille chicken boudin, turducken corned beef strip steak sausage.</p>
        </div>


      </main>
    </div>
  )
};
