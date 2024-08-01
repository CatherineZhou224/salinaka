import {
  addToCarts,
  clearAllItems,
  decreaseQuantByOne,
  increaseQuantByOne,
  removeFromCarts,
  applyFilters,
  resetFilters,
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

export const applyFilter = (parameter) => ({
  type: applyFilters,
  payload: parameter,
});

export const resetFilter = () => ({
  type: resetFilters,
});

const cartActions = {
  addToCart,
  removeFromCart,
  increaseQuant,
  decreaseQuant,
  clearAllItem,
  applyFilter,
  resetFilter,
};

export default cartActions;
