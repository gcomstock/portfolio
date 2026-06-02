import { useParams, Link } from 'react-router-dom';
import { lazy, Suspense, useMemo } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { getProject } from '../content/projects/index.js';
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
import './Project.css';

// MDX content can use these without importing.
const mdxComponents = { FeatureBlock, Figure, VideoEmbed, ColGrid, ColGridItem, PullQuote, ImagePanel, PhotoCollage, GradientBlock, AnnotatedImage, GanttChart, SpectrumChart, FeedbackFlow, ProductPanel, StatGrid, StatItem };

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
  return (
    <div className="Project">
      <div className="page Project-above-nav">
        <header className="Project-header">
          <div className="eyebrow Project-eyebrow">
            {meta.kind === 'case-study' ? `Case study · ${meta.number || '01'} · ` : ''}{meta.company || meta.title}
          </div>
          <h1 className="Project-title">{meta.title}</h1>
          <p className="subhead Project-subhead">{meta.subtitle}</p>
        </header>

        <div className="Project-hero" aria-hidden="true">
          <span className="mono">final product hero placeholder</span>
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
    </div>
  );
}
