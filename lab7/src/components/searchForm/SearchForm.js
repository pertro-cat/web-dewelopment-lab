import React from "react";

const SearchForm = ({ onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const searchParams = {
      name: document.getElementById("name-input").value,
    };
    onSearch(searchParams);
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
          <button
            id="search__button"
            type="submit"
            className="btn btn-light btn-sm"
          >
            Search
          </button>
          <button
            id="clear__button"
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => {
              document.getElementById("name-input").value = "";
              onSearch({});
            }}
          >
            Clear
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
