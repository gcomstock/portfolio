import { useRef, useEffect, useState } from 'react';
import './SpectrumChart.css';

export function SpectrumChart() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setVisible(true); return; }

    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1, rootMargin: '0px 0px -25% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="SpectrumChart" ref={ref}>
      <div className="SpectrumChart-axis">
        <span>Novice</span>
        <span>Expert</span>
      </div>
      <div className="SpectrumChart-track">
        <div
          className="SpectrumChart-fill"
          style={{ width: visible ? '75%' : '0%' }}
        >
          <span className="SpectrumChart-fill-label">Use cases</span>
        </div>
      </div>
    </div>
  );
}
