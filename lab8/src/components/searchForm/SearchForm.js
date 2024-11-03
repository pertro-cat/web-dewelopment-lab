import React from "react";
import SearchInput from "./SearchInput.js";
import SearchButton from "./SearchButton.js";
import ClearButton from "../ClearBtn/ClearButton.js";

const SearchForm = ({ onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const searchParams = {
      name: document.getElementById("name-input").value,
    };
    onSearch(searchParams);
  };

  const handleClear = () => {
    document.getElementById("name-input").value = "";
    onSearch({});
  };

  return (
    <div className="col-md-4">
      <div className="form">
        <form
          id="name__form"
          className="rocket__form mb-4"
          onSubmit={handleSearch}
        >
          <h2 className="mb-3 text-light">Search rocket</h2>
          <SearchInput />
          <SearchButton onClick={handleSearch} />
          <ClearButton onClick={handleClear} />
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
