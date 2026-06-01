import { useRef, useEffect, useState } from 'react';

export function FeedbackFlow() {
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

  const W = 580, H = 280;

  const inputs = [
    { label: 'User Voice',           y: 52  },
    { label: 'Slack',                y: 140 },
    { label: 'Customer Validation',  y: 228 },
  ];
  const iW = 168, iH = 34;

  const convX = 255, convY = 140;
  const outX = 318;
  const circleR = 11;

  const n = 9;
  const outYs = Array.from({ length: n }, (_, i) =>
    16 + Math.round(i * (H - 32) / (n - 1))
  );
  const stubWidths = [145, 115, 175, 130, 190, 110, 155, 100, 140];

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      style={{ display: 'block' }}
      aria-hidden="true"
    >
      {/* Lines: inputs → convergence */}
      {inputs.map((inp, i) => (
        <line
          key={`il${i}`}
          x1={iW} y1={inp.y}
          x2={convX} y2={convY}
          stroke="rgba(59,130,246,0.45)"
          strokeWidth="1.5"
        />
      ))}

      {/* Input boxes */}
      {inputs.map((inp, i) => (
        <g key={`ib${i}`}>
          <rect
            x={0} y={inp.y - iH / 2}
            width={iW} height={iH}
            rx={6}
            style={{ fill: 'var(--surface)', stroke: 'rgba(59,130,246,0.5)', strokeWidth: 1 }}
          />
          <text
            x={iW / 2} y={inp.y + 4}
            textAnchor="middle"
            style={{ fill: 'rgba(255,255,255,0.9)', fontFamily: "'Geist Mono', monospace", fontSize: 11 }}
          >
            {inp.label}
          </text>
        </g>
      ))}

      {/* Convergence dot */}
      <circle cx={convX} cy={convY} r={5} fill="#3b82f6" />

      {/* Lines: convergence → items */}
      {outYs.map((y, i) => (
        <line
          key={`ol${i}`}
          x1={convX} y1={convY}
          x2={outX} y2={y}
          stroke="rgba(59,130,246,0.22)"
          strokeWidth="1"
        />
      ))}

      {/* Numbered circles + stub lines — animate in sequentially */}
      {outYs.map((y, i) => (
        <g
          key={`oi${i}`}
          style={{
            opacity: visible ? 1 : 0,
            transform: `translateY(${visible ? 0 : 5}px)`,
            transition: `opacity 0.3s ease ${i * 65}ms, transform 0.3s ease ${i * 65}ms`,
          }}
        >
          <circle
            cx={outX + circleR} cy={y}
            r={circleR}
            style={{ fill: 'var(--surface)', stroke: 'rgba(59,130,246,0.65)', strokeWidth: 1 }}
          />
          <text
            x={outX + circleR} y={y + 4}
            textAnchor="middle"
            style={{ fill: '#3b82f6', fontFamily: "'Geist Mono', monospace", fontSize: 10, fontWeight: 700 }}
          >
            {i + 1}
          </text>
          <line
            x1={outX + circleR * 2 + 12} y1={y}
            x2={outX + circleR * 2 + 12 + stubWidths[i]} y2={y}
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </g>
      ))}
    </svg>
  );
}
