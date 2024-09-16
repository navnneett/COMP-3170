import React from 'react';
import Artist from './components/Artist';

const App = () => {
  const artistData = {
    name: "John Doe",
    image: "https://via.placeholder.com/200", 
    albums: [
      {
        title: "Album 1",
        tracks: ["Track 1.1", "Track 1.2", "Track 1.3"]
      }
    ]
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Artist Discography</h1>
      {}
      <Artist artist={artistData} />
    </div>
  );
};

export default App;
