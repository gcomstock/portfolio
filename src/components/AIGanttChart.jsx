import { useRef, useEffect, useState } from 'react';
import './AIGanttChart.css';

const SEG = 100 / 6;
const OVERLAP = 1.5;

const ROWS = [
  { label: 'Discovery & Research',  color: '#ff7fb4', start: SEG * 0, end: SEG * 1 + OVERLAP },
  { label: 'Low Fidelity Ideation', color: '#f0b86b', start: SEG * 1, end: SEG * 2 + OVERLAP },
  { label: 'High Fidelity',         color: '#b48cff', start: SEG * 2, end: SEG * 3 + OVERLAP },
  { label: 'Design Validation',     color: '#66d19e', start: SEG * 3, end: SEG * 4 + OVERLAP },
  { label: 'Design Guidance',       color: '#6aa9ff', start: SEG * 4, end: 100 },
  { label: 'Agent · Feature Dev',   color: '#3d4556', start: SEG * 4, end: 100 },
  { label: 'Agent · Feature Dev',   color: '#3d4556', start: SEG * 4, end: 100 },
  { label: 'Agent · Feature Dev',   color: '#3d4556', start: SEG * 4, end: 100 },
  { label: 'Agent · Feature Dev',   color: '#3d4556', start: SEG * 4, end: 100 },
  { label: 'Agent · Feature Dev',   color: '#3d4556', start: SEG * 4, end: 100 },
  { label: 'Design Refinement',     color: '#4ecdc4', start: 91,      end: 100 },
];

export function AIGanttChart() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setVisible(true); return; }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { setVisible(entry.isIntersecting); },
      { threshold: 0.1, rootMargin: '0px 0px -25% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="AIGantt" ref={ref}>
      <div className="AIGantt-rows">
        {ROWS.map((row, i) => (
          <div key={i} className="AIGantt-row">
            <div className="AIGantt-label mono">{row.label}</div>
            <div className="AIGantt-track">
              <div
                className="AIGantt-bar"
                style={{
                  left: `${row.start}%`,
                  width: visible ? `${row.end - row.start}%` : '0%',
                  background: row.color,
                  transitionDelay: visible ? `${i * 70}ms` : '0ms',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
