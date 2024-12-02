// src/components/searchForm/SearchInput.js
import React from "react";

const SearchInput = ({ value, onChange }) => (
  <div className="mb-2">
    <label htmlFor="name-input" className="form-label text-light">
      Name
    </label>
    <input
      type="text"
      className="form-control form-control-sm"
      id="name-input"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default SearchInput;
