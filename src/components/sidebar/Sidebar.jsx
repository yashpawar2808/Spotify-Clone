import React from "react";
import "./sidebar.css";
import Cards from "./Cards";

const Sidebar = () => {
  const Text = [
    "Legal",
    "Security and Privacy",
    "privacy policy",
    "Cookies",
    "About Ads",
    "Accessibility",
  ];
  return (
    <div className="sidebarMainContainer">
      <div className="sidebarTopSection">
        <h1>Your Library</h1>
        <p>+</p>
      </div>
      <div className="sidebarMiddleSection">
        <Cards
          heading="Create Your First Playlist"
          subheading="It's Easy We'll Help You"
          buttontext="Create Playlist"
        />
        <Cards
          heading="Let's Find Some Podcast To Follow"
          subheading="We'll Keep You Updated On New Episode"
          buttontext="Browse Podcast"
        />
      </div>
      <div className="sidebarBottomSection" />
      <div className="sidebarBottomSectionTopContainer">
        {Text.map((ele) => {
          return <p>{ele}</p>;
        })}
      </div>
      <div className="sidebarBottomSectionBottomContainer">
        <p>Cookies</p>
      </div>
      <div className="sidebarBottomSectionBottomContainer">
        <button>English</button>
      </div>
    </div>
  );
};

export default Sidebar;
