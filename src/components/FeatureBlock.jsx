import { ParallaxLayer } from './ParallaxLayer.jsx';
import './FeatureBlock.css';

/**
 * The dominant content block: image in one column, subhead + body in the other.
 * Has a subtle accent gradient and drifts slightly faster than surrounding text.
 * Generous top/bottom margin keeps drift from colliding with neighbors.
 *
 * Props:
 *   accent   — 'blue' | 'purple' | 'green' | 'amber' | 'pink'
 *   speed    — parallax speed (default +6, very subtle)
 *   reverse  — flip column order
 *   eyebrow, title, children — content
 *   media    — node (image, video embed, placeholder)
 */
export function FeatureBlock({
  accent = 'blue',
  speed = 6,
  reverse = false,
  eyebrow,
  title,
  media,
  children,
}) {
  return (
    <ParallaxLayer speed={speed} className="FeatureBlock-wrap">
      <div className={`FeatureBlock FeatureBlock--${accent} ${reverse ? 'is-reverse' : ''}`}>
        <div className="FeatureBlock-media">{media}</div>
        <div className="FeatureBlock-body">
          {eyebrow && <div className="eyebrow FeatureBlock-eyebrow">{eyebrow}</div>}
          {title && <h3 className="FeatureBlock-title">{title}</h3>}
          <div className="FeatureBlock-copy">{children}</div>
        </div>
      </div>
    </ParallaxLayer>
  );
}
