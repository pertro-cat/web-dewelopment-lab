// src/components/sortForm/MaxLaunchInput.js
import React from "react";

const MaxLaunchInput = ({ value, onChange }) => (
  <div className="mb-2">
    <label htmlFor="launch-max" className="form-label text-light">
      Launch max
    </label>
    <input
      type="text"
      className="form-control form-control-sm"
      id="launch-max"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default MaxLaunchInput;
