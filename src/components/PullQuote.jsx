import { ParallaxLayer } from './ParallaxLayer.jsx';
import './PullQuote.css';

// All foreground parallax elements share this speed — adjust here to dial in the whole layer.
const FOREGROUND_SPEED = 15;

export function PullQuote({ leadin, accent = 'purple', children }) {
  return (
    <div className={`PullQuote PullQuote--${accent}`}>
      <ParallaxLayer speed={FOREGROUND_SPEED} className="PullQuote-inner">
        {leadin && <p className="PullQuote-leadin">{leadin}</p>}
        <div className="PullQuote-quote">{children}</div>
      </ParallaxLayer>
    </div>
  );
}
