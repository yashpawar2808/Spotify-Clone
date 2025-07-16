// ArtistCard.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./artistCard.css";
import { artistList } from "../../config/config";

const ArtistCard = ({ setCurrentPage, setCurrentEle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const artistsPerPage = 5;

  const nextArtists = () => {
    if (currentIndex + artistsPerPage < artistList.length) {
      setCurrentIndex(currentIndex + artistsPerPage);
    }
  };

  const prevArtists = () => {
    if (currentIndex - artistsPerPage >= 0) {
      setCurrentIndex(currentIndex - artistsPerPage);
    }
  };

  const visibleArtists = artistList.slice(currentIndex, currentIndex + artistsPerPage);

  return (
    <div className="artistCardMainContainer">
      {currentIndex > 0 && (
        <button className="nav-button prev-button" onClick={prevArtists}>
          &lt;
        </button>
      )}
      
      {visibleArtists.map((ele) => (
        <div
          key={ele.id}
          onClick={() => {
            console.log("Clicked artist:", ele.name);
            setCurrentEle(ele);
            setCurrentPage("artistSpecificPage");
          }}
          className="artistCard"
        >
          <img src={ele.img} alt={ele.name} loading="lazy" />
          <div className="textContainer">
            <h1>{ele.name}</h1>
            <p>Artist</p>
          </div>
          <span className="play-button" aria-label={`Play songs by ${ele.name}`}>
            <svg viewBox="0 0 24 24" className="play-icon">
              <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z" />
            </svg>
          </span>
        </div>
      ))}
      
      {currentIndex + artistsPerPage < artistList.length && (
        <button className="nav-button next-button" onClick={nextArtists}>
          &gt;
        </button>
      )}
    </div>
  );
};

ArtistCard.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  setCurrentEle: PropTypes.func.isRequired,
};

export default ArtistCard;