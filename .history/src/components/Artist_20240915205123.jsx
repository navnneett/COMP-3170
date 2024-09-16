import React from 'react';
import Album from './Album';

const Artist = ({ artist }) => {
  return (
    <div>
      <h1>{artist.name}</h1>
      <img className="artist-img" src={artist.image} alt={`${artist.name}`} style={{ width: '550px', height: '320px' }} />
      <div>
        {artist.albums.map((album, index) => (
          <Album key={index} album={album} />
        ))}
      </div>
    </div>
  );
};

export default Artist;
