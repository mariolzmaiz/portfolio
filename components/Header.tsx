
import React from 'react';
import { ARTIST_NAME } from '../constants'; // Import artist name
import { Page } from '../App'; // Import Page type

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const navLinkClasses = (page: Page) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out ${
      currentPage === page
        ? 'bg-indigo-100 text-indigo-700'
        : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
    }`;

  return (
    <header className="bg-white/85 backdrop-blur-md shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span
              className="text-xl font-bold text-gray-800 cursor-pointer"
              onClick={() => onNavigate('portfolio')}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && onNavigate('portfolio')}
              aria-label="Go to Portfolio"
            >
              {ARTIST_NAME}
            </span>
          </div>
          <nav className="flex space-x-2 sm:space-x-4">
            <button
              onClick={() => onNavigate('portfolio')}
              className={navLinkClasses('portfolio')}
              aria-current={currentPage === 'portfolio' ? 'page' : undefined}
            >
              Portfolio
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={navLinkClasses('about')}
              aria-current={currentPage === 'about' ? 'page' : undefined}
            >
              About Me
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;