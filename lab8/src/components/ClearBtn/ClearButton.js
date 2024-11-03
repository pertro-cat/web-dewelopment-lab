import React from "react";

const ClearButton = ({ onClick }) => (
  <button
    id="clear__button"
    type="button"
    className="btn btn-danger btn-sm"
    onClick={onClick}
  >
    Clear
  </button>
);

export default ClearButton;
