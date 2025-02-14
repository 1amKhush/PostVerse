import './PosterPage.css';
import React from 'react';

const posters = [
  {
    id: 1,
    image: 'src/assets/1.webp',
    description: '1',
  },
  {
    id: 2,
    image: 'src/assets/react.svg',
    description: 'React Poster: Build dynamic UIs with ease.',
  },
  {
    id: 3,
    image: 'src/assets/react.svg',
    description: 'React Poster: Build dynamic UIs with ease.',
  },
  {
    id: 4,
    image: 'src/assets/react.svg',
    description: 'React Poster: Build dynamic UIs with ease.',
  },
  {
    id: 5,
    image: 'src/assets/react.svg',
    description: 'React Poster: Build dynamic UIs with ease.',
  },
  {
    id: 6,
    image: 'src/assets/react.svg',
    description: 'React Poster: Build dynamic UIs with ease.',
  },
  {
    id: 7,
    image: 'src/assets/react.svg',
    description: 'React Poster: Build dynamic UIs with ease.',
  },
  {
    id: 8,
    image: 'src/assets/react.svg',
    description: 'React Poster: Build dynamic UIs with ease.',
  },
];

export default function PosterPage() {
  return (
    <div className="poster-page">
      {posters.map((poster) => (
        <div key={poster.id} className="poster-card">
          <img src={poster.image} alt={`Poster ${poster.id}`} className="poster-image" />
          <div className="poster-text">
            <p>{poster.id}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
