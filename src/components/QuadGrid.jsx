import './QuadGrid.css';

export function QuadGrid({ images = [], logo, caption }) {
  return (
    <div className="QuadGrid-wrap">
      <div className="QuadGrid">
        {images.slice(0, 4).map((src, i) => (
          <img key={i} src={src} alt="" className="QuadGrid-img" loading="lazy" decoding="async" />
        ))}
        {logo && (
          <div className="QuadGrid-logo">
            <img src={logo} alt="" loading="lazy" decoding="async" />
          </div>
        )}
      </div>
      {caption && <p className="QuadGrid-caption">{caption}</p>}
    </div>
  );
}
