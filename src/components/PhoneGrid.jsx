import { PhoneFrame } from './PhoneFrame.jsx';
import './PhoneGrid.css';

export function PhoneGrid({ images = [] }) {
  return (
    <div className="PhoneGrid">
      {images.map((src, i) => (
        <div key={i} className="PhoneGrid-item">
          <PhoneFrame src={src} />
        </div>
      ))}
    </div>
  );
}
