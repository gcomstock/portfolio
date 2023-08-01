import './SectionTitle.css';

export function SectionTitle({ type, title, number }) {
  if (type == 'center') {
    return (
      <div className="SectionTitle-center">
        <h2>{title}</h2>
        <hr/>
      </div>
    )
  }
};
