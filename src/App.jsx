import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components/Layout.jsx';
import { PageTransition } from './components/PageTransition.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Project } from './pages/Project.jsx';

export default function App() {
  const location = useLocation();
  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/work/:slug" element={<PageTransition><Project /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
