// CatalogPage.js
import React, { useState, useEffect } from "react";
import RocketCards from "../Cards/RocketCards.js";
import SearchForm from "../searchForm/SearchForm.js";
import SortForm from "../sortForm/SortForm.js";

const CatalogPage = ({ rockets, onSearch, onSort }) => {
  const [filteredRockets, setFilteredRockets] = useState(rockets);
  const [isSortFormVisible, setSortFormVisible] = useState(false);

  useEffect(() => {
    setFilteredRockets(rockets);
  }, [rockets]);

  const toggleSortForm = () => {
    setSortFormVisible((prev) => !prev);
  };

  const handleSearch = (searchParams) => {
    onSearch(searchParams); // Викликаємо пошук у головному компоненті
  };

  const handleSort = (sortParams) => {
    onSort(sortParams); // Викликаємо сортування у головному компоненті
  };

  return (
    <div className="catalog-page">
      <div className="forms-container">
        <SearchForm onSearch={handleSearch} />
        <button onClick={toggleSortForm} className="btn btn-primary mb-3">
          {isSortFormVisible ? "Hide Sort Options" : "Show Sort Options"}
        </button>
        {isSortFormVisible && <SortForm onSort={handleSort} />}
      </div>
      <RocketCards rockets={filteredRockets} />
    </div>
  );
};

export default CatalogPage;
