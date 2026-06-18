import { useRef, useEffect } from 'react';
import { BrowserFrame } from './BrowserFrame.jsx';
import './BrowserGrid.css';

function easeOut(t) {
  return 1 - Math.pow(1 - t, 3);
}

function BrowserCell({ src, alt, placeholder }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { el.style.transform = 'none'; return; }

    let rafId = null;

    function update() {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const startPos = vh * 1.15;
      const endPos   = vh * 0.5 + rect.height * 0.5;
      const raw = Math.max(0, Math.min(1, (startPos - rect.bottom) / (startPos - endPos)));
      const t = easeOut(raw);
      const rx    =  15 * (1 - t);
      const ry    =  10 * (1 - t);
      const rz    = -10 * (1 - t);
      const scale = 0.9 + 0.1 * t;
      el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${scale})`;
    }

    function onScroll() {
      if (rafId) return;
      rafId = requestAnimationFrame(() => { update(); rafId = null; });
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update,   { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <BrowserFrame
      ref={ref}
      className="BrowserGrid-frame"
      src={src}
      alt={alt || ''}
      placeholder={placeholder}
    />
  );
}

export function BrowserGrid({ images, alts }) {
  const count = images?.length || 4;
  return (
    <div className="BrowserGrid">
      {Array.from({ length: count }, (_, i) =>
        images
          ? <BrowserCell key={i} src={images[i]} alt={alts?.[i] || ''} />
          : <BrowserCell key={i} placeholder />
      )}
    </div>
  );
}
