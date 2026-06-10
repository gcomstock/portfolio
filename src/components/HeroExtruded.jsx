import './HeroExtruded.css';

const WORDS = ['Dream,', 'Design,', 'Deliver.'];
const LAYERS = 36;
const STEP = 3;

export function HeroExtruded() {
  return (
    <div className="HeroExtruded">
      <div className="HeroExtruded-left">
        <div className="HeroExtruded-stack">
          {WORDS.map((word, wi) => (
            <div
              key={word}
              className="HeroExtruded-word"
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
                    className={`HeroExtruded-layer${isFront ? ' HeroExtruded-layer--front' : ''}`}
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

      <div className="HeroExtruded-right">
        <p className="HeroExtruded-intro">
          Hi! I'm Greg, a product designer from the San Francisco Bay Area.
        </p>
        <p className="HeroExtruded-tagline">
          It's a new day, full of new tools and tricks. There's never been a better time to ship fast and have fun doing it. Let's build something great together.
        </p>
      </div>
    </div>
  );
}
