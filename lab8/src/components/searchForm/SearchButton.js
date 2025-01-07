import React from "react";

const SearchButton = ({ onClick }) => (
  <button
    id="search__button"
    type="submit"
    className="btn btn-light btn-sm"
    onClick={onClick}
  >
    Search
  </button>
);

export default SearchButton;
