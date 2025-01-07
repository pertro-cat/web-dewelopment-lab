// src/components/Cards/RocketCards.js
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"; // Підключаємо useDispatch
import { addToCart } from "../../redux/cartSlice.js"; // Імпортуємо дію addToCart
import ViewMoreButton from "../ViewMore/BtnViewMore.js";

function RocketCards({ rockets }) {
  const dispatch = useDispatch(); // Ініціалізація useDispatch

  // Перевірка, чи rockets є масивом, щоб уникнути помилок
  if (!Array.isArray(rockets) || rockets.length === 0) {
    return <p>No rockets found.</p>;
  }

  const handleAddToCart = (rocket) => {
    // Диспатчимо ракету в кошик
    dispatch(addToCart({ rocket, quantity: 1, variant: "block1" }));
  };

  return (
    <div className="row">
      {rockets.map((rocket) => {
        const {
          id,
          name,
          image,
          manufacturer,
          country,
          count_mission,
          about_rocket,
          price_of_launch,
          availability_of_launch,
        } = rocket;

        return (
          <div key={id} className="col-md-4 mb-4">
            <div className="card bg-dark text-light p-3">
              <h2 className="rocket-name">{name}</h2>
              <img src={image} alt={name} className="img-fluid" />
              <p>
                <strong>Manufacturer:</strong> {manufacturer}
              </p>
              <p>
                <strong>Country:</strong> {country}
              </p>
              <p>
                <strong>Mission Count:</strong> {count_mission}
              </p>
              <p>{about_rocket}</p>
              <p className="rocket-price">
                <strong>Price of Launch:</strong> ${price_of_launch}
              </p>
              <p className="rocket-availability">
                <strong>Availability:</strong>
                {availability_of_launch > 0
                  ? `${availability_of_launch} Available Launches`
                  : "Not Available"}
              </p>
              <div className="buttons">
                <Link to={`/item/${id}`}>
                  <ViewMoreButton />
                </Link>
                {/* Кнопка для додавання ракети в кошик */}
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(rocket)}
                  disabled={availability_of_launch === 0} // Якщо ракета недоступна, кнопка заблокована
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RocketCards;
