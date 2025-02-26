import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Investors from './pages/Investors';
import Media from './pages/Media';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ProjectDetail from './pages/ProjectDetail';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <Router>
      <Helmet>
        <title>Manorath Infra - Building Tomorrow's Infrastructure</title>
        <meta name="description" content="Manorath Infra specializes in innovative infrastructure solutions, delivering quality and sustainability." />
        <meta name="keywords" content="Manorath Infra, infrastructure, construction, quality, sustainability" />
        <meta name="author" content="Manorath Infra" />
      </Helmet>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="bottom-right" />
      </div>
    </Router>
  );
};

export default App;