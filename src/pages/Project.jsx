import { useParams, Link } from 'react-router-dom';
import { lazy, Suspense, useMemo } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { getProject } from '../content/projects/index.js';
import { MetaGrid } from '../components/MetaGrid.jsx';
import { FeatureBlock } from '../components/FeatureBlock.jsx';
import { Figure } from '../components/Figure.jsx';
import { VideoEmbed } from '../components/VideoEmbed.jsx';
import './Project.css';

// MDX content can use these without importing.
const mdxComponents = { FeatureBlock, Figure, VideoEmbed };

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
  return (
    <div className="page Project">
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

      <article className="Project-body">
        <MDXProvider components={mdxComponents}>
          <Suspense fallback={<div className="mono Project-loading">loading…</div>}>
            <Content components={mdxComponents} />
          </Suspense>
        </MDXProvider>
      </article>
    </div>
  );
}
