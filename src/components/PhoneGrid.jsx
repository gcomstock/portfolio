import { PhoneFrame } from './PhoneFrame.jsx';
import './PhoneGrid.css';

export function PhoneGrid({ images = [], items, maxWidth, wrap }) {
  const resolved = items ?? images.map(src => ({ src }));
  return (
    <div className={`PhoneGrid${wrap ? ' PhoneGrid--wrap' : ''}`}>
      {resolved.map((item, i) => (
        <div key={i} className="PhoneGrid-item">
          <PhoneFrame src={item.src} iframeSrc={item.iframe} topImg={item.topImg} bottomImg={item.bottomImg} maxWidth={maxWidth} />
        </div>
      ))}
    </div>
  );
}
