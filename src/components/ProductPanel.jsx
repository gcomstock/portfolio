import { useRef, useEffect, useState } from 'react';
import './ProductPanel.css';

function easeOut(t) {
  return 1 - Math.pow(1 - t, 3);
}

export function ProductPanel({ image, images, alt = '', title, href, cta, placeholder = false, solo = false, reverse = false, children }) {
  const frameRef = useRef(null);
  const imgList = images ?? (image ? [image] : []);
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (imgList.length < 2 || paused) return;
    const id = setInterval(() => setActiveIdx(i => (i + 1) % imgList.length), 3000);
    return () => clearInterval(id);
  }, [imgList.length, paused]);

  useEffect(() => {
    const el = frameRef.current;
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

  const frame = (
    <div ref={frameRef} className="ProductPanel-frame">
      <div className="ProductPanel-chrome">
        <span className="ProductPanel-dot" />
        <span className="ProductPanel-dot" />
        <span className="ProductPanel-dot" />
      </div>
      {placeholder
        ? <div className="ProductPanel-placeholder" />
        : imgList.length > 1
          ? (
            <div
              className="ProductPanel-img-wrap"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {imgList.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={i === 0 ? alt : ''}
                  className="ProductPanel-img ProductPanel-img--fade"
                  style={{ opacity: i === activeIdx ? 1 : 0 }}
                />
              ))}
            </div>
          )
          : <img src={imgList[0]} alt={alt} className="ProductPanel-img" />
      }
    </div>
  );

  const media = href
    ? <a href={href} target="_blank" rel="noopener noreferrer" className="ProductPanel-frame-link">{frame}</a>
    : frame;

  if (solo) {
    return (
      <div className="ProductPanel ProductPanel--solo">
        <div className="ProductPanel-media">
          {media}
        </div>
      </div>
    );
  }

  return (
    <div className={`ProductPanel${reverse ? ' ProductPanel--reverse' : ''}`}>
      <div className="ProductPanel-media">
        {media}
      </div>
      <div className="ProductPanel-body">
        {title && <h3 className="ProductPanel-title">{title}</h3>}
        <div className="ProductPanel-text">{children}</div>
        {cta && (
          <a href={cta.href || '#'} target="_blank" rel="noopener noreferrer" className="ProductPanel-cta">
            {cta.label}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
