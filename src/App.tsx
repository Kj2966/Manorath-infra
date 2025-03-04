import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoadingOptimizer from './components/LoadingOptimizer';
import { Helmet } from 'react-helmet';
import ScrollToTop from './components/ScrollToTop';
import Sitemap from './Sitemap'; // Import the Sitemap component

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Header = lazy(() => import('./components/layout/Header'));
const Footer = lazy(() => import('./components/layout/Footer'));
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Investors from './pages/Investors';
import Media from './pages/Media';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ProjectDetail from './pages/ProjectDetail';

// Simple loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[rgb(81,144,210)]"></div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Helmet>
        <title>Manorath Infra - Building Tomorrow's Infrastructure</title>
        <meta name="description" content="Manorath Infra specializes in innovative infrastructure solutions, delivering quality and sustainability." />
        <meta name="keywords" content="Manorath Infra, infrastructure, construction, quality, sustainability" />
        <meta name="author" content="Manorath Infra" />
      </Helmet>
      <LoadingOptimizer />
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about/*" element={<About />} />
              <Route path="/services/*" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/media" element={<Media />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/sitemap.xml" element={<Sitemap />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="bottom-right" />
        </div>
      </Suspense>
    </Router>
  );
};

export default App;