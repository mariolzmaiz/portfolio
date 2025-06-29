
export interface Painting {
  id: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  description: string;
  imageUrlSmall: string;
  imageUrlLarge: string;
  artist: string; // Added artist field
}
