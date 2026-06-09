import cover1 from './images/home-explore-1.png';
import cover2 from './images/home-explore-2.png';
import cover3 from './images/home-explore-3.png';

export default {
  kind: 'case-study',
  coverImages: [cover3, cover2, cover1],
  order: 1,
  number: '01',
  company: 'Netflix',
  title: 'Explore',
  subtitle: 'A comprehensive observability troubleshooting product',
  accent: 'blue',
  sections: [
    { id: 'discovery', label: 'Problem Definition' },
    { id: 'research',  label: 'Research'  },
    { id: 'proposal',  label: 'Proposal'  },
    { id: 'pivot',     label: 'Pivot'     },
    { id: 'solution',  label: 'Solution'  },
    { id: 'reception',  label: 'Reception'   },
    { id: 'next-steps', label: 'Next Steps'  },
  ],
  metadata: [
    { label: 'Role', value: 'Sole Product Designer\nUX Researcher' },
    { label: 'Team', value: '1 Product Manager\n1 Lead Engineer\n1 Engineering Manager\n3–5 Revolving Engineers' },
    { label: 'Duration', value: '2024 – 2026\n(on and off involvement)' },
    { label: 'Industry', value: 'Developer Productivity\n& Observability Tooling' },
  ],
};
