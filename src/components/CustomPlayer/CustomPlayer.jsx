import React, { useRef, useEffect, useState } from "react";
import "./CustomPlayer.css";

const CustomPlayer = ({
  currentSong,
  currentEle,
  playlist,
  currentIndex,
  setCurrentIndex,
}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.load();
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.error("Autoplay error:", err);
          setIsPlaying(false);
        });
    }
  }, [currentSong]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => console.error("Play error:", err));
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      setProgress((audio.currentTime / audio.duration) * 100);
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    }
  };

  const handleProgressChange = (e) => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      const newTime = (parseFloat(e.target.value) / 100) * audio.duration;
      audio.currentTime = newTime;
      setProgress(parseFloat(e.target.value));
    }
  };

  const handleEnded = () => {
    if (repeat) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      handleNext();
    }
  };

  const handleNext = () => {
    if (!playlist || playlist.length === 0) return;

    let nextIndex;
    if (shuffle) {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * playlist.length);
      } while (newIndex === currentIndex && playlist.length > 1);
      nextIndex = newIndex;
    } else {
      nextIndex = (currentIndex + 1) % playlist.length;
    }

    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    if (!playlist || playlist.length === 0) return;
    const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    setCurrentIndex(prevIndex);
  };

  const formatTime = (time) => {
    if (isNaN(time) || time < 0) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  if (!currentSong) return null;

  return (
    <div className="custom-player">
      <div className="player-left">
        <img src={currentEle.img} alt={currentSong.title} className="song-img" />
        <div>
          <div className="song-title">{currentSong.title}</div>
          <div className="artist-name">{currentEle.name}</div>
        </div>
      </div>

      <div className="player-center">
        <div className="controls">
          <button
            className={`control-btn ${repeat ? "active" : ""}`}
            onClick={() => setRepeat(!repeat)}
          >
            {repeat ? "🔁" : "⟲"}
          </button>
          <button className="control-btn" onClick={handlePrev}>
            ⏮
          </button>
          <button className="control-btn play-btn" onClick={togglePlayPause}>
            {isPlaying ? "⏸" : "▶"}
          </button>
          <button className="control-btn" onClick={handleNext}>
            ⏭
          </button>
          <button
            className={`control-btn ${shuffle ? "active" : ""}`}
            onClick={() => setShuffle(!shuffle)}
          >
            {shuffle ? "🔀" : "⇆"}
          </button>
        </div>

        <input
          type="range"
          value={progress}
          onChange={handleProgressChange}
          className="progress-bar"
          style={{ "--progress": `${progress}%` }}
        />

        <div className="time-display">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        <audio
          ref={audioRef}
          src={currentSong.musicFile}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
        />
      </div>

      <div className="player-right">
        <button className="volume-icon-btn">
          {volume === 0 ? "🔇" : volume < 0.5 ? "🔉" : "🔊"}
        </button>
        <input
          type="range"
          className="volume-slider"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          style={{ "--volume": `${volume * 100}%` }}
        />
      </div>
    </div>
  );
};

export default CustomPlayer;