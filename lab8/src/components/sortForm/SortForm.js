// SortForm.js
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
      launchMax: launchMax ? parseInt(launchMax, 10) : undefined,
      launchMin: launchMin ? parseInt(launchMin, 10) : undefined,
      country: country || undefined,
      manufacturer: manufacturer || undefined,
      order: sortOrder || undefined,
    };

    onSort(sortParams);
  };

  const handleClear = () => {
    // Скидаємо всі значення до початкових
    setLaunchMax("");
    setLaunchMin("");
    setCountry("");
    setManufacturer("");
    setSortOrder("");

    // Викликаємо onSort із порожніми параметрами для скидання фільтрації
    onSort({});
  };

  return (
    <form onSubmit={handleSort}>
      <MaxLaunchInput
        value={launchMax}
        onChange={(value) => setLaunchMax(value)}
      />
      <LaunchMinInput
        value={launchMin}
        onChange={(value) => setLaunchMin(value)}
      />
      <CountrySelect value={country} onChange={(value) => setCountry(value)} />
      <ManufacturerSelect
        value={manufacturer}
        onChange={(value) => setManufacturer(value)}
      />
      <SortOrderSelect
        value={sortOrder}
        onChange={(value) => setSortOrder(value)}
      />
      <button type="submit">Sort</button>
      <ClearButton onClick={handleClear} /> {/* Додаємо кнопку очищення */}
    </form>
  );
};

export default SortForm;
