import { Link } from 'react-router-dom';
import './CaseStudyFooterNav.css';

function ArrowLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M9 2.5L4.5 7 9 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M5 2.5L9.5 7 5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function CaseStudyFooterNav({ prev, next }) {
  return (
    <nav className="CaseStudyFooterNav">
      <div className="CaseStudyFooterNav-inner page">
        {prev ? (
          <Link to={`/work/${prev.slug}`} className="CaseStudyFooterNav-item CaseStudyFooterNav-item--prev">
            <div className="CaseStudyFooterNav-label">
              <ArrowLeft />
              <span className="mono">Previous</span>
            </div>
            <div className="CaseStudyFooterNav-title">
              {[prev.meta.company, prev.meta.title].filter(Boolean).join(' · ')}
            </div>
            <div className="CaseStudyFooterNav-subtitle">{prev.meta.subtitle}</div>
          </Link>
        ) : <div />}

        {next ? (
          <Link to={`/work/${next.slug}`} className="CaseStudyFooterNav-item CaseStudyFooterNav-item--next">
            <div className="CaseStudyFooterNav-label">
              <span className="mono">Next</span>
              <ArrowRight />
            </div>
            <div className="CaseStudyFooterNav-title">
              {[next.meta.company, next.meta.title].filter(Boolean).join(' · ')}
            </div>
            <div className="CaseStudyFooterNav-subtitle">{next.meta.subtitle}</div>
          </Link>
        ) : <div />}
      </div>
    </nav>
  );
}
