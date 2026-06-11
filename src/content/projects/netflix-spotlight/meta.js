import cover1 from './images/home-spotlight-1.jpg';
import cover2 from './images/home-spotlight-2.jpg';
import cover3 from './images/home-spotlight-3.jpg';

export default {
  kind: 'case-study',
  coverImages: [cover3, cover2, cover1],
  order: 3,
  number: '03',
  company: 'Netflix',
  title: 'Spotlight',
  subtitle: 'The front door for software ownership and development at Netflix',
  accent: 'purple',
  sections: [
    { id: 'discovery',       label: 'Problem Definition' },
    { id: 'research',        label: 'Research'           },
    { id: 'vision',          label: 'Vision Setting'     },
    { id: 'going-broad',     label: 'Going Broad'        },
    { id: 'narrowing-focus', label: 'Narrowing Focus'    },
    { id: 'solution',        label: 'Solution'           },
    { id: 'reception',       label: 'Reception'          },
  ],
  metadata: [
    { label: 'Role',     value: 'Sole Product Designer\nUX Researcher\nUI/UX Strategy' },
    { label: 'Team',     value: '1 Product Manager\n1 Engineering Manager\n3–5 Engineers' },
    { label: 'Duration', value: '2021 – early 2023\n(off and on involvement)' },
    { label: 'Industry', value: 'Developer Productivity\n& Tooling' },
  ],
};
