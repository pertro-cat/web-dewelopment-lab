import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header/Header.js";
import RocketCards from "./components/Cards/RocketCards.js";
import RocketCard from "./components/Card/RocketCard.js";
import CatalogPage from "./components/Catalog/CatalogPage.js";
import Item from "./components/Item/Item.js";
import Footer from "./components/Footor/Footor.js";
import ViewMoreButton from "./components/ViewMore/BtnViewMore.js";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner.js";
import ShoppingCart from "./components/Shoping/ShopingCard.js"; // Імпортуємо компонент кошика
import { useSelector } from "react-redux"; // Для доступу до даних кошика
import SubmitForm from "./components/SubmitForm/SubmitForm.js";

import "./App.css";

const AppContent = () => {
  const [rockets, setRockets] = useState([]);
  const [filteredRockets, setFilteredRockets] = useState([]);
  const [visibleRockets, setVisibleRockets] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const [isCatalogLoading, setIsCatalogLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Отримуємо дані з кошика через Redux
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    loadRocketsWithDelay();
  }, []);

  const loadRocketsWithDelay = async (filters = {}) => {
    setIsLoading(true);

    const delay = new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      const [response] = await Promise.all([
        axios.get("http://localhost:8080/rockets", { params: filters }),
        delay,
      ]);

      const data = Array.isArray(response.data)
        ? response.data
        : Object.values(response.data);

      setRockets(data);
      setFilteredRockets(data);
      setVisibleRockets(data.slice(0, visibleCount));
    } catch (error) {
      console.error("Error fetching rockets:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadCatalogRocketsWithDelay = async (filters = {}) => {
    setIsCatalogLoading(true);

    const delay = new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      const [response] = await Promise.all([
        axios.get("http://localhost:8080/rockets", { params: filters }),
        delay,
      ]);

      const data = Array.isArray(response.data)
        ? response.data
        : Object.values(response.data);

      setRockets(data);
      setFilteredRockets(data);
      setVisibleRockets(data.slice(0, visibleCount));
    } catch (error) {
      console.error("Error fetching rockets for catalog:", error);
    } finally {
      setIsCatalogLoading(false);
    }
  };

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
    setVisibleRockets(filteredRockets.slice(0, visibleCount + 3));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredRockets.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredRockets.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {isLoading ? (
                <LoadingSpinner />
              ) : (
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
                  <RocketCards rockets={visibleRockets} />
                  {visibleCount < filteredRockets.length && (
                    <ViewMoreButton onClick={handleViewMore} />
                  )}
                </>
              )}
            </>
          }
        />
        <Route
          path="/catalog"
          element={
            isCatalogLoading ? (
              <LoadingSpinner />
            ) : (
              <CatalogPage
                loadRockets={loadCatalogRocketsWithDelay}
                rockets={filteredRockets}
              />
            )
          }
        />
        <Route path="/item/:id" element={<Item />} />
        {/* Додаємо новий маршрут для кошика */}
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<SubmitForm />} />
      </Routes>
      <Footer />
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
