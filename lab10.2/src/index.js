// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import reportWebVitals from "./reportWebVitals.js";

// Створення root для React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Вимірювання продуктивності
reportWebVitals();
