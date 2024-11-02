import React from "react";
import RocketCards from "../Cards/RocketCards.js";
import SearchForm from "../searchForm/SearchForm.js";
import SortForm from "../sortForm/SortForm.js";

const CatalogPage = ({ rockets, onSearch, onSort }) => {
  return (
    <div className="catalog-page">
      <h1>Buy the launch</h1>
      <div className="forms-container">
        <SearchForm onSearch={onSearch} />
        <SortForm onSort={onSort} />
      </div>
      <RocketCards rockets={rockets} />
    </div>
  );
};

export default CatalogPage;
