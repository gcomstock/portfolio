import { useRef, useEffect } from 'react';
import './StatGrid.css';

function parseNumberStr(str) {
  const match = str.match(/^([^0-9]*)(\d+)([^0-9]*)$/);
  if (!match) return { prefix: '', value: 0, suffix: str };
  return { prefix: match[1], value: parseInt(match[2], 10), suffix: match[3] };
}

function formatSigns(str) {
  if (!str) return null;
  return str.split(/([%+$]|[A-Z]+)/).map((part, i) =>
    part && /^([%+$]|[A-Z]+)$/.test(part)
      ? <span key={i} className="StatItem-sign">{part}</span>
      : part || null
  );
}

function easeOut(t) {
  return 1 - Math.pow(1 - t, 3);
}

const DURATION = 1000;

export function StatGrid({ children }) {
  return <div className="StatGrid">{children}</div>;
}

export function StatItem({ number, label }) {
  const { prefix, value, suffix } = parseNumberStr(number);
  const itemRef = useRef(null);
  const numRef = useRef(null);
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const fromRef = useRef(0);
  const currentRef = useRef(0);

  useEffect(() => {
    const item = itemRef.current;
    const numEl = numRef.current;
    if (!item || !numEl) return;

    function animate(to, timestamp) {
      if (!startRef.current) {
        startRef.current = timestamp;
        fromRef.current = currentRef.current;
      }
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / DURATION, 1);
      const current = Math.round(fromRef.current + (to - fromRef.current) * easeOut(progress));
      currentRef.current = current;
      numEl.textContent = current;
      if (progress < 1) {
        rafRef.current = requestAnimationFrame((ts) => animate(to, ts));
      }
    }

    function startAnimation(to) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startRef.current = null;
      rafRef.current = requestAnimationFrame((ts) => animate(to, ts));
    }

    const observer = new IntersectionObserver(
      ([entry]) => { startAnimation(entry.isIntersecting ? value : 0); },
      { threshold: 0.1, rootMargin: '0px 0px -25% 0px' }
    );

    observer.observe(item);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value]);

  return (
    <div className="StatItem" ref={itemRef}>
      <div className="StatItem-number">
        {formatSigns(prefix)}
        <span ref={numRef}>0</span>
        {formatSigns(suffix)}
      </div>
      <div className="StatItem-label">{label}</div>
    </div>
  );
}
