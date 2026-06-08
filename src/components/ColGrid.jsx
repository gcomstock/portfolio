import './ColGrid.css';

export function ColGrid({ children, cols }) {
  const style = cols ? { gridTemplateColumns: `repeat(${cols}, 1fr)` } : undefined;
  return <div className="ColGrid" style={style}>{children}</div>;
}

export function ColGridItem({ image, icon, placeholder, media, contain = false, transparent = false, span, imgMaxWidth, imgMaxHeight, title, children }) {
  const style = span ? { gridColumn: `span ${span}` } : undefined;
  const imgStyle = (imgMaxWidth || imgMaxHeight)
    ? { ...(imgMaxWidth ? { maxWidth: imgMaxWidth } : {}), ...(imgMaxHeight ? { maxHeight: imgMaxHeight } : {}) }
    : undefined;
  return (
    <div className="ColGrid-col" style={style}>
      {placeholder && <div className="ColGrid-placeholder" />}
      {media && <div className="ColGrid-media">{media}</div>}
      {image && (
        contain
          ? <div className={`ColGrid-img-wrap${transparent ? ' ColGrid-img-wrap--transparent' : ''}`}>
              <img src={image} alt="" className="ColGrid-img--natural" style={imgStyle} />
            </div>
          : <img src={image} alt="" className="ColGrid-img" />
      )}
      {icon && <div className="ColGrid-icon">{icon}</div>}
      {title && <h3 className="ColGrid-title">{title}</h3>}
      <div className="ColGrid-body">{children}</div>
    </div>
  );
}
