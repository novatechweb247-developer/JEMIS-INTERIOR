import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { LoadingScreen } from './components/LoadingScreen';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Handle URL hash routing & synchronization
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'about', 'services', 'gallery', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EE] text-[#191A18] selection:bg-[#B99A65] selection:text-white">
      {!loadingComplete && (
        <LoadingScreen onComplete={() => setLoadingComplete(true)} />
      )}

      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-grow">
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
        {currentPage === 'about' && <About onNavigate={handleNavigate} />}
        {currentPage === 'services' && <Services onNavigate={handleNavigate} />}
        {currentPage === 'gallery' && <Gallery onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <Contact onNavigate={handleNavigate} />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
