import React from "react";
import "../Card/Card.css";
import leftButton from "../images/left_button.svg";
import rightButton from "../images/right_button.svg";

const RocketCard = ({ rocket, onPrevious, onNext }) => {
  if (!rocket) {
    return <div>Loading...</div>;
  }

  return (
    <div className="rocket-card position-relative">
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
        </p>{" "}
        <div className="rocket-card__about">
          <h3>About Rocket</h3>
          <p>{rocket.about}</p>
        </div>
      </div>

      <button
        id="left_button"
        className="btn position-absolute"
        style={{ left: "10px", top: "50%", transform: "translateY(-50%)" }}
        onClick={onPrevious}
      >
        <img src={leftButton} alt="Previous" />
      </button>

      <button
        id="right_button"
        className="btn position-absolute"
        style={{ right: "10px", top: "50%", transform: "translateY(-50%)" }}
        onClick={onNext}
      >
        <img src={rightButton} alt="Next" />
      </button>
    </div>
  );
};

export default RocketCard;
