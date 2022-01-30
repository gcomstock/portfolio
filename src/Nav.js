import React, { useState } from 'react';
import logo from './assets/logo.svg';
import './Nav.css';

import { Link, useLocation } from 'react-router-dom';



export function Nav() {
  const [isOpen, toggle] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <>
      <div className="menuIcon" onClick={() => toggle(!isOpen)} />
      <img src={logo} className="logo" alt="gregcomstock.com logo" width="102" height="112"/>
      <div className={`Nav ${isOpen ? "isOpen" : ""}`}>
        <div className="menuItems">
          <h3>case studies</h3>
          <Link className={splitLocation[1] === 'spotlight' ? 'active' : 'spotlight'} to="/spotlight">spotlight</Link>
          <Link className={splitLocation[1] === 'pandora' ? 'active' : ''} to="/pandora">pandora.com</Link>
          <Link className={splitLocation[1] === 'christy-natsumi' ? 'active' : ''} to="/christy-natsumi">christy natsumi</Link>
          <Link className={splitLocation[1] === 'spinnaker' ? 'active' : ''} to="/spinnaker">spinnaker</Link>
          <h3>projects</h3>
          <Link className={splitLocation[1] === 'pandora-careers' ? 'active' : ''} to="/pandora-careers">pandora careers</Link>
          <Link className={splitLocation[1] === 'screensim' ? 'active' : ''} to="/screensim">screensim</Link>
          <Link className={splitLocation[1] === 'pandora-windows' ? 'active' : ''} to="/pandora-windows">pandora for windows</Link>
        </div>
      </div>
    </>
  )
}
