import { useEffect, useRef, useState } from 'react';
import { ParallaxLayer } from './ParallaxLayer.jsx';
import './PhotoCollage.css';

// Default layout — used by the research screenshot collage (8 images, two rows).
const DEFAULT_CONFIGS = [
  { left: '0%',   top: '18%', width: '32%', rotate: '-1deg',   speed: 3,  zIndex: 4 },
  { left: '25%',  top: '14%', width: '37%', rotate: '0.8deg',  speed: 9,  zIndex: 6 },
  { left: '52%',  top: '3%',  width: '30%', rotate: '-0.5deg', speed: 5,  zIndex: 3 },
  { left: '74%',  top: '16%', width: '27%', rotate: '1.5deg',  speed: 12, zIndex: 5 },
  { left: '1%',   top: '47%', width: '34%', rotate: '0.5deg',  speed: 2,  zIndex: 7 },
  { left: '29%',  top: '50%', width: '29%', rotate: '-1.5deg', speed: 7,  zIndex: 8 },
  { left: '54%',  top: '46%', width: '31%', rotate: '1deg',    speed: 4,  zIndex: 2 },
  { left: '77%',  top: '62%', width: '24%', rotate: '-0.5deg', speed: 10, zIndex: 1 },
];

// Whiteboard sprint layout (5 images):
export const WHITEBOARD_CONFIGS = [
  { left: '0%',   top: '50%', width: '36%', rotate: '-0.8deg', speed: 4,  zIndex: 5 },
  { left: '0%',   top: '3%',  width: '26%', rotate: '0.6deg',  speed: 7,  zIndex: 4 },
  { left: '30%',  top: '52%', width: '34%', rotate: '-0.5deg', speed: 5,  zIndex: 6 },
  { left: '27%',  top: '0%',  width: '36%', rotate: '-0.8deg', speed: 8,  zIndex: 3 },
  { left: '64%',  top: '1%',  width: '36%', rotate: '1deg',    speed: 3,  zIndex: 2 },
];

function useScrollImageIdx(ref, count) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (count < 2) return;
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const { top } = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (top <= vh * 0.3) setIdx(1);
      else setIdx(0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [count]);

  return idx;
}

function CollageItem({ images, config }) {
  const cfg = config;
  const itemRef = useRef(null);
  const activeIdx = useScrollImageIdx(itemRef, images.length);

  return (
    <ParallaxLayer
      speed={cfg.speed}
      className="PhotoCollage-item"
      style={{ left: cfg.left, top: cfg.top, width: cfg.width, zIndex: cfg.zIndex }}
    >
      <div ref={itemRef} className="PhotoCollage-img-wrap" style={{ transform: `rotate(${cfg.rotate})` }}>
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden="true"
            className={`PhotoCollage-img${i === activeIdx ? ' is-active' : ''}`}
          />
        ))}
      </div>
    </ParallaxLayer>
  );
}

export function PhotoCollage({ images = [], imageSets, configs, layout: layoutName, title, children, maxWidth, stageHeight }) {
  const layout = configs ?? (layoutName === 'whiteboard' ? WHITEBOARD_CONFIGS : DEFAULT_CONFIGS);
  // imageSets = array of arrays; images = array of srcs (single image per cell)
  const sets = imageSets ?? images.map(src => [src]);
  const stageStyle = {
    ...(maxWidth ? { maxWidth, margin: '0 auto' } : {}),
    ...(stageHeight ? { height: stageHeight } : {}),
  };
  return (
    <div className="PhotoCollage">
      <div className="PhotoCollage-stage" style={Object.keys(stageStyle).length ? stageStyle : undefined}>
        {sets.map((imgs, i) => (
          <CollageItem key={i} images={imgs} config={layout[i % layout.length]} />
        ))}
      </div>
      {(title || children) && (
        <div className="PhotoCollage-footer">
          {title && <h2 className="PhotoCollage-title">{title}</h2>}
          {children && <div className="PhotoCollage-text">{children}</div>}
        </div>
      )}
    </div>
  );
}
