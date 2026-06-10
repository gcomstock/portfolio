import portraitSrc from '../content/projects/about/images/about-greg.jpg';
import './AboutHero.css';

const WORDS = ['Greg', 'Comstock'];
const LAYERS = 36;
const STEP = 3;

export function AboutHero() {
  return (
    <div className="AboutHero">
      <div className="AboutHero-portrait">
        <img src={portraitSrc} alt="Greg Comstock" className="AboutHero-img" />
      </div>

      <div className="AboutHero-nameStage">
        <div className="AboutHero-stack">
          {WORDS.map((word, wi) => (
            <div
              key={word}
              className="AboutHero-word"
              style={{ '--bob-delay': `${wi * -1.2}s` }}
            >
              {Array.from({ length: LAYERS }).map((_, i) => {
                const isFront = i === 0;
                const t = i / (LAYERS - 1);
                const style = { transform: `translateZ(${-i * STEP}px)` };
                if (!isFront) {
                  const alpha = 1 - t * t;
                  style.color = `hsla(${212 - t * 4}, ${52 - t * 16}%, ${38 - t * 14}%, ${alpha})`;
                }
                return (
                  <span
                    key={i}
                    className={`AboutHero-layer${isFront ? ' AboutHero-layer--front' : ''}`}
                    style={style}
                    aria-hidden={!isFront}
                  >
                    {word}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
