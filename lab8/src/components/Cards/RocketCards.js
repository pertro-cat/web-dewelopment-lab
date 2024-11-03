// RocketCards.js
import React from "react";
import { Link } from "react-router-dom";
import ViewMoreButton from "../ViewMore/BtnViewMore.js";

function RocketCards({ rockets }) {
  return (
    <div className="row">
      {rockets.length === 0 ? (
        <p>No rockets found.</p>
      ) : (
        rockets.map((rocket) => (
          <div key={rocket.id} className="col-md-4 mb-4">
            <div className="card bg-dark text-light p-3">
              <h2 className="rocket-name">{rocket.name}</h2>
              <img src={rocket.image} alt={rocket.name} className="img-fluid" />
              <p>
                <strong>Manufacturer:</strong> {rocket.manufacturer}
              </p>
              <p>
                <strong>Country:</strong> {rocket.country}
              </p>
              <p>
                <strong>Count mission:</strong> {rocket.count_mission}
              </p>
              <p>{rocket.about_rocket}</p>
              <p className="rocket-price">
                <strong>Price of Launch:</strong> ${rocket.price_of_launch}
              </p>
              <Link to={`/item/${rocket.id}`}>
                <ViewMoreButton />
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default RocketCards;
