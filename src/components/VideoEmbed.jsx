import './VideoEmbed.css';

/**
 * TODO: pick a host (Vimeo / Cloudflare Stream / Bunny). Until then, renders a placeholder.
 * Keep the original asset path in `note` so future Greg knows where the master lives.
 */
export function VideoEmbed({ src, title = 'Video', note }) {
  if (!src || src === 'TBD') {
    return (
      <div className="VideoEmbed VideoEmbed--stub" role="img" aria-label={title}>
        <span className="mono">video placeholder · {note || title}</span>
      </div>
    );
  }
  return (
    <div className="VideoEmbed">
      <iframe src={src} title={title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen frameBorder="0" />
    </div>
  );
}
