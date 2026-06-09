import './Footer.css';

export function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-inner page">
        <div className="Footer-row">
          <div className="Footer-brand">
            <div className="Footer-name">Greg Comstock</div>
            <div className="Footer-loc mono">San Francisco Bay Area</div>
          </div>
          <div className="Footer-links mono">
            <a href="mailto:gcomstock@gmail.com">gcomstock@gmail.com</a>
            <a href="https://www.linkedin.com/in/gregcomstock" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
