import React from "react";
import Star from "../images/icon-star.svg";

const Reviews = ({ source, order }) => (
    <div className={`reviews__card ${order}`}>
      <div className={`reviews__card-stars`}>
        <img src={Star} alt="Star Icon"/>
        <img src={Star} alt="Star Icon"/>
        <img src={Star} alt="Star Icon"/>
        <img src={Star} alt="Star Icon"/>
        <img src={Star} alt="Star Icon"/>
      </div>
      <p className="reviews__card-source">
        Rated 5 stars in { source }
      </p>
    </div>
)

export default Reviews;