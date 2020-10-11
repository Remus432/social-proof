import React from "react";
import Description from "./Description";
import Reviews from "./Reviews";

const Header = () => (
  <div className="header__container">
    <Description/>
    <div className="reviews">
      <Reviews source="Reviews" order="card-1" />
      <Reviews source="Report Guru" order="card-2" />
      <Reviews source="BestTech" order="card-3" />
    </div>
  </div>
)

export default Header;