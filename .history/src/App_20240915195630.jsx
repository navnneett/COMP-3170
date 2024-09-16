import React from 'react';
import Artist from './components/Artist.jsx'; // Import Artist with the correct extension

const App = () => {
  const artistData = {
    name: "John Doe",
    image: "https://via.placeholder.com/200", // Make sure the URL is valid
    albums: [
      {
        title: "Album 1",
        tracks: ["Track 1.1", "Track 1.2", "Track 1.3"]
      }
    ]
  };

  return (
    <div>
      <Artist artist={artistData} />
    </div>
  );
};

export default App;
