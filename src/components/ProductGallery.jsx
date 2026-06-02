import { useRef, useEffect } from 'react';
import './ProductGallery.css';

// Ease-out cubic — fast entry, slows as it lands flat
function easeOut(t) {
  return 1 - Math.pow(1 - t, 3);
}

function BrowserSlide({ src, alt, placeholder }) {
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
      const endPos = vh * 0.5 + rect.height * 0.5;
      const raw = Math.max(0, Math.min(1, (vh - rect.bottom) / (vh - endPos)));
      const t = easeOut(raw);

      const rx =  50 * (1 - t);
      const ry =   5 * (1 - t);
      const rz = -40 * (1 - t);
      const tz =  20 * (1 - t);
      el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) translateZ(${tz}px)`;
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
    <div ref={ref} className="ProductGallery-slide">
      <div className="BrowserFrame">
        <div className="BrowserFrame-chrome">
          <span className="BrowserFrame-dot" />
          <span className="BrowserFrame-dot" />
          <span className="BrowserFrame-dot" />
        </div>
        {placeholder
          ? <div className="BrowserFrame-placeholder" />
          : <img src={src} alt={alt} className="BrowserFrame-img" />
        }
      </div>
    </div>
  );
}

export { BrowserSlide };

export function ProductGallery({ children }) {
  return (
    <div className="ProductGallery">
      {children}
    </div>
  );
}
