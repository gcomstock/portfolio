import './SectionText.css';

export function SectionText({ title, children }) {
  return (
    <div className="SectionText">
      <div className="SectionText-col">
        {title && <h3 className="SectionText-title">{title}</h3>}
        {children && <div className="SectionText-body">{children}</div>}
      </div>
    </div>
  );
}
