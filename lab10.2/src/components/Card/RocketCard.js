// Card/RocketCard.js
import React from "react";
import "../Card/Card.css";
import LeftBtn from "./LeftBtn.js";
import RightBtn from "./RightBtn.js";

const RocketCard = ({ rocket, onPrevious, onNext }) => {
  if (!rocket) {
    return <div>Loading...</div>;
  }

  return (
    <div className="rocket-card position-relative">
      <LeftBtn onClick={onPrevious} />
      <div className="rocket-card__image">
        <img src={rocket.image} alt={rocket.name} />
      </div>
      <div className="rocket-card__info">
        <h2>{rocket.name}</h2>
        <p>
          <strong>Manufacturer:</strong> {rocket.manufacturer}
        </p>
        <p>
          <strong>Country:</strong> {rocket.country}
        </p>
        <p>
          <strong>Mission Count:</strong> {rocket.count_mission}
        </p>
        <p>
          <strong>Price of Launch:</strong> ${rocket.price_of_launch}
        </p>
        <div className="rocket-card__about">
          <h3>About Rocket</h3>
          <p>{rocket.about_rocket}</p>
        </div>
      </div>
      <RightBtn onClick={onNext} />
    </div>
  );
};

export default RocketCard;
