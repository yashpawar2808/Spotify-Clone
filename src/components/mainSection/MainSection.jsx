import React, { useState } from "react";
import "./mainSection.css";
import Trending from "../trending/Trending";
import PopularArtist from "../populArartist/PopularArtist";
import SpecificMusicFile1 from "../../pages/specificMusicPage/SpecificMusicFile1";
import ArtistSpecificFile from "../../pages/artistSpecificPage/ArtistSpecificFile";
import Login from "../../pages/login/Login";

const MainSection = ({ currentPage, setCurrentPage }) => {
  const [currentEle, setCurrentEle] = useState(null);

  if (currentPage === "login") {
    return (
      <div style={{ 
        width: '100%', 
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to bottom, #2c2c2c, #000)',
        zIndex: 50
      }}>
        {/* Blurred background overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, #2c2c2c, #000)',
          filter: 'blur(8px)',
          zIndex: 51
        }}></div>
        
        {/* Login form on top */}
        <div style={{ 
          position: 'relative', 
          zIndex: 52,
          width: '100%',
          maxWidth: '450px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Login />
        </div>
      </div>
    );
  }

  return (
    <main className="mainSection">
      {currentPage === "home" && (
        <>
          <Trending
            setCurrentEle={setCurrentEle}
            setCurrentPage={setCurrentPage}
          />
          <PopularArtist
            setCurrentPage={setCurrentPage}
            setCurrentEle={setCurrentEle}
          />
        </>
      )}

      {currentPage === "musicSpecificPage" && (
        <SpecificMusicFile1 currentEle={currentEle} />
      )}

      {currentPage === "artistSpecificPage" && (
        <ArtistSpecificFile currentEle={currentEle} />
      )}
    </main>
  );
};

export default MainSection;