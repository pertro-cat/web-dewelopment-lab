import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [], // Завантажуємо кошик з localStorage
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { rocket, quantity, block, characteristic } = action.payload;

      // Перевірка на наявність price у rocket
      if (!rocket || !rocket.price_of_launch) {
        console.error("Ціна відсутня у товарі");
        return;
      }

      // Знаходимо товар з такими ж характеристиками в кошику
      const existingItem = state.items.find(
        (item) =>
          item.rocket.id === rocket.id &&
          item.block === block &&
          item.characteristic === characteristic
      );

      // Якщо товар вже є в кошику
      if (existingItem) {
        // Перевірка на максимальну кількість товару на складі
        const maxQuantity = rocket.availability_of_launch;
        const newQuantity = existingItem.quantity + quantity;

        // Якщо є місце для додавання товару
        if (newQuantity <= maxQuantity) {
          existingItem.quantity += quantity; // Збільшуємо кількість
        } else {
          console.warn(
            `Не можна додати більше товару. Максимальна кількість: ${maxQuantity}`
          );
        }
      } else {
        // Додаємо новий товар в кошик, якщо його ще немає
        state.items.push({
          rocket,
          quantity,
          block,
          characteristic,
          price: rocket.price_of_launch, // Зберігаємо ціну разом з іншими даними
        });
      }

      // Оновлюємо localStorage
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    updateQuantity: (state, action) => {
      const { id, quantity, block, characteristic } = action.payload;
      const item = state.items.find(
        (item) =>
          item.rocket.id === id &&
          item.block === block &&
          item.characteristic === characteristic
      );
      if (item) {
        const maxQuantity = item.rocket.availability_of_launch;
        // Якщо кількість не перевищує максимальну на складі
        if (quantity <= maxQuantity) {
          item.quantity = quantity;
        } else {
          console.warn(
            `Не можна встановити кількість більше, ніж доступно на складі. Максимум: ${maxQuantity}`
          );
        }
      }

      // Оновлюємо localStorage
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeFromCart: (state, action) => {
      // Видалення товару по його ID
      const newItems = state.items.filter(
        (item) => item.rocket.id !== action.payload
      );
      state.items = newItems;

      // Оновлюємо localStorage
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    clearCart: (state) => {
      // Очистка всього кошика
      state.items = [];

      // Очищуємо localStorage
      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
