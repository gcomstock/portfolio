import { useEffect, useState } from 'react';
import './CaseNav.css';

export function CaseNav({ sections, title }) {
  const [active,  setActive]  = useState(sections[0]?.id ?? null);
  const [visible, setVisible] = useState(false);

  // Fade in/out based on whether the first section has passed the main header
  useEffect(() => {
    const firstId = sections[0]?.id;
    if (!firstId) return;
    const onScroll = () => {
      const el = document.getElementById(firstId);
      if (!el) return;
      setVisible(el.getBoundingClientRect().top <= 64);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sections]);

  // Highlight whichever section is in view
  useEffect(() => {
    const els = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sections]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 64 + 32;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <nav
      className={`CaseNav${visible ? ' is-visible' : ''}`}
      aria-label="Case study sections"
    >
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
