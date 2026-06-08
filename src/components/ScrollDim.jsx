import { useEffect, useRef } from 'react';
import './ScrollDim.css';

export function ScrollDim({ children, targetOpacity = 0.5, threshold = 0.5, strikethrough = false, invert = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const { top } = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const t = Math.max(0, Math.min(1, (vh - top) / (vh * (1 - threshold))));
      el.style.opacity = invert
        ? targetOpacity + t * (1 - targetOpacity)
        : 1 - t * (1 - targetOpacity);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [targetOpacity, threshold, invert]);

  return (
    <div
      ref={ref}
      className={strikethrough ? 'ScrollDim--strikethrough' : undefined}
      style={{ display: 'grid', gridRow: 'span 3', gridTemplateRows: 'subgrid' }}
    >
      {children}
    </div>
  );
}
