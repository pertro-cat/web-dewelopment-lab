// src/components/sortForm/LaunchMax/LaunchMaxInput.js
import React from "react";

const LaunchMaxInput = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="launchMax">Max Launches</label>
      <input type="number" id="launchMax" value={value} onChange={onChange} />
    </div>
  );
};

export default LaunchMaxInput;
