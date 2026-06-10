import portraitSrc from '../content/projects/about/images/about-greg.jpg';
import { AIGanttChart } from '../components/AIGanttChart.jsx';
import './About.css';

const AI_SECTIONS = [
  {
    color: '#ff7fb4',
    title: 'Discovery & research',
    body: 'Define your problem space and AI can surface existing products worth studying, then help you identify commonalities and differences across them. A feature coverage table across competing products is a great research artifact and a fast one to produce.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="22" y2="22" />
      </svg>
    ),
  },
  {
    color: '#f0b86b',
    title: 'Low fidelity ideation',
    body: 'Claude Design is my current favorite for early-stage exploration. Going from one prompt to many possible directions in low fidelity mirrors how I worked before AI, just faster. It\'s a more efficient conversation starter than jumping straight to a high fidelity prototype.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.4 4.7-3.5 5.9V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.1C5.9 13.7 5 11.5 5 9a7 7 0 0 1 7-7z" /><line x1="9" y1="21" x2="15" y2="21" /><line x1="9" y1="17" x2="15" y2="17" />
      </svg>
    ),
  },
  {
    color: '#b48cff',
    title: 'High fidelity prototyping',
    body: 'Once you\'re ready to converge, Claude\'s design tools can carry you further if your design system is well integrated. My current preference is Claude Code since you get the full breadth of a normal developer\'s toolkit, including real data if API endpoints are available. Sometimes it makes sense to prototype directly in the repo. Familiarity with the project will help you make the right call.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    color: '#66d19e',
    title: 'Design validation',
    body: 'AI is a useful tool for capturing and synthesizing design feedback. Record your stakeholder reviews, usability sessions, or team critiques, then feed the transcripts into a model. It can pull out aggregate sentiments, recurring themes, and key pain points across multiple sessions, turning what used to be a manual synthesis pass into a structured summary you can act on quickly.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" />
      </svg>
    ),
  },
  {
    color: '#6aa9ff',
    title: 'Authoring design guidance for agents',
    body: 'Once you\'ve validated your direction, your leverage shifts toward guidance. Write skills that articulate your product\'s design philosophy holistically, not just as rules. Call out conventions you\'re intentionally breaking, especially any inherited patterns from your design system. If you want to propose a change back upstream, reconciling project guidance with system-level conventions is now something you can do yourself. As long as you\'ve worked out a contribution model with your design system owners and open up a pull request.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
  {
    color: '#4ecdc4',
    title: 'Design refinement',
    body: 'Agents will make poor design decisions regardless of how thorough your guidance is. Embed escalation criteria in your skills files to get looped in earlier, or establish a rhythm of design refinement pull requests, a periodic sweep over UI changes. I keep my PRs small and well-scoped even when authored with an LLM.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
      </svg>
    ),
  },
];

export function About() {
  return (
    <div className="page About">
      <section className="About-intro">
        <div className="About-introGrid">
          <div className="About-portrait">
            <img src={portraitSrc} alt="Greg Comstock" className="About-portraitImg" />
          </div>
          <div className="About-body">
            <h2 className="About-title">About Me</h2>
            <p className="About-bio">
              Born and raised in Southern California, I've called the Bay Area home since 2009,
              splitting time between San Francisco and Santa Cruz.
            </p>
            <p className="About-bio">
              My career has been shaped by a technical curiosity. I started in consumer design,
              doing e-commerce projects and advertising design and development, before moving into
              richer front-end application work at Pandora. That experience gave me a deep
              appreciation for the engineering workflow, and I carried it back into product design
              at Netflix, where I've spent much of my time on developer tooling: software delivery,
              observability, and the spaces in between.
            </p>
            <p className="About-bio">
              The team is always my first priority. With the right outlook and good camaraderie,
              any project can be a great one. AI makes the designer, developer, and product boundary blurrier than ever before. We're all dreamers, and we should all be invested
              in the direction and experience of the product.
            </p>
            <p className="About-bio">
              When I'm not at a screen, you can find me trail running, shooting photography,
              playing board games with friends, or making pottery in my garage with my
              wife and dog Walnut.
            </p>
          </div>
        </div>
      </section>

      <section className="About-ai">
        <h2 className="About-aiTitle">How I use AI in my workflow</h2>
        <p className="subhead About-aiSubhead">But ask me next week and I might have a different answer!</p>

        <AIGanttChart />

        <div className="About-aiSections">
          {AI_SECTIONS.map((s, i) => (
            <div key={s.title} className="About-aiSection">
              <div className="About-aiSection-icon" style={{ color: s.color }}>{s.icon}</div>
              <h3 className="ColGrid-title">
                <span className="About-aiSection-num" style={{ color: s.color }}>{String(i + 1).padStart(2, '0')} </span>
                {s.title}
              </h3>
              <p className="About-bio">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
