import './ColGrid.css';

export function ColGrid({ children }) {
  return <div className="ColGrid">{children}</div>;
}

export function ColGridItem({ image, title, children }) {
  return (
    <div className="ColGrid-col">
      {image && <img src={image} alt="" className="ColGrid-img" />}
      {title && <h3 className="ColGrid-title">{title}</h3>}
      <div className="ColGrid-body">{children}</div>
    </div>
  );
}
