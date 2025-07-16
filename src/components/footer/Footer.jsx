import React from "react";
import "./footer.css";

const Footer = ({ setCurrentPage }) => {
  const handleHomeClick = () => {
    console.log("Home button clicked, setting currentPage to 'home' ");
    setCurrentPage("Home");
  };

  return (
    <div className="footerSectionMainContainer">
      <div class="spotify-banner">
        <div class="banner-text">
          <strong>Preview of Sonique</strong>
          <span>
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card needed.
          </span>
        </div>
        <button class="signup-button" onClick={() => setCurrentPage("login")}>
          Sign up free
        </button>
      </div>
    </div>
  );
};

export default Footer;
