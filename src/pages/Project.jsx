import { useParams, Link } from 'react-router-dom';
import { lazy, Suspense, useMemo } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { getProject, listProjects } from '../content/projects/index.js';
import { MetaGrid } from '../components/MetaGrid.jsx';
import { FeatureBlock } from '../components/FeatureBlock.jsx';
import { Figure } from '../components/Figure.jsx';
import { VideoEmbed } from '../components/VideoEmbed.jsx';
import { CaseNav } from '../components/CaseNav.jsx';
import { ColGrid, ColGridItem } from '../components/ColGrid.jsx';
import { PullQuote } from '../components/PullQuote.jsx';
import { ImagePanel } from '../components/ImagePanel.jsx';
import { PhotoCollage } from '../components/PhotoCollage.jsx';
import { GradientBlock } from '../components/GradientBlock.jsx';
import { AnnotatedImage } from '../components/AnnotatedImage.jsx';
import { GanttChart } from '../components/GanttChart.jsx';
import { SpectrumChart } from '../components/SpectrumChart.jsx';
import { FeedbackFlow } from '../components/FeedbackFlow.jsx';
import { ProductPanel } from '../components/ProductPanel.jsx';
import { StatGrid, StatItem } from '../components/StatGrid.jsx';
import { Callout } from '../components/Callout.jsx';
import { BrowserGrid } from '../components/BrowserGrid.jsx';
import { SwarmGrid } from '../components/SwarmGrid.jsx';
import { ScrollDim } from '../components/ScrollDim.jsx';
import { CaseStudyFooterNav } from '../components/CaseStudyFooterNav.jsx';
import { ParallaxLayer } from '../components/ParallaxLayer.jsx';
import './Project.css';

// MDX content can use these without importing.
const mdxComponents = { FeatureBlock, Figure, VideoEmbed, ColGrid, ColGridItem, PullQuote, ImagePanel, PhotoCollage, GradientBlock, AnnotatedImage, GanttChart, SpectrumChart, FeedbackFlow, ProductPanel, StatGrid, StatItem, Callout, BrowserGrid, SwarmGrid, ScrollDim };

export function Project() {
  const { slug } = useParams();
  const entry = getProject(slug);

  const Content = useMemo(() => {
    if (!entry) return null;
    return lazy(entry.load);
  }, [entry]);

  if (!entry) {
    return (
      <div className="page Project-missing">
        <h1>Not found</h1>
        <p><Link to="/">Back to work</Link></p>
      </div>
    );
  }

  const { meta } = entry;
  const navTitle = [meta.company, meta.title].filter(Boolean).join(' · ');

  const caseStudies = listProjects('case-study');
  const currentIdx = caseStudies.findIndex(p => p.slug === slug);
  const nextEntry = caseStudies[(currentIdx + 1) % caseStudies.length];
  const prevEntry = caseStudies[(currentIdx - 1 + caseStudies.length) % caseStudies.length];
  return (
    <div className="Project">
      <div className="page Project-above-nav">
        <header className="Project-header">
          <div className="Project-eyebrow-row">
            <div className="eyebrow">
              {meta.kind === 'case-study' ? `Case study · ${meta.number || '01'} · ` : ''}{meta.company || meta.title}
            </div>
            {nextEntry && (
              <Link to={`/work/${nextEntry.slug}`} className="eyebrow Project-next-link">
                Next: {nextEntry.meta.title}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M5 2.5L9.5 7 5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            )}
          </div>
          <h1 className="Project-title">{meta.title}</h1>
          <p className="subhead Project-subhead">{meta.subtitle}</p>
        </header>

        <div className={`Project-hero${meta.coverImages?.length ? ' Project-hero--iso' : ''}`} aria-hidden="true">
          {meta.coverImages?.length ? (
            <ParallaxLayer speed={15} className="Project-heroStage">
              <div className="Project-heroCluster">
                <img src={meta.coverImages[0]} alt="" className="Project-heroImg Project-heroImg--back" />
                <img src={meta.coverImages[1]} alt="" className="Project-heroImg Project-heroImg--mid" />
                <img src={meta.coverImages[2]} alt="" className="Project-heroImg Project-heroImg--front" />
              </div>
            </ParallaxLayer>
          ) : (
            <span className="mono">final product hero placeholder</span>
          )}
        </div>

        {meta.metadata && <MetaGrid items={meta.metadata} />}
      </div>

      {meta.sections && <CaseNav sections={meta.sections} title={navTitle} />}

      <div className="page">
        <article className="Project-body">
          <MDXProvider components={mdxComponents}>
            <Suspense fallback={<div className="mono Project-loading">loading…</div>}>
              <Content components={mdxComponents} />
            </Suspense>
          </MDXProvider>
        </article>
      </div>

      {meta.kind === 'case-study' && (
        <CaseStudyFooterNav
          prev={prevEntry !== entry ? prevEntry : null}
          next={nextEntry !== entry ? nextEntry : null}
        />
      )}
    </div>
  );
}
