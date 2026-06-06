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
// two-row mosaic — small top-left, medium top-center, large right full-height,
// large bottom-left, large bottom-center.
export const WHITEBOARD_CONFIGS = [
  // 0: wb1 — RDX/Explore diagram, landscape — bottom-left, large
  { left: '0%',   top: '50%', width: '36%', rotate: '-0.8deg', speed: 4,  zIndex: 5 },
  // 1: wb2 — Dashboards list, portrait — top-left, smallest
  { left: '0%',   top: '3%',  width: '26%', rotate: '0.6deg',  speed: 7,  zIndex: 4 },
  // 2: wb3 — Large whiteboard wireframes — bottom-center, large
  { left: '30%',  top: '52%', width: '34%', rotate: '-0.5deg', speed: 5,  zIndex: 6 },
  // 3: wb4 — Wireframe sketches — top-center, medium
  { left: '27%',  top: '0%',  width: '36%', rotate: '-0.8deg', speed: 8,  zIndex: 3 },
  // 4: wb5 — Wall with many sketches, portrait — right, spans full height
  { left: '64%',  top: '1%',  width: '36%', rotate: '1deg',    speed: 3,  zIndex: 2 },
];

function CollageItem({ src, config }) {
  const cfg = config;
  return (
    <ParallaxLayer
      speed={cfg.speed}
      className="PhotoCollage-item"
      style={{ left: cfg.left, top: cfg.top, width: cfg.width, zIndex: cfg.zIndex }}
    >
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="PhotoCollage-img"
        style={{ transform: `rotate(${cfg.rotate})` }}
      />
    </ParallaxLayer>
  );
}

export function PhotoCollage({ images = [], configs, layout: layoutName, title, children, maxWidth }) {
  const layout = configs ?? (layoutName === 'whiteboard' ? WHITEBOARD_CONFIGS : DEFAULT_CONFIGS);
  return (
    <div className="PhotoCollage">
      <div className="PhotoCollage-stage" style={maxWidth ? { maxWidth, margin: '0 auto' } : undefined}>
        {images.map((src, i) => (
          <CollageItem key={i} src={src} config={layout[i % layout.length]} />
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
