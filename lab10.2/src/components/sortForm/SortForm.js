// src/components/sortForm/SortForm.js
import React, { useState } from "react";
import MaxLaunchInput from "./MaxLaunchInput.js";
import LaunchMinInput from "./LaunchMinInput.js";
import CountrySelect from "./CountrySelect.js";
import ManufacturerSelect from "./ManufacturerSelect.js";
import SortOrderSelect from "./SortOrderSelect.js";
import ClearButton from "../ClearBtn/ClearButton.js";

const SortForm = ({ onSort }) => {
  const [launchMax, setLaunchMax] = useState("");
  const [launchMin, setLaunchMin] = useState("");
  const [country, setCountry] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const handleSort = (e) => {
    e.preventDefault();
    const sortParams = {
      launchMax: launchMax || undefined,
      launchMin: launchMin || undefined,
      country: country || undefined,
      manufacturer: manufacturer || undefined,
      order: sortOrder || undefined,
    };
    onSort(sortParams);
  };

  const handleClear = () => {
    setLaunchMax("");
    setLaunchMin("");
    setCountry("");
    setManufacturer("");
    setSortOrder("");
    onSort({}); // Очищення для відображення всіх елементів
  };

  return (
    <div className="col-md-4 ms-auto">
      <div className="form">
        <form
          id="search__form"
          className="rocket__sort__form mb-4"
          onSubmit={handleSort}
        >
          <h2 className="mb-3 text-light">Sort rocket</h2>
          <MaxLaunchInput
            value={launchMax}
            onChange={(e) => setLaunchMax(e.target.value)}
          />
          <LaunchMinInput
            value={launchMin}
            onChange={(e) => setLaunchMin(e.target.value)}
          />
          <CountrySelect
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <ManufacturerSelect
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          />
          <SortOrderSelect
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          />
          <button
            id="sort__button"
            type="submit"
            className="btn btn-light btn-sm"
          >
            Sort
          </button>
          <ClearButton onClick={handleClear} />
        </form>
      </div>
    </div>
  );
};

export default SortForm;
