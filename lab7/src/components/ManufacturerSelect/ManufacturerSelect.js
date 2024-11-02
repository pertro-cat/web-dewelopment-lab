import React from "react";

const ManufacturerSelect = ({ value, onChange }) => (
  <div className="mb-2">
    <label htmlFor="manufacturer-select" className="form-label text-light">
      Manufacturer
    </label>
    <select
      id="manufacturer-select"
      className="form-select form-select-sm"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Select a manufacturer</option>
      <option value="SpaceX">SpaceX</option>
      <option value="ULA">ULA</option>
      <option value="Airbus Space">Airbus Space</option>
      <option value="Pivdenne">Pivdenne</option>
      <option value="Boeing">Boeing</option>
    </select>
  </div>
);

export default ManufacturerSelect;
