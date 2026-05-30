import './MetaGrid.css';

/**
 * Monospaced key-value metadata row (Role, Industry, Duration, etc.).
 * Items: [{ label, value }]. Renders 2–5 columns; falls to 2 on mobile.
 */
export function MetaGrid({ items = [] }) {
  return (
    <dl className="MetaGrid mono" style={{ '--meta-cols': items.length }}>
      {items.map((it, i) => (
        <div className="MetaGrid-item" key={i}>
          <dt className="MetaGrid-label">{it.label}</dt>
          <dd className="MetaGrid-value">{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}
