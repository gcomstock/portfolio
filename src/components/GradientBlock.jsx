import './GradientBlock.css';

export function GradientBlock({ accent = 'blue', children }) {
  return (
    <div className={`GradientBlock GradientBlock--${accent}`}>
      {children}
    </div>
  );
}
