import './PhoneFrame.css';

export function PhoneFrame({ src, alt = '' }) {
  return (
    <div className="PhoneFrame">
      <div className="PhoneFrame-bar">
        <span className="PhoneFrame-pill" />
      </div>
      <img src={src} alt={alt} className="PhoneFrame-img" />
      <div className="PhoneFrame-footer" />
    </div>
  );
}
