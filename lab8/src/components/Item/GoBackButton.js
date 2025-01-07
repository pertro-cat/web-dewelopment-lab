// GoBackButton.js
import React from "react";

const GoBackButton = ({ onClick }) => {
  return (
    <button className="go-back-btn" onClick={onClick}>
      Go back
    </button>
  );
};

export default GoBackButton;
