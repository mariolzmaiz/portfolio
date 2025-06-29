import React, { useState, useEffect } from 'react';
import { Painting } from '../types';

interface PaintingCardProps {
  painting: Painting;
  onClick: () => void;
}

const PaintingCard: React.FC<PaintingCardProps> = ({ painting, onClick }) => {
  // Ensure the image URL starts with '/cuadros/' for public folder access
  const getPublicImageUrl = (url: string) => {
    if (url.startsWith('/cuadros/')) return url;
    if (url.startsWith('cuadros/')) return '/' + url;
    return url;
  };

  const [imageSrc, setImageSrc] = useState(getPublicImageUrl(painting.imageUrlSmall));
  const [hasErrored, setHasErrored] = useState(false);

  useEffect(() => {
    // Reset imageSrc and error state if painting prop changes
    setImageSrc(getPublicImageUrl(painting.imageUrlSmall));
    setHasErrored(false);
  }, [painting.imageUrlSmall]);

  const handleImageError = () => {
    if (!hasErrored) {
      // Use a random image from picsum.photos as a fallback
      // Adding a random query string to try and avoid caching issues if the same placeholder is used
      setImageSrc(`https://picsum.photos/400/300?random=${painting.id}&t=${new Date().getTime()}`);
      setHasErrored(true); // Prevent infinite loop if placeholder also fails
    }
  };

  return (
    <div
      className="bg-white/90 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer flex flex-col group w-full max-w-xl"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick()}
      aria-label={`View details for ${painting.title}`}
    >
      <div className="relative w-full overflow-hidden"> {/* Removed h-64 */}
        <img
          src={imageSrc}
          alt={`Thumbnail of ${painting.title}`}
          className="w-full h-auto object-contain transition-transform duration-500 ease-in-out group-hover:scale-110" /* Changed from object-cover h-full */
          loading="lazy"
          onError={handleImageError}
          style={{ maxHeight: '400px' }} // Optional: constrain max height to prevent extremely tall images from dominating
        />
      </div>
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors duration-300">
            {painting.title}
          </h3>
          <p className="text-xs text-gray-500 mb-2">By {painting.artist}</p>
        </div>
        <p className="text-sm text-gray-600">
          {painting.year} &bull; {painting.medium}
        </p>
      </div>
    </div>
  );
};

export default PaintingCard;