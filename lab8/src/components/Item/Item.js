// Item.js
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CharacteristicButton from "./CharacteristicButton.js";
import GoBackButton from "./GoBackButton.js";
import AddToCartButton from "./AddToCartButton.js";
import "./Item.css";

const Item = ({ rockets }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const rocket = rockets.find((rocket) => rocket.id === parseInt(id));

  const [selectedCharacteristic, setSelectedCharacteristic] = useState(1);

  if (!rocket) {
    return <p>Item not found</p>;
  }

  const renderCharacteristicContent = () => {
    if (selectedCharacteristic === 1) {
      return <p>{rocket.about_rocket}</p>;
    } else if (selectedCharacteristic === 2) {
      return <p>More technical details about {rocket.name}.</p>;
    }
  };

  return (
    <div className="item-page">
      <div className="item-content">
        <div className="item-image">
          <img src={rocket.image} alt={rocket.name} />
        </div>
        <div className="item-details">
          <div className="item-characteristics">
            <CharacteristicButton
              label="1 characteristic"
              isActive={selectedCharacteristic === 1}
              onClick={() => setSelectedCharacteristic(1)}
            />
            <CharacteristicButton
              label="2 characteristic"
              isActive={selectedCharacteristic === 2}
              onClick={() => setSelectedCharacteristic(2)}
            />
          </div>
          <h2>{rocket.name}</h2>
          {renderCharacteristicContent()}
          <div className="fields">
            <div className="field">
              <label>Countable field</label>
              <input type="text" value={rocket.count_mission} readOnly />
            </div>
            <div className="field">
              <label>Selectable Field</label>
              <select>
                <option>Select</option>
              </select>
            </div>
          </div>
          <p className="price">Price: ${rocket.price_of_launch}</p>
          <div className="buttons">
            <GoBackButton onClick={() => navigate(-1)} />
            <AddToCartButton onClick={() => console.log("Added to cart")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
