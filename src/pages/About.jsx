import './About.css';

export function About() {
  return (
    <div className="page About">
      <section className="About-intro">
        <div className="About-introGrid">
          <div className="About-portrait" aria-hidden="true">
            <span className="mono">portrait placeholder</span>
          </div>
          <div className="About-body">
            <div className="eyebrow">About</div>
            <h1 className="About-title">Greg Comstock</h1>
            <p className="subhead">
              Product designer specializing in tools for software engineers.
              {/* TODO: replace with real bio + interests paragraph */}
            </p>
            <p className="About-bio">
              Placeholder bio paragraph. Talk about background, interests, and the
              kinds of problems you like to work on.
            </p>
          </div>
        </div>
      </section>

      <section className="About-ai">
        <div className="eyebrow">How I use AI in my work</div>
        <h2 className="About-aiTitle">From discovery to ship</h2>
        <p className="subhead About-aiSubhead">
          {/* NOTE: revisit this section — Gantt chart may not be the right viz.
              Consider swimlane or annotated timeline. Stubbed for now. */}
          A walkthrough of where AI plugs into my design lifecycle.
        </p>
        <div className="GanttStub" aria-hidden="true">
          <div className="GanttStub-row"><span className="GanttStub-label mono">discovery</span><div className="GanttStub-bar" style={{ left: '0%', width: '22%', background: 'var(--accent-blue)' }} /></div>
          <div className="GanttStub-row"><span className="GanttStub-label mono">research</span><div className="GanttStub-bar" style={{ left: '12%', width: '28%', background: 'var(--accent-purple)' }} /></div>
          <div className="GanttStub-row"><span className="GanttStub-label mono">explore</span><div className="GanttStub-bar" style={{ left: '30%', width: '32%', background: 'var(--accent-green)' }} /></div>
          <div className="GanttStub-row"><span className="GanttStub-label mono">refine</span><div className="GanttStub-bar" style={{ left: '52%', width: '28%', background: 'var(--accent-amber)' }} /></div>
          <div className="GanttStub-row"><span className="GanttStub-label mono">ship</span><div className="GanttStub-bar" style={{ left: '74%', width: '22%', background: 'var(--accent-pink)' }} /></div>
        </div>
      </section>
    </div>
  );
}
