import {
  addToCarts,
  clearAllItems,
  decreaseQuantByOne,
  increaseQuantByOne,
  removeFromCarts,
} from "./actionType";

const addToCart = (parameter, size, color) => ({
  type: addToCarts,
  payload: { parameter, size, color },
});

const removeFromCart = (parameter) => ({
  type: removeFromCarts,
  payload: parameter,
});

const increaseQuant = (parameter) => ({
  type: increaseQuantByOne,
  payload: parameter,
});

const decreaseQuant = (parameter) => ({
  type: decreaseQuantByOne,
  payload: parameter,
});

const clearAllItem = () => ({
  type: clearAllItems,
});

export default {
  addToCart,
  removeFromCart,
  increaseQuant,
  decreaseQuant,
  clearAllItem,
};
