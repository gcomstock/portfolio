import { forwardRef } from 'react';
import './BrowserFrame.css';

/**
 * The single browser-chrome primitive: a window with a three-dot title bar.
 * Used wherever a screenshot needs browser chrome (BrowserGrid, ProductPanel,
 * BrowserScrollDemo, the Project device hero).
 *
 * Props:
 *  - variant: 'raised' (gradient border + shadow, default) | 'flat' (plain border)
 *  - size:    'md' (default) | 'sm' (compact bar) | 'lg' (tall bar + deeper shadow)
 *  - src/alt: render an <img> as the content (lazy by default)
 *  - placeholder: render an empty 16:9 placeholder instead
 *  - children: supply custom content (carousel, scrolling viewport, etc.)
 *  - className/style: passed to the root; ref forwards to the root for scroll-tilt wrappers
 */
export const BrowserFrame = forwardRef(function BrowserFrame(
  { src, alt = '', placeholder = false, variant = 'raised', size = 'md', lazy = true, className = '', style, children },
  ref
) {
  const cls = ['BrowserFrame', `BrowserFrame--${variant}`, `BrowserFrame--${size}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={cls} style={style}>
      <div className="BrowserFrame-chrome">
        <span className="BrowserFrame-dot" />
        <span className="BrowserFrame-dot" />
        <span className="BrowserFrame-dot" />
      </div>
      {children != null
        ? children
        : placeholder
          ? <div className="BrowserFrame-placeholder" />
          : <img src={src} alt={alt} className="BrowserFrame-img" loading={lazy ? 'lazy' : undefined} decoding="async" />
      }
    </div>
  );
});
