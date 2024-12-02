// Item/AddToCartButton.js
import React from "react";

const AddToCartButton = ({ onClick }) => {
  return (
    <button className="add-to-cart-btn" onClick={onClick}>
      Add to cart
    </button>
  );
};

export default AddToCartButton;
