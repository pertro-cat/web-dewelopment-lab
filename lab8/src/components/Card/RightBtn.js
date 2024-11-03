import React from "react";
import rightButton from "../images/right_button.svg";
import "../Card/Card.css"; // Переконайтеся, що стилі правильно імпортовані

const RightBtn = ({ onClick }) => {
  return (
    <button
      className="btn position-absolute"
      style={{ right: "10px", top: "50%", transform: "translateY(-50%)" }}
      onClick={onClick}
    >
      <img src={rightButton} alt="Next" />
    </button>
  );
};

export default RightBtn;
