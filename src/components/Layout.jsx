import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { BgTexture } from './BgTexture.jsx';
import './Layout.css';

export function Layout({ children }) {
  return (
    <>
      <BgTexture />
      <Header />
      <div className="Layout-body">{children}</div>
      <Footer />
    </>
  );
}
