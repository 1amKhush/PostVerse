import './PosterPage.css';
import React from 'react';
import img1 from '../../assets/1.webp';
import img2 from '../../assets/react.svg';

const posters = [
  {
    id: 1,
    image: img1,
    description: '1',
  },
  {
    id: 2,
    image: img2,
    description: 'React Poster: Build dynamic UIs with ease.',
  },
  {
    id: 3,
    image: img2,
    description: 'React Poster: Build dynamic UIs with ease.',
  },
  {
    id: 4,
    image: img2,
    description: 'React Poster: Build dynamic UIs with ease.',
  },
  {
    id: 5,
    image: img2,
    description: 'React Poster: Build dynamic UIs with ease.',
  },
  {
    id: 6,
    image: img2,
    description: 'React Poster: Build dynamic UIs with ease.',
  },
  {
    id: 7,
    image: img2,
    description: 'React Poster: Build dynamic UIs with ease.',
  },
  {
    id: 8,
    image: img2,
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
