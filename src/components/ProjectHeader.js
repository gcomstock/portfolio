import React, { useRef } from "react";
import { useParallax } from 'react-scroll-parallax';
import { Device } from './Device';

import './ProjectHeader.css';

export function ProjectHeader({ color, webImage }) {
  const target = useRef(null);
  const bg = useParallax({
    speed: -30,
    rotateZ: [-13.4,-13.4],
    translateX: ['-50%','-50%'],
    targetElement: target.current,
    rootMargin: { top: 0, left: 0, bottom: 700, right: 0 }
  });

  return (
    <div className="ProjectHeader grid">
      <div className="ProjectHeader-bg slantedBg" ref={bg.ref} style={{backgroundColor:color}}/>
      <div className="ProjectHeader-web">
        <Device type={'web'} image={webImage}/>
      </div>
    </div>
  )
};