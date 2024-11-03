import React from "react";

const LaunchMinInput = ({ value, onChange }) => (
  <div className="mb-2">
    <label htmlFor="launch-min" className="form-label text-light">
      Launch min
    </label>
    <input
      type="number"
      className="form-control form-control-sm"
      id="launch-min"
      value={value || ""} // Значення за замовчуванням ""
      onChange={(e) => onChange(e.target.value)} // Передаємо e.target.value
    />
  </div>
);

export default LaunchMinInput;
