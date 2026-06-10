import { Link } from 'react-router-dom';
import { listProjects } from '../content/projects/index.js';
import { HeroExtruded } from '../components/HeroExtruded.jsx';
import './Home.css';

export function Home() {
  const caseStudies = listProjects('case-study');
  const projects = listProjects('project');

  return (
    <div className="page Home">
      <div className="Hero">
        <HeroExtruded />
      </div>

      <section className="Home-cases">
        <div className="eyebrow Home-eyebrow">Selected work · Case studies</div>
        <div className="Home-caseList">
          {caseStudies.map((p) => (
            <CaseRow key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section className="Home-projects">
        <div className="eyebrow Home-eyebrow">Additional projects</div>
        <div className="Home-projectGrid">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

function CaseRow({ project }) {
  const { slug, meta } = project;
  const imgs = meta.coverImages;
  const hasIso = !!(imgs?.length);
  return (
    <Link to={`/work/${slug}`} className={`CaseRow${hasIso ? ' CaseRow--iso' : ''}`}>
      <div className={`CaseRow-media${hasIso ? ' CaseRow-media--iso' : ''}`} aria-hidden="true">
        {hasIso
          ? (
            <div className="CaseRow-isoStage">
              <img src={imgs[0]} alt="" className="CaseRow-isoImg CaseRow-isoImg--back" />
              <img src={imgs[1]} alt="" className="CaseRow-isoImg CaseRow-isoImg--mid" />
              <img src={imgs[2]} alt="" className="CaseRow-isoImg CaseRow-isoImg--front" />
            </div>
          )
          : <span className="mono">{meta.company} · cover image</span>
        }
      </div>
      <div className="CaseRow-body">
        <div className="eyebrow">{meta.company}</div>
        <h2 className="CaseRow-title">{meta.title}</h2>
        <p className="subhead CaseRow-subhead">{meta.subtitle}</p>
      </div>
    </Link>
  );
}

function ProjectCard({ project }) {
  const { slug, meta } = project;
  return (
    <Link to={`/work/${slug}`} className="ProjectCard">
      <div className="ProjectCard-media" aria-hidden="true">
        <span className="mono">{meta.title} · image</span>
      </div>
      <div className="ProjectCard-body">
        <h3 className="ProjectCard-title">{meta.title}</h3>
        <p className="ProjectCard-desc">{meta.subtitle}</p>
      </div>
    </Link>
  );
}
