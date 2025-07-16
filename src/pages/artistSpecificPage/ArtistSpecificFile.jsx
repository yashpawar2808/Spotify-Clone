import React, { useState } from "react";
import "./ArtistSpecificFile.css";
import CustomPlayer from "../../components/CustomPlayer/CustomPlayer";

const ArtistSpecificFile = ({ currentEle, setCurrentPage }) => {
  const [currentSong, setCurrentSong] = useState(null);

  if (!currentEle) {
    return <div>No artist selected</div>;
  }

  return (
    <div>
      <div className="artist-header">
        <img src={currentEle.img} alt={currentEle.name} />
        <div className="artist-info">
          <div className="verified">✔ Verified Artist</div>
          <div className="artist-name">{currentEle.name}</div>
          <div className="monthly-listeners">45,932,644 monthly listeners</div>
        </div>
      </div>

      <div className="controls">
        <button className="play-button">▶</button>
        <button className="follow-button">Follow</button>
      </div>

      <div className="popular-section">
        <h2>Popular</h2>
        {currentEle.songs?.map((song, index) => (
          <div
            key={index}
            className="song-row"
            onClick={() => setCurrentSong(song)}
            style={{ cursor: "pointer" }}
          >
            <div className="song-details">
              <span>{index + 1}</span>
              <img src={currentEle.img} alt={currentEle.name} />
              <div className="song-title">{song.title}</div>
            </div>
            <div className="song-info">
              <span className="song-duration">{song.duration}</span>
            </div>
          </div>
        ))}
      </div>

      {currentSong && (
        <CustomPlayer currentSong={currentSong} currentEle={currentEle} />
      )}
    </div>
  );
};

export default ArtistSpecificFile;
