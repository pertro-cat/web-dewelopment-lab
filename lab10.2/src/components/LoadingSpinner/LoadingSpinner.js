// src/LoadingSpinner/LoadingSpinner.js

import React from "react";
import "./LoadingSpinner.css"; // Переконайтеся, що CSS файл для спінера теж існує

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
