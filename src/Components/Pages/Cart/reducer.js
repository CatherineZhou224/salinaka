import allDatas from "../../../data/data_origin";
import {
  addToCarts,
  increaseQuantByOne,
  decreaseQuantByOne,
  removeFromCarts,
  clearAllItems,
} from "./actionType";

// Load cart items from local storage
const loadCartItemsFromLocalStorage = () => {
  try {
    const serializedCartItems = localStorage.getItem("cartItems");
    if (serializedCartItems === null) {
      return [];
    }
    return JSON.parse(serializedCartItems);
  } catch (e) {
    console.warn("Failed to load cart items from local storage:", e);
    return [];
  }
};

// Save cart items to local storage
const saveCartItemsToLocalStorage = (cartItems) => {
  try {
    const serializedCartItems = JSON.stringify(cartItems);
    localStorage.setItem("cartItems", serializedCartItems);
  } catch (e) {
    console.warn("Failed to save cart items to local storage:", e);
  }
};

const data = allDatas();
let initialState = {
  allData: data,
  cartItems: loadCartItemsFromLocalStorage(),
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case addToCarts: {
      const { parameter, size, color } = action.payload;
      const product = state.allData.find(
        (product) => product.parameter === parameter
      );

      if (!product) {
        // If the product is not found, return the current state
        return state;
      }

      const exist = state.cartItems.find(
        (item) =>
          item.parameter === parameter &&
          item.size === size &&
          item.color === color
      );

      let updatedCartItems;

      if (exist) {
        updatedCartItems = state.cartItems.map((item) =>
          item.parameter === parameter &&
          item.size === size &&
          item.color === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCartItems = [
          ...state.cartItems,
          { ...product, size, color, quantity: 1 },
        ];
      }

      // Save the updated cart items to local storage
      saveCartItemsToLocalStorage(updatedCartItems);

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }
    case removeFromCarts: {
      const updatedCartItems = state.cartItems.filter(
        (item) => item.parameter !== action.payload
      );

      // Save the updated cart items to local storage
      saveCartItemsToLocalStorage(updatedCartItems);

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }
    case increaseQuantByOne: {
      const updatedCartItems = state.cartItems.map((item) =>
        item.parameter === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      saveCartItemsToLocalStorage(updatedCartItems);

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }
    case decreaseQuantByOne: {
      const updatedCartItems = state.cartItems.map((item) =>
        item.parameter === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      saveCartItemsToLocalStorage(updatedCartItems);

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }
    case clearAllItems: {
      // Clear all cart items
      const updatedCartItems = [];

      saveCartItemsToLocalStorage(updatedCartItems);

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
