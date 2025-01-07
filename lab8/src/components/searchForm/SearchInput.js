import React from "react";

const SearchInput = () => (
  <div className="mb-2">
    <label htmlFor="name-input" className="form-label text-light">
      Name
    </label>
    <input
      type="text"
      className="form-control form-control-sm"
      id="name-input"
    />
  </div>
);

export default SearchInput;
