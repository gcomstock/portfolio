import './PhoneGrid.css';

export function PhoneGrid({ images = [] }) {
  return (
    <div className="PhoneGrid">
      {images.map((src, i) => (
        <div key={i} className="PhoneGrid-device">
          <div className="PhoneGrid-bar">
            <span className="PhoneGrid-pill" />
          </div>
          <img src={src} alt="" className="PhoneGrid-img" />
          <div className="PhoneGrid-footer" />
        </div>
      ))}
    </div>
  );
}
