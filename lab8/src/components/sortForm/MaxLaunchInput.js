import React from "react";

const MaxLaunchInput = ({ value, onChange }) => (
  <div className="mb-2">
    <label htmlFor="launchMax" className="form-label text-light">
      Max Launches
    </label>
    <input
      type="number"
      id="launchMax"
      className="form-control form-control-sm"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default MaxLaunchInput;
