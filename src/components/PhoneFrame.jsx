import './PhoneFrame.css';

export function PhoneFrame({ src, alt = '', iframeSrc, iframeRatio = '320/373', topImg, bottomImg, maxWidth }) {
  const style = {
    ...(maxWidth ? { maxWidth } : {}),
    ...(iframeSrc ? { minWidth: maxWidth || '362px', flexShrink: 0 } : {}),
  };
  return (
    <div className="PhoneFrame" style={style}>
      <div className="PhoneFrame-bar"><span className="PhoneFrame-pill" /></div>
      {topImg && <img src={topImg} alt="" className="PhoneFrame-chrome-img" />}
      {iframeSrc
        ? <iframe src={iframeSrc} className="PhoneFrame-iframe" title="" scrolling="no" style={{ aspectRatio: iframeRatio }} />
        : <img src={src} alt={alt} className="PhoneFrame-img" />
      }
      {bottomImg && <img src={bottomImg} alt="" className="PhoneFrame-chrome-img" />}
      <div className="PhoneFrame-footer" />
    </div>
  );
}
