import { SectionTitle } from './SectionTitle';
import './LayoutTwoCol.css';

export function LayoutTwoCol({ title, subSections }) {
  const sections = subSections.map(section =>
    <div className="LayoutTwoCol-subSection">
      <h3>{section.title}</h3>
      <p>{section.text}</p>
    </div>
  );

  return (
    <div className="LayoutTwoCol">
      <SectionTitle title={title} type={'center'}/>
      <div className="LayoutTwoCol-subSections grid">
        {sections}
      </div>
    </div>
  )
};