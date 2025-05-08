import React from "react";
import "./trendingCard.css";
import { TrendingCardData } from '../../config/config'

const TrendingCard = () => {

  return (
    <>
      <div className='trendingCardMainContainer'>
        {
          TrendingCardData.map((ele) => {
            return (
              <>
                <div className="cardContainer">
                  <img src={ele.imgSrc} alt="" />
                  <div className="CardTextContainer">
                  <h2>{ele.heading}</h2>
                  <p>{ele.subHeading}</p>
                  </div>
                </div>
              </>
            );
          })
        }
      </div> {/* ✅ This line was missing */}
    </>
  );
};

export default TrendingCard;
