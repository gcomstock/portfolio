import { useEffect, useRef, useState } from 'react';
import './ImagePanel.css';

export function ImagePanel({ image, images, placeholder = false, naturalSize = false, fadeImage, fadeBody, alt = '', title, href, cta, after, children }) {
  const mediaRef  = useRef(null);
  const pausedRef = useRef(false);
  const [faded, setFaded]       = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  // Scroll-triggered fade (single-image mode)
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

  // Slideshow auto-advance
  useEffect(() => {
    if (!images || images.length < 2) return;
    const id = setInterval(() => {
      if (!pausedRef.current) setActiveIdx(i => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [images]);

  const renderMedia = () => {
    if (placeholder) {
      return <div className="ImagePanel-placeholder" />;
    }

    if (images && images.length > 0) {
      return (
        <div
          className={`ImagePanel-slideshow${naturalSize ? ' ImagePanel-slideshow--natural' : ''}`}
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={i === 0 ? alt : ''}
              aria-hidden={i !== 0 ? 'true' : undefined}
              className={`ImagePanel-slide${i === activeIdx ? ' is-active' : ''}`}
            />
          ))}
        </div>
      );
    }

    if (href) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="ImagePanel-img-link">
          <img src={image} alt={alt} className="ImagePanel-img" />
          {fadeImage && <img src={fadeImage} alt="" aria-hidden="true" className="ImagePanel-img ImagePanel-img--fade" />}
        </a>
      );
    }

    return (
      <>
        <img src={image} alt={alt} className="ImagePanel-img" />
        {fadeImage && <img src={fadeImage} alt="" aria-hidden="true" className="ImagePanel-img ImagePanel-img--fade" />}
      </>
    );
  };

  return (
    <div className="ImagePanel">
      <div ref={mediaRef} className={`ImagePanel-media${naturalSize ? ' ImagePanel-media--natural' : ''}${faded ? ' is-faded' : ''}`}>
        {renderMedia()}
      </div>
      <div className="ImagePanel-body">
        {title && <h3 className="ImagePanel-title">{title}</h3>}
        <div className={`ImagePanel-text-wrap${faded ? ' is-faded' : ''}`}>
          <div className="ImagePanel-text">{children}</div>
          {fadeBody && <div className="ImagePanel-text ImagePanel-text--fade">{fadeBody}</div>}
        </div>
        {href && !images && (
          <a href={href} target="_blank" rel="noopener noreferrer" className="ImagePanel-cta">
            Check it out
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        )}
        {cta && (
          <a href={cta.href || '#'} target="_blank" rel="noopener noreferrer" className="ImagePanel-cta">
            {cta.label}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        )}
        {after && <div className="ImagePanel-after">{after}</div>}
      </div>
    </div>
  );
}
