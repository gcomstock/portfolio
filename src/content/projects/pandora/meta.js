import cover1 from './images/pandora-1200px-3.png';
import cover2 from './images/pandora-1200px-2.png';
import cover3 from './images/pandora-1200px-1.png';

export default {
  kind: 'case-study',
  coverImages: [cover1, cover2, cover3],
  order: 3,
  number: '03',
  company: 'Pandora',
  title: 'Pandora.com',
  subtitle: 'Placeholder — one sentence description of the Pandora case study.',
  accent: 'green',
  sections: [
    { id: 'discovery',     label: 'Problem Definition' },
    { id: 'research',      label: 'Research'      },
    { id: 'ads',           label: 'Ad Architecture' },
    { id: 'solution',      label: 'Solution'      },
    { id: 'reception',     label: 'Reception'     },
    { id: 'retrospective', label: 'Retrospective' },
  ],
  metadata: [
    { label: 'Role',     value: 'Front-end Engineer & Designer' },
    { label: 'Team',     value: 'TBD' },
    { label: 'Duration', value: 'TBD' },
    { label: 'Industry', value: 'Music / Consumer' },
    { label: 'Impact',   value: 'TBD' },
  ],
};
