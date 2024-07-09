import {
  addToCarts,
  clearAllItems,
  decreaseQuantByOne,
  increaseQuantByOne,
  removeFromCarts,
} from "./actionType";

export const addToCart = (parameter, size, color) => ({
  type: addToCarts,
  payload: { parameter, size, color },
});

export const removeFromCart = (parameter) => ({
  type: removeFromCarts,
  payload: parameter,
});

export const increaseQuant = (parameter) => ({
  type: increaseQuantByOne,
  payload: parameter,
});

export const decreaseQuant = (parameter) => ({
  type: decreaseQuantByOne,
  payload: parameter,
});

export const clearAllItem = () => ({
  type: clearAllItems,
});

const cartActions = {
  addToCart,
  removeFromCart,
  increaseQuant,
  decreaseQuant,
  clearAllItem,
};

export default cartActions;
