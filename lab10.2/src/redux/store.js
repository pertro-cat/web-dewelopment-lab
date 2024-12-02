import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js"; // використовуємо новий cartSlice

const store = configureStore({
  reducer: {
    cart: cartReducer, // використання нового редуктора
  },
});

console.log("Redux store initialized:", store.getState()); // Логуємо стан store після ініціалізації

export default store;
