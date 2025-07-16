import React from 'react';
import './trending.css';
import TrendingCard from '../trendingCard/TrendingCard';

const Trending = ({ setCurrentPage, setCurrentEle }) => {
  return (
    <div className="trendiingSectionMainContainer trendiingSectionMainContainer">
      <span>Trending Songs</span>
      <TrendingCard setCurrentPage={setCurrentPage} setCurrentEle={setCurrentEle} />
    </div>
  );
};

export default Trending;