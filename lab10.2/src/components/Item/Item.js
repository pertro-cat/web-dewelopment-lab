//src/components/Item/Item.js

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice.js";
import CharacteristicButton from "./CharacteristicButton.js";
import GoBackButton from "./GoBackButton.js";
import AddToCartButton from "./AddToCartButton.js";
import "./Item.css";

const Item = () => {
  const { id } = useParams(); // Отримуємо id з URL
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [rocket, setRocket] = useState(null);
  const [selectedCharacteristic, setSelectedCharacteristic] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [selectedBlock, setSelectedBlock] = useState("block1");
  const [isLoading, setIsLoading] = useState(true);

  const cartItems = useSelector((state) => state.cart.items);

  // Завантаження інформації про ракету за допомогою API
  useEffect(() => {
    const fetchRocket = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/rockets/${id}`);
        setRocket(response.data);
        console.log("Rocket fetched:", response.data); // Логування після отримання ракети
      } catch (error) {
        console.error("Error fetching rocket:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRocket();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!rocket) {
    return <p>Item not found</p>;
  }

  // Перевірка, чи товар вже є в кошику
  const rocketInCart = cartItems.find((item) => item.id === rocket.id);
  const availableLaunches = rocket.availability_of_launch;
  const alreadyInCart = rocketInCart ? rocketInCart.quantity : 0;
  const maxQuantity = availableLaunches - alreadyInCart;

  // Збільшення кількості товару в кошику
  const handleIncreaseQuantity = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
      console.log("Increased quantity:", quantity + 1); // Логування при збільшенні кількості
    }
  };

  // Зменшення кількості товару в кошику
  const handleDecreaseQuantity = () => {
    const newQuantity = Math.max(1, quantity - 1);
    setQuantity(newQuantity);
    console.log("Decreased quantity:", newQuantity); // Логування при зменшенні кількості
  };

  // Додавання товару в кошик
  const handleAddToCart = () => {
    console.log("Before dispatching addToCart:");
    console.log("Selected block:", selectedBlock);
    console.log("Selected characteristic:", selectedCharacteristic);
    console.log("Rocket data:", rocket);
    console.log("Quantity:", quantity);

    const payload = {
      rocket, // Повні дані про товар
      quantity, // Кількість товару
      block: selectedBlock, // Обраний блок
      characteristic: selectedCharacteristic, // Обрана характеристика
    };

    console.log("Adding to cart:", payload);

    dispatch(addToCart(payload));

    // Логування після додавання в Redux
    console.log("Current cart items:", cartItems);

    navigate("/cart");
  };

  // Виведення інформації про характеристики товару
  const renderCharacteristicContent = () => {
    switch (selectedCharacteristic) {
      case 1:
        return <p>{rocket.about_rocket}</p>;
      case 2:
        return <p>More technical details about {rocket.name}.</p>;
      default:
        return null;
    }
  };

  // Вибір блоку
  const renderBlockSelect = () => (
    <select
      value={selectedBlock}
      onChange={(e) => {
        setSelectedBlock(e.target.value);
        console.log("Selected block changed:", e.target.value); // Логування зміни блоку
      }}
    >
      <option value="block1">Block 1</option>
      <option value="block2">Block 2</option>
      <option value="block3">Block 3</option>
      <option value="block4">Block 4</option>
      <option value="block5">Block 5</option>
    </select>
  );

  return (
    <div className="item-page">
      <div className="item-content">
        <div className="item-image">
          <img src={rocket.image} alt={rocket.name} />
        </div>
        <div className="item-details">
          <div className="item-characteristics">
            <CharacteristicButton
              label="1 characteristic"
              isActive={selectedCharacteristic === 1}
              onClick={() => {
                setSelectedCharacteristic(1);
                console.log("Selected characteristic: 1");
              }}
            />
            <CharacteristicButton
              label="2 characteristic"
              isActive={selectedCharacteristic === 2}
              onClick={() => {
                setSelectedCharacteristic(2);
                console.log("Selected characteristic: 2");
              }}
            />
          </div>
          <h2>{rocket.name}</h2>
          {renderCharacteristicContent()}
          <div className="fields">
            <div className="field">
              <label>Quantity</label>
              <div className="quantity-buttons">
                <button onClick={handleDecreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button
                  onClick={handleIncreaseQuantity}
                  disabled={quantity >= maxQuantity}
                >
                  +
                </button>
              </div>
            </div>
            <div className="field">
              <label>Selectable Field</label>
              {renderBlockSelect()}{" "}
            </div>
          </div>
          <p className="price">Price: ${rocket.price_of_launch}</p>
          <div className="buttons">
            <GoBackButton onClick={() => navigate(-1)} />
            <AddToCartButton onClick={handleAddToCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
