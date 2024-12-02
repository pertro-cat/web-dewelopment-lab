// src/components/SearchForm/SearchForm.js
import React, { useState } from "react";
import SearchButton from "./SearchButton.js";
import SearchInput from "./SearchInput.js";
import ClearButton from "../ClearBtn/ClearButton.js";

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(""); // Додаємо локальний стан для значення поля

  const handleSearch = (e) => {
    e.preventDefault();
    const searchParams = { name: searchTerm }; // Використовуємо стан замість document.getElementById
    onSearch(searchParams);
  };

  const handleClear = () => {
    setSearchTerm(""); // Очистка значення у стані
    onSearch({}); // Викликаємо очищення для завантаження всіх елементів
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
          <SearchInput
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchButton />
          <ClearButton onClick={handleClear} />
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
