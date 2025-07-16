import React, { useState } from "react";
import "./specificMusicFile1.css";
import CustomPlayer from "../../components/CustomPlayer/CustomPlayer";
import "../../components/CustomPlayer/CustomPlayer.css"; // Force load after specificMusicFile1.css

const SpecificMusicFile1 = ({ currentEle, setCurrentPage }) => {
  const [currentSong, setCurrentSong] = useState(null);

  if (!currentEle || !currentEle.musicFile) {
    return (
      <div>
        No song selected
        <button onClick={() => setCurrentPage("home")}>Back to Home</button>
      </div>
    );
  }

  // Create a song object from currentEle data
  const songData = {
    title: currentEle.heading || "Unknown Song",
    duration: currentEle.duration || "Unknown",
    musicFile: currentEle.musicFile
  };

  const handleSongClick = () => {
    setCurrentSong(songData);
  };

  return (
    <div>
      <div className="artist-header">
        <img src={currentEle.imgSrc} alt={currentEle.subHeading} />
        <div className="artist-info">
          <div className="verified">✔ Verified Artist</div>
          <div className="artist-name">{currentEle.subHeading}</div>
          <div className="monthly-listeners">45,932,644 monthly listeners</div>
        </div>
      </div>

      <div className="controls">
        <button className="play-button">▶</button>
        <button className="follow-button">Follow</button>
      </div>

      <div className="popular-section">
        <h2>Popular</h2>
        <div 
          className="song-row"
          onClick={handleSongClick}
          style={{ cursor: "pointer" }}
        >
          <div className="song-details">
            <span>1</span>
            <img src={currentEle.imgSrc} alt={currentEle.heading} />
            <div className="song-title">{currentEle.heading}</div>
          </div>
          <div className="song-info">
            <span className="song-duration">{currentEle.duration || "Unknown"}</span>
          </div>
        </div>
      </div>

      {currentSong && (
        <CustomPlayer 
          currentSong={currentSong} 
          currentEle={{
            name: currentEle.subHeading,
            img: currentEle.imgSrc
          }}
          playlist={[songData]}
          currentIndex={0}
          setCurrentIndex={() => {}} // Single song, no index change needed
        />
      )}
    </div>
  );
};

export default SpecificMusicFile1;