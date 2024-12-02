import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../../redux/cartSlice.js";
import ShoppingItem from "./ShoppingItem.js";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Обчислюємо загальну суму кошика
  const totalAmount = cartItems
    .reduce((acc, item) => {
      // Перевіряємо, чи є ціна та кількість товару
      if (item.rocket?.price_of_launch && !isNaN(item.quantity)) {
        return acc + item.rocket.price_of_launch * item.quantity;
      }
      return acc; // Якщо немає ціни або кількості, пропускаємо товар
    }, 0)
    .toFixed(2); // Форматування суми до 2 знаків після коми

  return (
    <div className="shopping-cart">
      <h1 className="title">Shopping Cart</h1>

      {/* Якщо кошик порожній */}
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <ShoppingItem key={item.id} item={item} />
          ))}
        </div>
      )}

      {/* Горизонтальна лінія */}
      <hr />

      {/* Загальна сума */}
      <div className="total">
        <p>Total amount: ${totalAmount}</p>
      </div>

      {/* Кнопки управління */}
      <div className="cart-buttons">
        <Link to="/catalog" className="back-button">
          Back to Catalog
        </Link>

        {/* Перевірка на наявність товарів у кошику перед переходом на форму оформлення замовлення */}
        {cartItems.length > 0 ? (
          <Link to="/checkout" className="continue-button">
            Continue
          </Link>
        ) : (
          <button className="continue-button" disabled>
            Continue
          </button>
        )}

        <button
          className="clear-cart-button"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
