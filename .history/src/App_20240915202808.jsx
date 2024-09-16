import React from 'react';
import Artist from './components/Artist.jsx'; 

function App() {
  const artistData = {
    name: "Spider-Man",
    image: "https://filmdaze.net/wp-content/uploads/2021/02/https___bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com_public_images_7d80ac29-4a6c-4450-b557-618fecd92a30_1280x720.jpeg", 
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