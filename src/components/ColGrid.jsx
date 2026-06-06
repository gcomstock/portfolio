import './ColGrid.css';

export function ColGrid({ children }) {
  return <div className="ColGrid">{children}</div>;
}

export function ColGridItem({ image, icon, placeholder, media, contain = false, transparent = false, title, children }) {
  return (
    <div className="ColGrid-col">
      {placeholder && <div className="ColGrid-placeholder" />}
      {media && <div className="ColGrid-media">{media}</div>}
      {image && (
        contain
          ? <div className={`ColGrid-img-wrap${transparent ? ' ColGrid-img-wrap--transparent' : ''}`}><img src={image} alt="" className="ColGrid-img--natural" /></div>
          : <img src={image} alt="" className="ColGrid-img" />
      )}
      {icon && <div className="ColGrid-icon">{icon}</div>}
      {title && <h3 className="ColGrid-title">{title}</h3>}
      <div className="ColGrid-body">{children}</div>
    </div>
  );
}
