// src/components/sortForm/LaunchMinInput.js
import React from "react";

const LaunchMinInput = ({ value, onChange }) => (
  <div className="mb-2">
    <label htmlFor="launch-min" className="form-label text-light">
      Launch min
    </label>
    <input
      type="text"
      className="form-control form-control-sm"
      id="launch-min"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default LaunchMinInput;
