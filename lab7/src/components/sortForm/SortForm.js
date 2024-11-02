import React, { useState } from "react";
import MaxLaunchInput from "../MaxLaunch/MaxLaunchInput.js";
import LaunchMinInput from "../LaunchMin/LaunchMinInput.js";
import CountrySelect from "../CountrySelect/CountrySelect.js";
import ManufacturerSelect from "../ManufacturerSelect/ManufacturerSelect.js";
import SortOrderSelect from "../SortOrderSelect/SortOrderSelect.js";

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

  return (
    <div className="col-md-4 ms-auto">
      <div className="form">
        <form
          id="search__form"
          className="rocket__sort__form mb-4"
          onSubmit={handleSort}
        >
          <h2 className="mb-3 text-light">Sort rocket</h2>
          <MaxLaunchInput value={launchMax} onChange={setLaunchMax} />{" "}
          <LaunchMinInput value={launchMin} onChange={setLaunchMin} />
          <CountrySelect value={country} onChange={setCountry} />
          <ManufacturerSelect value={manufacturer} onChange={setManufacturer} />
          <SortOrderSelect value={sortOrder} onChange={setSortOrder} />
          <button
            id="sort__button"
            type="submit"
            className="btn btn-light btn-sm"
          >
            Sort
          </button>
        </form>
      </div>
    </div>
  );
};

export default SortForm;
