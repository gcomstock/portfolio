import React, { useRef } from "react";
import { useParallax } from 'react-scroll-parallax';
import './LayoutTwoColBG.css';

export function LayoutTwoColBG({ content }) {
  const target = useRef(null);
  const bg = useParallax({
    speed: -15,
    rotateZ: [-13,-13],
    targetElement: target.current,
    rootMargin: { top: 0, left: 0, bottom: 700, right: 0 }
  });

  console.log(process.env.PUBLIC_URL);
  const imageList = content.images.map(image =>
    <img src={process.env.PUBLIC_URL + 'work/' + image}/>
  );

  return (
    <div className="LayoutTwoColBG grid">
      <div className="LayoutTwoColBG-bg slantedBg" ref={bg.ref}/>
      <div className="LayoutTwoColBG-img">
        {imageList}
      </div>
      <div className="LayoutTwoColBG-text">
        <h2>{content.title}</h2>
        <hr/>
        <p>{content.text}</p>
      </div>
    </div>
  )
};