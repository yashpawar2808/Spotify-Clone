import React from "react";
import "./trendingCard.css";
import { TrendingCardData } from "../../config/config";

const TrendingCard = ({ setCurrentPage, setCurrentEle }) => {
  return (
    <>
      <div className="trendingCardMainContainer">
        {TrendingCardData.map((ele, id) => {
          return (
            <>
              <div
                key={id}
                onClick={() => {
                  setCurrentPage("musicSpecificPage");
                  setCurrentEle(ele);
                }}
                className="cardContainer"
              >
                <img src={ele.imgSrc} alt="" />

                <div className="cardContainerhover">
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      className="play-icon"
                      aria-hidden="true"
                    >
                      <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z" />
                    </svg>
                  </span>
                </div>

                <div className="CardTextContainer">
                  <h2>{ele.heading}</h2>
                  <p>{ele.subHeading}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>{" "}
      {}
    </>
  );
};

export default TrendingCard;
