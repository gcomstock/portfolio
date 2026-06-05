import './Callout.css';

export function Callout({ eyebrow, accent = 'blue', children }) {
  return (
    <div className={`Callout Callout--${accent}`}>
      {eyebrow && <div className="Callout-eyebrow">{eyebrow}</div>}
      <div className="Callout-body">{children}</div>
    </div>
  );
}
