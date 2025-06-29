
import React from 'react';
import { Painting } from '../types';
import PaintingCard from './PaintingCard';

interface PaintingGridProps {
  paintings: Painting[];
  onPaintingClick: (painting: Painting) => void;
}

const PaintingGrid: React.FC<PaintingGridProps> = ({ paintings, onPaintingClick }) => {
  if (!paintings || paintings.length === 0) {
    return <p className="text-center text-gray-500 text-lg">No paintings to display at the moment.</p>;
  }

  return (
    <div className="flex flex-col items-center gap-6 md:gap-8">
      {paintings.map((painting) => (
        <PaintingCard
          key={painting.id}
          painting={painting}
          onClick={() => onPaintingClick(painting)}
        />
      ))}
    </div>
  );
};

export default PaintingGrid;
