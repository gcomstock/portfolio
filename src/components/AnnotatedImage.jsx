import './AnnotatedImage.css';

function Annotation({ side, x, y, text, offsetY = 0 }) {
  const shift = `calc(-100% + ${72 + offsetY}px)`;
  const style =
    side === 'left'
      ? { left: 0, right: `calc(100% - ${x})`, top: y, transform: `translateY(${shift})` }
      : { left: x, right: 0, top: y, transform: `translateY(${shift})` };

  return (
    <div className={`AnnotatedImage-annotation AnnotatedImage-annotation--${side}`} style={style}>
      <span className="AnnotatedImage-text">{text}</span>
      <div className="AnnotatedImage-dot" />
    </div>
  );
}

export function AnnotatedImage({ image, alt = '', annotations = [], accent = 'blue' }) {
  return (
    <div className="AnnotatedImage" style={{ '--line-color': `var(--accent-${accent})` }}>
      <div className="AnnotatedImage-stage">
        <img src={image} alt={alt} className="AnnotatedImage-img" loading="lazy" decoding="async" />
        {annotations.map((ann, i) => (
          <Annotation key={i} {...ann} />
        ))}
      </div>
      <ul className="AnnotatedImage-mobile-list">
        {annotations.map((ann, i) => (
          <li key={i}>{ann.text}</li>
        ))}
      </ul>
    </div>
  );
}
