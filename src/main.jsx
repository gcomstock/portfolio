import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import App from './App.jsx';
import './styles/tokens.css';
import './styles/base.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </BrowserRouter>
  </React.StrictMode>
);
