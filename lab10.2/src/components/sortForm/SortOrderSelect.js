// src/components/sortForm/SortOrderSelect.js
import React from "react";

const SortOrderSelect = ({ value, onChange }) => (
  <div className="mb-2">
    <label htmlFor="sort-order-select" className="form-label text-light">
      Sort by number of launches
    </label>
    <select
      id="sort-order-select"
      className="form-select form-select-sm"
      value={value}
      onChange={onChange}
    >
      <option value="">No sorting</option>
      <option value="asc">From smallest to largest</option>
      <option value="desc">From largest to smallest</option>
    </select>
  </div>
);

export default SortOrderSelect;
