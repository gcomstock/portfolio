import './GradientBlock.css';

export function GradientBlock({ accent = 'blue', compact = false, children }) {
  return (
    <div className={`GradientBlock GradientBlock--${accent}${compact ? ' GradientBlock--compact' : ''}`}>
      {children}
    </div>
  );
}
