
import { Painting } from './types';

export const ARTIST_NAME = "Your Name Here"; // Replace with your actual name

const sanitizeTitleForPath = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
};

export const PAINTINGS_DATA: Painting[] = [
  {
    id: '1',
    title: 'Azure Dream',
    year: 2023,
    medium: 'Oil on Canvas',
    dimensions: '60x80 cm',
    description: 'An abstract exploration of the sky and sea, merging into a dreamlike landscape where colors dance and emotions flow freely.',
    imageUrlSmall: `./cuadros/1_${sanitizeTitleForPath('Azure Dream')}_small.jpg`,
    imageUrlLarge: `./cuadros/1_${sanitizeTitleForPath('Azure Dream')}_large.jpg`,
    artist: ARTIST_NAME,
  },
  {
    id: '2',
    title: 'Crimson Echoes',
    year: 2022,
    medium: 'Acrylic on Wood Panel',
    dimensions: '45x60 cm',
    description: 'Vibrant strokes of crimson and gold tell a story of passion and memory, echoing through time.',
    imageUrlSmall: `./cuadros/2_${sanitizeTitleForPath('Crimson Echoes')}_small.jpg`,
    imageUrlLarge: `./cuadros/2_${sanitizeTitleForPath('Crimson Echoes')}_large.jpg`,
    artist: ARTIST_NAME, // Assuming all paintings are by the main artist. Change if needed.
  },
  {
    id: '3',
    title: 'Forest Whisper',
    year: 2024,
    medium: 'Watercolor on Paper',
    dimensions: '30x40 cm',
    description: 'Delicate hues capture the serene and mystical atmosphere of an ancient forest, inviting contemplation.',
    imageUrlSmall: `./cuadros/3_${sanitizeTitleForPath('Forest Whisper')}_small.jpg`,
    imageUrlLarge: `./cuadros/3_${sanitizeTitleForPath('Forest Whisper')}_large.jpg`,
    artist: ARTIST_NAME,
  },
  {
    id: '4',
    title: 'Urban Pulse',
    year: 2023,
    medium: 'Mixed Media on Canvas',
    dimensions: '70x70 cm',
    description: 'A dynamic composition reflecting the energy and rhythm of city life, using textures and found objects.',
    imageUrlSmall: `./cuadros/4_${sanitizeTitleForPath('Urban Pulse')}_small.jpg`,
    imageUrlLarge: `./cuadros/4_${sanitizeTitleForPath('Urban Pulse')}_large.jpg`,
    artist: ARTIST_NAME,
  },
  {
    id: '5',
    title: 'Silent Moon',
    year: 2021,
    medium: 'Oil on Linen',
    dimensions: '50x50 cm',
    description: 'A tranquil night scene dominated by a luminous moon, evoking peace and introspection.',
    imageUrlSmall: `./cuadros/5_${sanitizeTitleForPath('Silent Moon')}_small.jpg`,
    imageUrlLarge: `./cuadros/5_${sanitizeTitleForPath('Silent Moon')}_large.jpg`,
    artist: ARTIST_NAME,
  },
  {
    id: '6',
    title: 'Ephemeral Bloom',
    year: 2024,
    medium: 'Pastel on Paper',
    dimensions: '40x50 cm',
    description: 'Capturing the fleeting beauty of a flower in bloom, with soft textures and a gentle color palette.',
    imageUrlSmall: `./cuadros/6_${sanitizeTitleForPath('Ephemeral Bloom')}_small.jpg`,
    imageUrlLarge: `./cuadros/6_${sanitizeTitleForPath('Ephemeral Bloom')}_large.jpg`,
    artist: ARTIST_NAME,
  },
];
