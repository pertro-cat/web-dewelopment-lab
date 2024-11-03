// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.js";
import RocketCards from "./components/Cards/RocketCards.js";
import RocketCard from "./components/Card/RocketCard.js";
import CatalogPage from "./components/Catalog/CatalogPage.js";
import Item from "./components/Item/Item.js"; // Імпорт Item компонента
import Footer from "./components/Footor/Footor.js";
import ViewMoreButton from "./components/ViewMore/BtnViewMore.js";

import "./App.css";

function App() {
  const [rockets, setRockets] = useState([]);
  const [filteredRockets, setFilteredRockets] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const fetchRockets = async (params = {}) => {
    let query = "";

    const queryParams = new URLSearchParams();
    if (params.name) queryParams.append("name", params.name);
    if (params.country) queryParams.append("country", params.country);
    if (params.manufacturer)
      queryParams.append("manufacturer", params.manufacturer);
    if (params.launchMax) queryParams.append("launchMax", params.launchMax);
    if (params.launchMin) queryParams.append("launchMin", params.launchMin);
    if (params.order) queryParams.append("order", params.order);

    if (queryParams.toString()) {
      query = `?${queryParams.toString()}`;
    }

    try {
      const response = await fetch(`http://localhost:8080/rockets${query}`);
      const data = await response.json();

      let filteredData = data;

      if (params.launchMin || params.launchMax) {
        filteredData = filteredData.filter((rocket) => {
          const launchCount = rocket.count_mission || 0;
          const meetsMin = params.launchMin
            ? launchCount >= params.launchMin
            : true;
          const meetsMax = params.launchMax
            ? launchCount <= params.launchMax
            : true;
          return meetsMin && meetsMax;
        });
      }

      if (params.country) {
        filteredData = filteredData.filter(
          (rocket) =>
            rocket.country.toLowerCase() === params.country.toLowerCase()
        );
      }

      if (params.manufacturer) {
        filteredData = filteredData.filter(
          (rocket) =>
            rocket.manufacturer.toLowerCase() ===
            params.manufacturer.toLowerCase()
        );
      }

      if (params.order === "asc") {
        filteredData.sort((a, b) => a.count_mission - b.count_mission);
      } else if (params.order === "desc") {
        filteredData.sort((a, b) => b.count_mission - a.count_mission);
      }

      setFilteredRockets(filteredData);
      setRockets(data);
    } catch (error) {
      console.error("Error fetching rockets:", error);
    }
  };

  useEffect(() => {
    fetchRockets();
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? rockets.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === rockets.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const handleSearch = (searchParams) => {
    const { name } = searchParams;
    const searchData = rockets.filter((rocket) =>
      name ? rocket.name.toLowerCase().includes(name.toLowerCase()) : true
    );
    setFilteredRockets(searchData);
  };

  const handleSort = (sortParams) => {
    fetchRockets(sortParams);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {filteredRockets.length > 0 && (
                  <div className="main-rocket-card">
                    <RocketCard
                      rocket={filteredRockets[currentIndex]}
                      onPrevious={handlePrevious}
                      onNext={handleNext}
                    />
                  </div>
                )}
                <RocketCards rockets={filteredRockets.slice(0, visibleCount)} />
                {visibleCount < filteredRockets.length && (
                  <ViewMoreButton onClick={handleViewMore} />
                )}
              </>
            }
          />
          <Route
            path="/catalog"
            element={
              <CatalogPage
                rockets={filteredRockets}
                onSearch={handleSearch}
                onSort={handleSort}
              />
            }
          />
          <Route path="/item/:id" element={<Item rockets={rockets} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
