import { useRef, useEffect } from 'react';
import './ProductPanel.css';

function easeOut(t) {
  return 1 - Math.pow(1 - t, 3);
}

export function ProductPanel({ image, alt = '', title, children }) {
  const frameRef = useRef(null);

  useEffect(() => {
    const el = frameRef.current;
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
    <div className="ProductPanel">
      <div className="ProductPanel-media">
        <div ref={frameRef} className="ProductPanel-frame">
          <div className="ProductPanel-chrome">
            <span className="ProductPanel-dot" />
            <span className="ProductPanel-dot" />
            <span className="ProductPanel-dot" />
          </div>
          <img src={image} alt={alt} className="ProductPanel-img" />
        </div>
      </div>
      <div className="ProductPanel-body">
        {title && <h3 className="ProductPanel-title">{title}</h3>}
        <div className="ProductPanel-text">{children}</div>
      </div>
    </div>
  );
}
