import { useRef, useEffect, useState } from 'react';
import './GanttChart.css';

const TOTAL = 21; // Jan 2025 → Oct 2026

const TIMELINE = [
  { label: 'Jan', year: '2025', pos: 0  },
  { label: 'Apr',               pos: 3  },
  { label: 'Jul',               pos: 6  },
  { label: 'Oct',               pos: 9  },
  { label: 'Jan', year: '2026', pos: 12 },
  { label: 'Apr',               pos: 15 },
  { label: 'Jul',               pos: 18 },
  { label: 'Oct',               pos: 21 },
];

const ROWS = [
  { label: 'Metrics',    color: '#e05c5c', start: 0,  end: 8  },
  { label: 'Logs',       color: '#4a8fd8', start: 3,  end: 12 },
  { label: 'Traces',     color: '#e8903a', start: 9,  end: 18 },
  { label: 'Events',     dashed: true,     start: 15, end: 21 },
  { label: 'Topology',   dashed: true,     start: 15, end: 21 },
  { label: 'Dashboards', dashed: true,     start: 15, end: 21 },
];

export function GanttChart() {
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
    <div className="GanttChart" ref={ref}>
      <div className="GanttChart-header">
        <div className="GanttChart-years">
          {TIMELINE.filter(t => t.year).map((t, i) => (
            <span key={i} className="GanttChart-year" style={{ left: `${(t.pos / TOTAL) * 100}%` }}>
              {t.year}
            </span>
          ))}
        </div>
        <div className="GanttChart-months">
          {TIMELINE.map((t, i) => (
            <span key={i} className="GanttChart-month" style={{ left: `${(t.pos / TOTAL) * 100}%` }}>
              {t.label}
            </span>
          ))}
        </div>
      </div>

      <div className="GanttChart-grid">
        {TIMELINE.map((t, i) => (
          <div key={i} className="GanttChart-gridline" style={{ left: `${(t.pos / TOTAL) * 100}%` }} />
        ))}
      </div>

      <div className="GanttChart-bars">
        {ROWS.map((row, i) => {
          const left  = (row.start / TOTAL) * 100;
          const width = ((row.end - row.start) / TOTAL) * 100;
          return (
            <div key={i} className="GanttChart-row">
              <div
                className={`GanttChart-bar${row.dashed ? ' GanttChart-bar--dashed' : ''}`}
                style={{
                  left: `${left}%`,
                  width: visible ? `${width}%` : '0',
                  backgroundColor: row.dashed ? undefined : row.color,
                  transitionDelay: visible ? `${i * 110}ms` : '0ms',
                }}
              >
                <span className="GanttChart-label">{row.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
