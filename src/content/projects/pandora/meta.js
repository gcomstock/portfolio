import cover1 from './images/home-pandora-1.jpg';
import cover2 from './images/home-pandora-2.jpg';
import cover3 from './images/home-pandora-3.jpg';

export default {
  kind: 'case-study',
  coverImages: [cover3, cover2, cover1],
  order: 2,
  number: '02',
  company: 'Pandora',
  title: 'Pandora.com',
  subtitle: 'Bringing personalized music streaming to millions of listeners',
  accent: 'green',
  sections: [
    { id: 'discovery',     label: 'Problem Definition' },
    { id: 'research',      label: 'Research'      },
    { id: 'ads',           label: 'Ad Architecture' },
    { id: 'solution',      label: 'Solution'      },
    { id: 'reception',     label: 'Reception'     },
  ],
  metadata: [
    { label: 'Role',     value: 'Front-end Engineer\nProduct Designer (Advertising Design)\nInteraction Designer' },
    { label: 'Team',     value: '1 Product Manager\n1 Engineering Manager\n~7 Engineers\n2 Other Designers' },
    { label: 'Duration', value: '2016\n(about 10 months)' },
    { label: 'Industry', value: 'Music / Consumer' },
    { label: 'Tooling', value: 'React, Redux, Sass\nSketch\nPhotoshop\nIllustrator' },
  ],
};
