import './ProjectIntro.css';

export function ProjectIntro({ content, color }) {
    const description = content.description.map(paragraph =>
      <p>{paragraph}</p>
    );
    const creditList = content.credits.map(credit =>
      <>
        <h4>{credit.title}</h4>
        <p>{credit.text}</p>
      </>
    );
    const toolingList = content.tooling.map(tool =>
      <p>{tool}</p>
    );

    return (
      <div className="ProjectIntro grid">
        <hgroup>
          {/* <h1 className="gradientText" style={{color:color}}>{content.title}</h1> */}
          <h1 style={{color:color}}>{content.title}</h1>
          <p style={{color:color}}>{content.subtitle}</p>
        </hgroup>
        <div className="ProjectIntro-main">
            <h3>Opportunity</h3>
            {description}
        </div>
        <div className="ProjectIntro-side">
          <h3>Credits</h3>
          {creditList}
          <h3>Tooling</h3>
          {toolingList}
        </div>
      </div>
    )
};