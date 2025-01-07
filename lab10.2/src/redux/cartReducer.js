// src/redux/cartReducer.js
const initialState = {
  cartItems: [], // Масив для збереження товарів у кошику
};

const cartReducer = (state = initialState, action) => {
  console.log("Action received in cartReducer:", action); // Логуємо всю дію

  switch (action.type) {
    case "ADD_TO_CART":
      console.log("Current cart items:", state.cartItems); // Логуємо поточні елементи в кошику
      const { rocket, quantity, block, characteristic } = action.payload;

      // Перевірка на наявність ціни в rocket
      if (!rocket || !rocket.price_of_launch) {
        console.error("Ціна відсутня в об'єкті rocket");
        return state;
      }

      // Перевірка на наявність товару в кошику за id, block та characteristic
      const itemExists = state.cartItems.find(
        (item) =>
          item.id === rocket.id &&
          item.block === block && // використовуємо block замість variant
          item.characteristic === characteristic
      );
      console.log("Item exists in cart:", itemExists); // Логуємо, чи існує товар в кошику

      if (itemExists) {
        console.log("Updating existing item in cart...");
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === rocket.id &&
            item.block === block && // використовуємо block
            item.characteristic === characteristic
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      } else {
        console.log("Adding new item to cart...");
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            {
              id: rocket.id,
              name: rocket.name,
              block, // зберігаємо block
              quantity,
              characteristic,
              price: rocket.price_of_launch, // Зберігаємо ціну товару
            },
          ],
        };
      }
    default:
      return state;
  }
};

export default cartReducer;
