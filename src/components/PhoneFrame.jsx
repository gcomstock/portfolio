import './PhoneFrame.css';

export function PhoneFrame({ src, alt = '', iframeSrc, iframeRatio = '320/373', topImg, bottomImg, maxWidth, lazy = true }) {
  const style = {
    ...(maxWidth ? { maxWidth } : {}),
    ...(iframeSrc ? { minWidth: maxWidth || '362px', flexShrink: 0 } : {}),
  };
  const loading = lazy ? 'lazy' : undefined;
  return (
    <div className="PhoneFrame" style={style}>
      <div className="PhoneFrame-bar"><span className="PhoneFrame-pill" /></div>
      {topImg && <img src={topImg} alt="" className="PhoneFrame-chrome-img" loading={loading} decoding="async" />}
      {iframeSrc
        ? <iframe src={iframeSrc} className="PhoneFrame-iframe" title="" scrolling="no" style={{ aspectRatio: iframeRatio }} />
        : <img src={src} alt={alt} className="PhoneFrame-img" loading={loading} decoding="async" />
      }
      {bottomImg && <img src={bottomImg} alt="" className="PhoneFrame-chrome-img" loading={loading} decoding="async" />}
      <div className="PhoneFrame-footer" />
    </div>
  );
}
