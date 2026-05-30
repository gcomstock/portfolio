import './Figure.css';

export function Figure({ src, alt = '', caption, ratio = '16 / 9' }) {
  return (
    <figure className="Figure">
      <div className="Figure-media" style={{ aspectRatio: ratio }}>
        {src ? <img src={src} alt={alt} loading="lazy" /> : <span className="Figure-placeholder mono">image placeholder</span>}
      </div>
      {caption && <figcaption className="Figure-caption mono">{caption}</figcaption>}
    </figure>
  );
}
