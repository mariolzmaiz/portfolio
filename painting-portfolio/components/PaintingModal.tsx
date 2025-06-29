
import React, { useEffect, useCallback, useState } from 'react';
import { Painting } from '../types';
import CloseIcon from './icons/CloseIcon';

interface PaintingModalProps {
  painting: Painting;
  onClose: () => void;
}

const PaintingModal: React.FC<PaintingModalProps> = ({ painting, onClose }) => {
  const [imageSrc, setImageSrc] = useState(painting.imageUrlLarge);
  const [hasErrored, setHasErrored] = useState(false);

  useEffect(() => {
    // Reset imageSrc and error state if painting prop changes
    setImageSrc(painting.imageUrlLarge);
    setHasErrored(false);
  }, [painting.imageUrlLarge]);
  
  const handleImageError = () => {
    if (!hasErrored) {
       // Use a larger random image from picsum.photos as a fallback
      setImageSrc(`https://picsum.photos/800/600?random=${painting.id}&t=${new Date().getTime()}`);
      setHasErrored(true); // Prevent infinite loop if placeholder also fails
    }
  };

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto'; // Restore background scroll
    };
  }, [handleKeyDown]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-in-out animate-fadeIn"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="painting-title"
      aria-describedby="painting-description"
    >
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
          }
          @keyframes scaleUp {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-scaleUp {
            animation: scaleUp 0.3s ease-out forwards;
          }
        `}
      </style>
      <div
        className="bg-white/90 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
      >
        <div className="md:w-3/5 relative bg-gray-200 flex items-center justify-center">
          <img
            src={imageSrc}
            alt={painting.title} // Alt text remains for the original painting
            className="w-full h-64 md:h-full object-contain"
            loading="lazy"
            onError={handleImageError}
          />
        </div>
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col overflow-y-auto">
          <div className="flex-grow">
            <h2 id="painting-title" className="text-3xl font-bold text-gray-900 mb-2">
              {painting.title}
            </h2>
            <p className="text-md text-gray-600 mb-1">By <span className="font-medium">{painting.artist}</span></p>
            <p className="text-sm text-gray-500 mb-1">Year: {painting.year}</p>
            <p className="text-sm text-gray-500 mb-1">Medium: {painting.medium}</p>
            <p className="text-sm text-gray-500 mb-4">Dimensions: {painting.dimensions}</p>
            <div id="painting-description" className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
              <p>{painting.description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="mt-6 w-full md:w-auto self-center md:self-end bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            aria-label="Close details view"
          >
            Close
          </button>
        </div>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full hover:text-gray-800 transition-all duration-200 z-10"
          aria-label="Close modal"
        >
          <CloseIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

export default PaintingModal;