import React, { useState } from "react";
import "./mainSection.css";
import Trending from "../trending/Trending";
import PopularArtist from "../populArartist/PopularArtist";
import SpecificMusicFile from "../../pages/specificMusicPage/SpecificMusicFile";

const MainSection = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentEle, setCurrentEle]  = useState(null)
  return (
    <main className="mainSection">
      {
        console.log(currentPage, currentEle)
      }
      {currentPage === "home" ? 
        <>
          <Trending setCurrentEle={setCurrentEle} setCurrentPage={setCurrentPage} />
          <PopularArtist setCurrentPage={setCurrentPage}/>
        </>
       : currentPage === "musicSpecificPage" ? 
        <>
        <SpecificMusicFile currentEle={currentEle}/>
        </>
       : currentPage === "artistSpecificPage" ? 
        <>artist</>
       : null}
    </main>
  );
};

export default MainSection;
