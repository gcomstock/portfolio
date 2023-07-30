import './ProjectHeader.css';

export function ProjectHeader({ content }) {
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
      <div className="ProjectHeader">
        <hgroup>
          <h1 className="gradientText">{content.title}</h1>
          <p>{content.subtitle}</p>
        </hgroup>

        <div className="flex">
          <div className="flexMain">
              <h3>Opportunity</h3>
              <p>{description}</p>
          </div>
          <div className="flexSide">
            <h3>Credits</h3>
            {creditList}
            <h3>Tooling</h3>
            {toolingList}
          </div>
        </div>
      </div>
    )
};