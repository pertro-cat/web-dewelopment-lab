import React from "react";

function ViewMoreButton({ onClick }) {
  return (
    <button onClick={onClick} className="view-more-button">
      View More
    </button>
  );
}

export default ViewMoreButton;
