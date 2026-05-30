import { ParallaxLayer } from './ParallaxLayer.jsx';
import './BgTexture.css';

/**
 * Site-wide back layer: subtle repeating texture that drifts slowly.
 * Swap the background-image URL once Greg provides the texture asset.
 */
export function BgTexture() {
  return (
    <div className="BgTexture" aria-hidden="true">
      <ParallaxLayer speed={-20} className="BgTexture-inner" />
    </div>
  );
}
