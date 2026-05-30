import { useParallax } from 'react-scroll-parallax';
import { useReducedMotion } from '../hooks/useReducedMotion.js';

/**
 * Vertical-drift parallax wrapper. `speed` mirrors react-scroll-parallax conventions:
 * negative = drifts slower than scroll (recedes / background), positive = drifts faster (foreground accent).
 */
export function ParallaxLayer({ speed = 0, className = '', style, children, as: Tag = 'div' }) {
  const reduced = useReducedMotion();
  const { ref } = useParallax({ speed: reduced ? 0 : speed });
  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
