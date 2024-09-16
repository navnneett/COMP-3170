import React from 'react';
import Artist from './components/Artist.jsx'; 

function App() {
  const artistData = {
    name: "The Weeknd",
    image: "https://www.musicbusinessworldwide.com/files/2021/06/Weekend.jpeg", 
    albums: [
      {
        title: "After Hours",
        tracks: ["Alone Again", "Too Late", "Hardest Love", "Scared to Live", "Snowchild", "Escape From LA"]
      },
      {
        title: "Spider-Man: Across the Spiderverse",
        tracks: ["Track 2.1", "Track 2.2"]
      }
    ]
  };

  return (
    <div className="discography-app">
      <section id="album-content">
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