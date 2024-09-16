import React, { useState } from 'react';
import Track from './Track.jsx';

const Album = ({ album }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app-title">
      <h3 onClick={handleToggle} style={{ cursor: 'pointer' }}>
        {album.title}
      </h3>
      {isOpen ? (
        <div>
          <Track tracks={album.tracks} />
        </div>
      ) : null}
    </div>
  );
};

export default Album;
