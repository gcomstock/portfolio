import { ProjectHeader } from './components/ProjectHeader';
import { ProjectIntro } from './components/ProjectIntro';
import { LayoutFeaturette } from './components/LayoutFeaturette';
import { LayoutTwoCol } from './components/LayoutTwoCol';
import { SectionTitle } from './components/SectionTitle';

import './CaseStudyPandora.css';
import img from './assets/placeholder.jpg';

export function CaseStudyPandora() {
  const PandoraContent = {
    color: '#5E62E1',
    ProjectHeader: {
      webImage: 'pandora/pandora-hero.png'
    },
    ProjectIntro: {
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
    },
    researchAndPrototyping: {
      images: [
        'pandora/pandora-prototype.gif'
      ],
      title: 'Research & Prototyping',
      text: 'Although the feature set for Pandora.com was already established by its mobile counterparts, many UX considerations still needed validation. I worked closely with our UX researcher to craft user journeys around signup, onboarding, music discovery and playback. Then, I created a high fidelity, interactive prototype in the browser, so we could utilize existing audio API endpoints and respond to user input. Our efforts reduced signup friction by allowing users to listen to music in an anonymous state, with reduced ads, and dismissable prompts following specific interactions.'
    },
    displayAdArchitecture: {
      title: 'Display Ad Architecture',
      subSections: [
        {
          title: 'Ad Networks',
          text: 'Pandora is predominantly an ad-supported business. With the site redesign came an opportunity to rethink what was possible with display advertising. The bread and butter standard banner sizes needed to be supported, along with all of their requirements. Is the browser tab focused? Is the ad 100% within the viewport? Is it obstructed in any way by other DOM elements or CSS properties? How long must it be on the page before being replaced? Invisible network requests and pixel trackers try to enforce fair play across ad networks, and must be considered in the implementation.'
        },
        {
          title: 'In-house Promotions',
          text: 'Display advertising can be more than banners, though. Pandora has an in-house brand design team that makes use of ad inventory to promote artists, live events, album releases, new product features, and more. We wanted to empower these efforts to be visually stunning, and give designers more freedom than an isolated display ad box to work with. We worked closely to devise layouts for each banner type, and their corresponding takeover skins. In-house ads would be part of the regular pool of display ads, with an extra bit of javascript that passes some arguments on what visual assets to fetch and display in tandem with the ad. Below are a couple artifacts I produced toward the end of the process to communicate to a larger audience.'
        }
      ],
      images: [
        'pandora/pandora-ad-skin-options.jpg',
        'pandora/pandora-ad-skin-layers.jpg'
      ]
    }
  };


  return (
    <div className="CaseStudySpotlight">
      {/* <div className="crossBg" ref={cross.ref}/> */}
      {/* <div className="crossBg" /> */}

      <main>
        <ProjectHeader color={PandoraContent.color} webImage={PandoraContent.ProjectHeader.webImage}/>
        <ProjectIntro content={PandoraContent.ProjectIntro} color={PandoraContent.color}/>
        <LayoutFeaturette content={PandoraContent.researchAndPrototyping} color={PandoraContent.color}/>
        <LayoutTwoCol
          title={PandoraContent.displayAdArchitecture.title}
          subSections={PandoraContent.displayAdArchitecture.subSections}
        />


        <div className="BuffetImg">
          <div className="fullImg"></div>
          <div className="fullImg"></div>
        </div>

      </main>
    </div>
  )
};
