import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../../redux/cartSlice.js";
import { FaTimes } from "react-icons/fa"; // Іконка хрестика
import "./ShoppingItem.css";

const ShoppingItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const dispatch = useDispatch();

  // Оновлення кількості при зміні input
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);

    // Перевірка, чи можна збільшити кількість
    const maxQuantity = item.rocket.availability_of_launch;
    if (newQuantity >= 0 && newQuantity <= maxQuantity) {
      setQuantity(newQuantity);
      dispatch(
        updateQuantity({
          id: item.rocket.id,
          quantity: newQuantity,
          block: item.block,
          characteristic: item.characteristic,
        })
      );
    } else {
      alert(`Максимальна кількість товару: ${maxQuantity}`);
    }
  };

  const handleRemoveFromCart = () => {
    // Видалення товару з кошика по його ID
    dispatch(removeFromCart(item.rocket.id));
  };

  // Оновлення ціни товару при зміні кількості
  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  return (
    <div className="shopping-item">
      {/* Додаємо хрестик для видалення */}
      <div className="remove-item" onClick={handleRemoveFromCart}>
        <FaTimes /> {/* Іконка хрестика */}
      </div>

      <img
        src={item.rocket.image}
        alt={item.rocket.name}
        className="shopping-item-image"
      />
      <div className="shopping-item-details">
        <h2>{item.rocket.name}</h2>
        <p>
          <strong>Price:</strong> ${item.rocket.price_of_launch}
        </p>
        <p>
          <strong>Quantity:</strong>
          <input
            type="number"
            value={quantity}
            min="1"
            max={item.rocket.availability_of_launch} // Обмеження на кількість
            onChange={handleQuantityChange}
            onWheel={(e) => e.preventDefault()} // Заборона зміни за допомогою колеса миші
          />
        </p>

        {/* Виведення характеристик */}
        <div className="specifications">
          <p>
            <strong>Specifications:</strong>
          </p>
          <ul>
            <li>Block: {item.block}</li>
            <li>Characteristic: {item.characteristic}</li>
          </ul>
        </div>

        {/* Загальна ціна для цього товару */}
        <p>
          <strong>Total Price:</strong> $
          {(item.rocket.price_of_launch * quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ShoppingItem;
