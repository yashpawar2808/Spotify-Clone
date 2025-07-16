// PopularArtist.jsx
import React from "react";
import PropTypes from "prop-types";
import "./popularArtist.css";
import ArtistCard from "../artistCard/ArtistCard";

const PopularArtist = ({ setCurrentPage, setCurrentEle }) => {
  return (
    <div className="popularArtistMainContainer trendingSectionMainContainer">
      <span>Popular artists</span>
      <div className="artistCardsWrapper">
        <ArtistCard setCurrentPage={setCurrentPage} setCurrentEle={setCurrentEle} />
      </div>
    </div>
  );
};

PopularArtist.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  setCurrentEle: PropTypes.func.isRequired,
};

export default React.memo(PopularArtist);