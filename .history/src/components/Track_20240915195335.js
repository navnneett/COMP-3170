import React from 'react';

const Track = ({ tracks }) => {
  return (
    <ul>
      {tracks.map((track, index) => (
        <li key={index}>{track}</li>
      ))}
    </ul>
  );
};

export default Track;
