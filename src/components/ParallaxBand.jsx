import { useParallax } from 'react-scroll-parallax';
import { useReducedMotion } from '../hooks/useReducedMotion.js';
import './ParallaxBand.css';

export function ParallaxBand({ src, alt = '' }) {
  const reduced = useReducedMotion();
  const { ref } = useParallax({
    translateY: reduced ? [0, 0] : ['-20%', '20%'],
  });

  return (
    <div className="ParallaxBand">
      <div className="ParallaxBand-track" ref={ref}>
        <img src={src} alt={alt} className="ParallaxBand-img" loading="lazy" decoding="async" />
      </div>
    </div>
  );
}
