import React, { useRef } from "react";
import { useParallax } from 'react-scroll-parallax';
import './LayoutFeaturette.css';

export function LayoutFeaturette({ content, color }) {
  const target = useRef(null);
  const bg = useParallax({
    speed: -10,
    rotateZ: [-13.4,-13.4],
    targetElement: target.current,
    rootMargin: { top: 0, left: 0, bottom: 700, right: 0 }
  });
  const imageList = content.images.map(image =>
    <img src={process.env.PUBLIC_URL + 'work/' + image}/>
  );

  return (
    <div className="LayoutFeaturette grid">
      <div className="LayoutFeaturette-bg slantedBg" ref={bg.ref} style={{backgroundColor:color}}/>
      <div className="LayoutFeaturette-img">
        {imageList}
      </div>
      <div className="LayoutFeaturette-text">
        <h2>{content.title}</h2>
        <hr/>
        <p>{content.text}</p>
      </div>
    </div>
  )
};