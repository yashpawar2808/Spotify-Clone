import React from "react";
import "./navbar.css";

const Navbar = ({ setCurrentPage }) => {
  const handleHomeClick = () => {
    console.log("Home button clicked, setting currentPage to 'home'");
    setCurrentPage("home");
  };

  return (
    <nav>
      <div className="spotify-navbar">
        <div className="left-section">
          <div className="spotify-logo">
            <img className="logo"
              src="https://deadpoolblogs.wordpress.com/wp-content/uploads/2025/05/purple-and-pink-futuristic-music-studio-logo-.png"
              alt="Spotify"
              width="45"
              height="45"
            />{" "}
          </div>
          <button className="icon-button" onClick={handleHomeClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFFFFF"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M21 22H3a1 1 0 0 1-1-1V10.414a1 1 0 0 1 .293-.707l9-9a1 1 0 0 1 1.414 0l9 9A1 1 0 0 1 22 10.414V21a1 1 0 0 1-1 1zM4 20h16V11.414l-8-8-8 8V20z" />
              <path d="M9 22V12h6v10" />
            </svg>
          </button>

          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="What do you want to play?" />
          </div>
        </div>

        <div className="right-section">
          <a href="#">Premium</a>
          <a href="#">Support</a>
          <a href="#">Download</a>
          <div className="divider"></div>
          <a href="#">Install App</a>
          <a href="#" onClick={() => setCurrentPage("login")}>Sign up</a>
          <button className="login-btn" onClick={() => setCurrentPage("login")}>
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
