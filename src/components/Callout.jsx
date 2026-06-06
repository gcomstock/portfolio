import './Callout.css';

export function Callout({ eyebrow, icon, accent = 'blue', children }) {
  return (
    <div className={`Callout Callout--${accent}`}>
      {eyebrow && (
        <div className="Callout-eyebrow">
          {icon && <span className="Callout-icon">{icon}</span>}
          {eyebrow}
        </div>
      )}
      <div className="Callout-body">{children}</div>
    </div>
  );
}
