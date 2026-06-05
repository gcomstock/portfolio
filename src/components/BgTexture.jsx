import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion.js';
import dotBg from '../assets/cross_bg.png';
import './BgTexture.css';

const PAGE_MAX = 1920;
const GUTTER   = 48;

export function BgTexture() {
  const innerRef = useRef(null);
  const reduced = useReducedMotion();

  // Lock background-position-x to the page left gutter
  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const updateX = () => {
      const vw = window.innerWidth;
      const x = vw > PAGE_MAX ? (vw - PAGE_MAX) / 2 + GUTTER : GUTTER;
      el.style.backgroundPositionX = `${x}px`;
    };
    updateX();
    window.addEventListener('resize', updateX, { passive: true });
    return () => window.removeEventListener('resize', updateX);
  }, []);

  // Parallax drift on Y
  useEffect(() => {
    if (reduced) return;
    const el = innerRef.current;
    if (!el) return;
    const onScroll = () => {
      el.style.backgroundPositionY = `${window.scrollY * 0.3}px`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [reduced]);

  return (
    <div className="BgTexture" aria-hidden="true">
      <div ref={innerRef} className="BgTexture-inner" style={{ backgroundImage: `url(${dotBg})` }} />
    </div>
  );
}
