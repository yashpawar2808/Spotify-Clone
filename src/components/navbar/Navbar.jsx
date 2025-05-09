import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div class="spotify-navbar">
        <div class="left-section">
          <div class="spotify-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 168" width="32" height="32">
  <circle cx="84" cy="84" r="84" fill="#ffffff"/>
  <path fill="#000000" d="M119.3 116.9c-1.5 2.4-4.6 3.1-7 1.6-20.6-12.6-46.6-15.4-77.2-8.4-2.7.6-5.4-1-6-3.7-.6-2.7 1-5.4 3.7-6 34.1-7.6 64.5-4.4 88.8 9.6 2.3 1.3 3 4.3 1.7 6.9zm9.4-20.4c-1.9 3-5.8 3.9-8.8 2.1-23.5-14.3-59.3-18.5-87-10-3.4 1-7-1-8-4.4-1-3.4 1-7 4.4-8 32.5-9.7 73-5 100.5 11.3 3 1.8 3.9 5.7 2 9zm1.7-21.6c-27.7-16.4-73.8-17.9-99.8-9.7-3.9 1.2-8.1-.9-9.3-4.8-1.2-3.9.9-8.1 4.8-9.3 30.6-9.3 83.5-7.6 114.2 11.2 3.4 2 4.6 6.4 2.6 9.8-2 3.5-6.4 4.7-9.9 2.8z"/>
</svg>

          </div>

          <button class="icon-button">
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

          <div class="search-box">
            <span class="search-icon">🔍</span>
            <input type="text" placeholder="What do you want to play?" />
            <span class="mic-icon">🎙️</span>
          </div>
        </div>

        <div class="right-section">
          <a href="#">Premium</a>
          <a href="#">Support</a>
          <a href="#">Download</a>
          <div class="divider"></div>
          <a href="#">Install App</a>
          <a href="#">Sign up</a>
          <button class="login-btn">Log in</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
