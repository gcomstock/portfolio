import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './CaseNav.css';

export function CaseNav({ sections, title }) {
  const [active, setActive] = useState(null);

  // Highlight whichever section last crossed the top of the viewport
  // (accounting for header 64px + this nav 32px = 96px offset)
  useEffect(() => {
    const OFFSET = 96 + 16; // a little breathing room

    const onScroll = () => {
      let current = null;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= OFFSET) {
          current = id;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sections]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const OFFSET = 64 + 32 + 16;
    // Live target: recomputed on demand so lazy-loaded images expanding mid-scroll
    // can't leave us at a stale pixel (the cause of the first-click-lands-short bug).
    const targetTop = () => Math.max(0, el.getBoundingClientRect().top + window.scrollY - OFFSET);

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo(0, targetTop());
      // Images below may still expand after the jump; correct once they've settled.
      setTimeout(() => window.scrollTo(0, targetTop()), 250);
      return;
    }

    const start = window.scrollY;
    const startTime = performance.now();
    const DURATION = 500;
    const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
    let cancelled = false;

    // A manual rAF loop (unlike native smooth scroll) won't abort when the user
    // scrolls, so mirror that behavior explicitly.
    const cancel = () => { cancelled = true; };
    const cleanup = () => {
      window.removeEventListener('wheel', cancel);
      window.removeEventListener('touchstart', cancel);
    };
    window.addEventListener('wheel', cancel, { passive: true });
    window.addEventListener('touchstart', cancel, { passive: true });

    const tick = (now) => {
      if (cancelled) { cleanup(); return; }
      const t = Math.min(1, (now - startTime) / DURATION);
      // Re-read the target each frame so growth mid-scroll is absorbed continuously.
      window.scrollTo(0, start + (targetTop() - start) * ease(t));
      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        cleanup();
        // Trailing images can expand right as we arrive; one settle pass locks it in.
        setTimeout(() => {
          if (!cancelled && Math.abs(targetTop() - window.scrollY) > 2) {
            window.scrollTo({ top: targetTop(), behavior: 'smooth' });
          }
        }, 80);
      }
    };
    requestAnimationFrame(tick);
  };

  return createPortal(
    <nav className="CaseNav" aria-label="Case study sections">
      <div className="CaseNav-inner">
        {title && <span className="CaseNav-title">{title}</span>}
        {sections.map(({ id, label }) => (
          <button
            key={id}
            className={`CaseNav-item${active === id ? ' is-active' : ''}`}
            onClick={() => scrollTo(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>,
    document.body
  );
}
