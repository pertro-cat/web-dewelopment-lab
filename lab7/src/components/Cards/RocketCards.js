import React, { useState } from "react";
import Modal from "../Modal/Modal.js";

function RocketCards({ rockets }) {
  const [selectedRocket, setSelectedRocket] = useState(null);

  const openModal = (rocket) => {
    setSelectedRocket(rocket);
    const modal = new window.bootstrap.Modal(
      document.getElementById("videoModal")
    );
    modal.show();
  };

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
              <button
                className="btn btn-primary mt-3 w-100"
                onClick={() => openModal(rocket)}
              >
                Watch Launch
              </button>
            </div>
          </div>
        ))
      )}
      {selectedRocket && (
        <Modal
          videoUrl={`https://www.youtube.com/embed/${selectedRocket.video_id}?si=jXDESAl_3gET60R5`}
          title={selectedRocket.name}
          description={selectedRocket.about_rocket}
        />
      )}
    </div>
  );
}

export default RocketCards;
