import React from 'react';
import Artist from './components/Artist.jsx'; 

function App() {
  const artistData = {
    name: "Spider-Man",
    image: "https://via.placeholder.com/200", 
    albums: [
      {
        title: "Spider-Man: Into the Spiderverse",
        tracks: ["Track 1.1", "Track 1.2"]
      },
      {
        title: "Spider-Man: Across the Spiderverse",
        tracks: ["Track 2.1", "Track 2.2"]
      }
    ]
  };

  return (
    <div className="discography-app">
      <section id="content">
        <header>
          <div>
            <h1>My Tunes</h1>
          </div>
        </header>

        <main>
          
          <Artist artist={artistData} />
        </main>
      </section>

      <footer>
        <p>&copy; 2024 Discography App - Navneet Aulakh</p>
      </footer>
    </div>
  );
}

export default App;