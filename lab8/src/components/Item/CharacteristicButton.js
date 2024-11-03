// CharacteristicButton.js
import React from "react";

const CharacteristicButton = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`characteristic-btn ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CharacteristicButton;
