import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.js";
import RocketCards from "./components/Cards/RocketCards.js";
import RocketCard from "./components/Card/RocketCard.js";
import CatalogPage from "./components/Catalog/CatalogPage.js";
import Footer from "./components/Footor/Footor.js";
import "./App.css";

function App() {
  const [rockets, setRockets] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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

      if (params.order === "asc") {
        data.sort((a, b) => a.count_mission - b.count_mission);
      } else if (params.order === "desc") {
        data.sort((a, b) => b.count_mission - a.count_mission);
      }

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

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {rockets.length > 0 && (
                  <div className="main-rocket-card">
                    <RocketCard
                      rocket={rockets[currentIndex]}
                      onPrevious={handlePrevious}
                      onNext={handleNext}
                    />
                  </div>
                )}
                <RocketCards rockets={rockets} />
              </>
            }
          />
          <Route
            path="/catalog"
            element={
              <CatalogPage
                rockets={rockets}
                onSearch={fetchRockets}
                onSort={fetchRockets}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
