import React from "react";
import { Parallax } from 'react-scroll-parallax';

export const Home = () => {
  return (
    <div className="Home">
      <Parallax translateY={[-20, 20]}>
        <h1>I am now home</h1>
      </Parallax>
      <h1>I am now home</h1>
    </div>
  )
}
