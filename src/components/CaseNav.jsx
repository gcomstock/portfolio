import { useEffect, useState } from 'react';
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
    const offset = 64 + 32 + 16;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
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
    </nav>
  );
}
