import './ColGrid.css';

export function ColGrid({ children }) {
  return <div className="ColGrid">{children}</div>;
}

export function ColGridItem({ image, icon, placeholder, media, title, children }) {
  return (
    <div className="ColGrid-col">
      {placeholder && <div className="ColGrid-placeholder" />}
      {media && <div className="ColGrid-media">{media}</div>}
      {image && <img src={image} alt="" className="ColGrid-img" />}
      {icon && <div className="ColGrid-icon">{icon}</div>}
      {title && <h3 className="ColGrid-title">{title}</h3>}
      <div className="ColGrid-body">{children}</div>
    </div>
  );
}
