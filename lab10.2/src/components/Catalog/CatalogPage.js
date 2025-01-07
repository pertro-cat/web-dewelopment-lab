// src/components/Catalog/CatalogPage.js

import React, { useMemo, useState } from "react";
import RocketCards from "../Cards/RocketCards.js";
import SearchForm from "../searchForm/SearchForm.js";
import SortForm from "../sortForm/SortForm.js";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.js"; // Імпортуємо спінер

const CatalogPage = ({ loadRockets, rockets }) => {
  const [isSortFormVisible, setSortFormVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleSortForm = () => {
    setSortFormVisible((prev) => !prev);
  };

  const handleSearch = async (searchParams) => {
    setIsLoading(true);
    try {
      await loadRockets(searchParams); // Чекаємо завершення завантаження
    } finally {
      setIsLoading(false);
    }
  };

  const handleSort = async (sortParams) => {
    setIsLoading(true);
    try {
      await loadRockets(sortParams); // Чекаємо завершення завантаження
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearAll = async () => {
    setIsLoading(true);
    try {
      await loadRockets(); // Чекаємо завершення завантаження
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="catalog-page">
      <div className="forms-container">
        <SearchForm onSearch={handleSearch} onClear={handleClearAll} />
        <button onClick={toggleSortForm} className="btn btn-primary mb-3">
          {isSortFormVisible ? "Hide Sort Options" : "Show Sort Options"}
        </button>
        {isSortFormVisible && (
          <SortForm onSort={handleSort} onClear={handleClearAll} />
        )}
      </div>

      {isLoading || rockets.length === 0 ? ( // Додаємо перевірку на порожній список
        <LoadingSpinner /> // Використовуємо спінер замість тексту або пустих карток
      ) : (
        <RocketCards rockets={rockets} />
      )}
    </div>
  );
};

export default CatalogPage;
