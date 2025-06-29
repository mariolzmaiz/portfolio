
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import PaintingGrid from './components/PaintingGrid';
import PaintingModal from './components/PaintingModal';
import AboutMePage from './components/AboutMePage'; // Ensured relative path
import { PAINTINGS_DATA, ARTIST_NAME } from './constants'; // Import ARTIST_NAME
import { Painting } from './types';

export type Page = 'portfolio' | 'about';

const App: React.FC = () => {
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>('portfolio');

  const openModalWithPainting = useCallback((painting: Painting) => {
    setSelectedPainting(painting);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedPainting(null);
  }, []);

  const handleNavigate = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 antialiased">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="container mx-auto p-4 sm:p-6 md:p-8">
        {currentPage === 'portfolio' && (
          <PaintingGrid paintings={PAINTINGS_DATA} onPaintingClick={openModalWithPainting} />
        )}
        {currentPage === 'about' && <AboutMePage />}
      </main>
      {selectedPainting && currentPage === 'portfolio' && (
        <PaintingModal painting={selectedPainting} onClose={closeModal} />
      )}
      <footer className="text-center p-6 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {ARTIST_NAME}. All rights reserved.</p>
        <p>Discover the beauty within each stroke.</p>
      </footer>
    </div>
  );
};

export default App;
