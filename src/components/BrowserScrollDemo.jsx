import { useEffect, useRef } from 'react';
import { BrowserFrame } from './BrowserFrame.jsx';
import './BrowserScrollDemo.css';

export function BrowserScrollDemo({ headerSrc, contentSrc, panDuration = 13, lazy = true }) {
  const contentRef = useRef(null);
  const viewportRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    const viewport = viewportRef.current;
    if (!content || !viewport) return;

    let alive = true;
    const timers = [];

    function later(fn, ms) {
      const id = setTimeout(() => { if (alive) fn(); }, ms);
      timers.push(id);
    }

    function setStyles(el, styles) {
      Object.assign(el.style, styles);
    }

    function runLoop() {
      const dist = content.offsetHeight - viewport.clientHeight;
      if (dist <= 0) { later(runLoop, 2000); return; }

      // Pan from top to bottom
      setStyles(content, {
        transition: `transform ${panDuration}s cubic-bezier(0.37, 0, 0.63, 1)`,
        transform: `translateY(-${dist}px)`,
      });

      // After pan + brief pause at bottom, fade out
      later(() => {
        setStyles(content, {
          transition: 'opacity 0.7s ease',
          opacity: '0',
        });

        // After fade out, reset position instantly then fade back in
        later(() => {
          setStyles(content, { transition: 'none', transform: 'translateY(0)' });

          // Two rAF ticks so the transition:none commits before re-adding opacity transition
          requestAnimationFrame(() => requestAnimationFrame(() => {
            if (!alive) return;
            setStyles(content, { transition: 'opacity 0.7s ease', opacity: '1' });
            later(runLoop, 900);
          }));
        }, 750);
      }, panDuration * 1000 + 800);
    }

    later(runLoop, 1200);

    return () => {
      alive = false;
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <BrowserFrame size="lg" className="BrowserScrollDemo">
      <div className="BrowserScrollDemo-viewport" ref={viewportRef}>
        {headerSrc && (
          <div className="BrowserScrollDemo-siteHeader">
            <img src={headerSrc} alt="" draggable="false" loading={lazy ? 'lazy' : undefined} decoding="async" />
          </div>
        )}
        <div className="BrowserScrollDemo-content" ref={contentRef}>
          <img src={contentSrc} alt="" draggable="false" loading={lazy ? 'lazy' : undefined} decoding="async" />
        </div>
      </div>
    </BrowserFrame>
  );
}
