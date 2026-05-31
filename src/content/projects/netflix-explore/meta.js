import cover1 from './images/explore-1.png';
import cover2 from './images/explore-2.png';
import cover3 from './images/explore-3.png';

export default {
  kind: 'case-study',
  coverImages: [cover1, cover2, cover3],
  order: 1,
  number: '01',
  company: 'Netflix',
  title: 'Explore',
  subtitle: 'An observability troubleshooting product.',
  accent: 'blue',
  sections: [
    { id: 'discovery', label: 'Discovery' },
    { id: 'research',  label: 'Research'  },
    { id: 'pivot',     label: 'Pivot'     },
    { id: 'solution',  label: 'Solution'  },
    { id: 'reception',  label: 'Reception'   },
    { id: 'next-steps', label: 'Next Steps'  },
  ],
  metadata: [
    { label: 'Role', value: 'Product Designer' },
    { label: 'Team', value: 'Solo designer, end-to-end' },
    { label: 'Duration', value: 'TBD' },
    { label: 'Industry', value: 'Streaming / DevTools' },
    { label: 'Impact', value: 'TBD' },
  ],
};
