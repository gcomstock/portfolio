import { useEffect, useRef, useState } from 'react';
import './SwarmGrid.css';

function useScrollImageIdx(ref, count) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (count < 2) return;
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const { top } = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (count >= 3 && top <= vh * 0.15) setIdx(2);
      else if (top <= vh * 0.5) setIdx(1);
      else setIdx(0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [count]);

  return idx;
}

function SwarmCell({ images = [] }) {
  const cellRef = useRef(null);
  const activeIdx = useScrollImageIdx(cellRef, images.length);

  return (
    <div ref={cellRef} className="SwarmCell">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          aria-hidden={i !== 0 ? 'true' : undefined}
          className={`SwarmCell-img${i === activeIdx ? ' is-active' : ''}`}
        />
      ))}
    </div>
  );
}

export function SwarmGrid({ cells = [] }) {
  return (
    <div className="SwarmGrid">
      {cells.map((images, i) => (
        <SwarmCell key={i} images={images} />
      ))}
    </div>
  );
}
