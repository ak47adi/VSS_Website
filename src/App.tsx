import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ScrollToTop from './components/ScrollToTop';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader';

// Route-level code-splitting to reduce mobile bundle size
const AboutPage = lazy(() => import('./components/AboutPage'));
const PlatformPage = lazy(() => import('./components/PlatformPage'));
const CandidatesPage = lazy(() => import('./components/CandidatesPage'));
const AssurancePage = lazy(() => import('./components/AssurancePage'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const NewsPage = lazy(() => import('./components/NewsPage'));
const NewsDetailPage = lazy(() => import('./components/NewsDetailPage'));
import './App.css';

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

// Main App Layout Component
function AppLayout() {
  // Initialize language from localStorage or default to Hindi
  const [language, setLanguage] = useState<'en' | 'hi'>(() => {
    const savedLanguage = localStorage.getItem('vss-website-language');
    return (savedLanguage as 'en' | 'hi') || 'hi';
  });
  const location = useLocation();
  const navigate = useNavigate();

  // Save language preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('vss-website-language', language);
  }, [language]);

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Get current page from URL path
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    return path.substring(1); // Remove leading slash
  };

  const setCurrentPage = (page: string) => {
    if (page === 'home') {
      navigate('/');
    } else {
      navigate(`/${page}`);
    }
    // Scroll to top after navigation
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        language={language}
        setLanguage={setLanguage}
        currentPage={getCurrentPage()}
        setCurrentPage={setCurrentPage}
      />
      <main className="flex-1">
  <Suspense fallback={<Loader message={language === 'en' ? 'Loading content…' : 'सामग्री लोड हो रही है…'} /> }>
          <Routes>
            <Route
              path="/"
              element={<HomePage language={language} setCurrentPage={setCurrentPage} />}
            />
            <Route
              path="/about"
              element={<AboutPage language={language} />}
            />
            <Route
              path="/platform"
              element={<PlatformPage language={language} setCurrentPage={setCurrentPage} />}
            />
            <Route
              path="/duta-elections"
              element={<CandidatesPage language={language} />}
            />
            {/* Backward compatibility: redirect old slug to new */}
            {/* <Route
            path="/members"
            element={<CandidatesPage language={language} />}
          /> */}
            <Route
              path="/assurance"
              element={<AssurancePage language={language} />}
            />
            <Route
              path="/contact"
              element={<ContactPage language={language} />}
            />
            <Route
              path="/news"
              element={<NewsPage language={language} />}
            />
            <Route
              path="/news/:slug"
              element={<NewsDetailPage language={language} />}
            />
            <Route
              path="/resources"
              element={
                <div className="min-h-screen py-16">
                  <div className="w-full px-6 lg:px-12">
                    <h1 className={`text-4xl font-bold text-center mb-8 ${language === 'hi' ? 'font-hindi' : ''}`}>
                      {language === 'en' ? 'Resources' : 'संसाधन'}
                    </h1>
                    <p className={`text-lg text-center text-gray-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                      {language === 'en' ? 'This page is under construction.' : 'यह पृष्ठ निर्माणाधीन है।'}
                    </p>
                  </div>
                </div>
              }
            />
            {/* Redirect any unknown routes to home */}
            <Route path="*" element={<HomePage language={language} setCurrentPage={setCurrentPage} />} />
          </Routes>
        </Suspense>
      </main>
      <Footer language={language} />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;