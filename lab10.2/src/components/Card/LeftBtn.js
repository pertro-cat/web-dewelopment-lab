import React from "react";
import leftButton from "../images/left_button.svg";
import "../Card/Card.css"; // Переконайтеся, що стилі правильно імпортовані

const LeftBtn = ({ onClick }) => {
  return (
    <button
      className="btn position-absolute"
      style={{ left: "10px", top: "50%", transform: "translateY(-50%)" }}
      onClick={onClick}
    >
      <img src={leftButton} alt="Previous" />
    </button>
  );
};

export default LeftBtn;
