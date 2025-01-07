import React from "react";

const CountrySelect = ({ value, onChange }) => (
  <div className="mb-2">
    <label htmlFor="country-select" className="form-label text-light">
      Country
    </label>
    <select
      id="country-select"
      className="form-select form-select-sm"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Select a country</option>
      <option value="USA">USA</option>
      <option value="EU">EU</option>
      <option value="Ukraine">Ukraine</option>
    </select>
  </div>
);

export default CountrySelect;
