import { useEffect, useRef, useState } from 'react';
import './ImagePanel.css';

export function ImagePanel({ image, fadeImage, fadeBody, alt = '', title, href, children }) {
  const mediaRef = useRef(null);
  const [faded, setFaded] = useState(false);

  useEffect(() => {
    if (!fadeImage && !fadeBody) return;
    const el = mediaRef.current;
    if (!el) return;
    const onScroll = () => {
      const top = el.getBoundingClientRect().top;
      setFaded(top <= window.innerHeight * 0.35);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [fadeImage, fadeBody]);

  return (
    <div className="ImagePanel">
      <div ref={mediaRef} className={`ImagePanel-media${faded ? ' is-faded' : ''}`}>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="ImagePanel-img-link">
            <img src={image} alt={alt} className="ImagePanel-img" />
            {fadeImage && (
              <img src={fadeImage} alt="" aria-hidden="true" className="ImagePanel-img ImagePanel-img--fade" />
            )}
          </a>
        ) : (
          <>
            <img src={image} alt={alt} className="ImagePanel-img" />
            {fadeImage && (
              <img src={fadeImage} alt="" aria-hidden="true" className="ImagePanel-img ImagePanel-img--fade" />
            )}
          </>
        )}
      </div>
      <div className="ImagePanel-body">
        {title && <h3 className="ImagePanel-title">{title}</h3>}
        <div className={`ImagePanel-text-wrap${faded ? ' is-faded' : ''}`}>
          <div className="ImagePanel-text">{children}</div>
          {fadeBody && (
            <div className="ImagePanel-text ImagePanel-text--fade">{fadeBody}</div>
          )}
        </div>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="ImagePanel-cta"
          >
            Check it out
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
