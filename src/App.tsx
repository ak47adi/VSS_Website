import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import PlatformPage from './components/PlatformPage';
import CandidatesPage from './components/CandidatesPage';
import NewsPage from './components/NewsPage';
import './App.css';

function App() {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage language={language} setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage language={language} />;
      case 'platform':
        return <PlatformPage language={language} />;
      case 'candidates':
        return <CandidatesPage language={language} />;
      case 'news':
        return <NewsPage language={language} />;
      case 'resources':
        return <div className="min-h-screen py-16">
          <div className="w-full px-6 lg:px-12">
            <h1 className={`text-4xl font-bold text-center mb-8 ${language === 'hi' ? 'font-hindi' : ''}`}>
              {language === 'en' ? 'Resources' : 'संसाधन'}
            </h1>
            <p className={`text-lg text-center text-gray-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
              {language === 'en' ? 'This page is under construction.' : 'यह पृष्ठ निर्माणाधीन है।'}
            </p>
          </div>
        </div>;
      case 'contact':
        return <div className="min-h-screen py-16">
          <div className="w-full px-6 lg:px-12">
            <h1 className={`text-4xl font-bold text-center mb-8 ${language === 'hi' ? 'font-hindi' : ''}`}>
              {language === 'en' ? 'Contact Us' : 'संपर्क करें'}
            </h1>
            <p className={`text-lg text-center text-gray-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
              {language === 'en' ? 'This page is under construction.' : 'यह पृष्ठ निर्माणाधीन है।'}
            </p>
          </div>
        </div>;
      default:
        return <HomePage language={language} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        language={language}
        setLanguage={setLanguage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer language={language} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
