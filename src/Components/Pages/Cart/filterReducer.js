import allDatas from "../../../data/data_origin";
import { applyFilters, resetFilters } from "./actionType";

let datas = allDatas();

let product = {
  products: datas,
  filterItems: datas,
};

let ascendingItem = (a, b) => a.name.localeCompare(b.name);
let descendingItem = (a, b) => b.name.localeCompare(a.name);
let priceHighLowItem = (a, b) => b.price - a.price;
let priceLowHighItem = (a, b) => a.price - b.price;

let filterReducer = (state = product, action) => {
  switch (action.type) {
    case resetFilters:
      return {
        ...state,
        filterItems: state.products,
      };

    case applyFilters:
      let { value, brand, sortBy } = action.payload;

      let filterProducts = state.products.filter(
        (item) => item.price >= value[0] && item.price <= value[1]
      );

      if (brand !== "empty") {
        filterProducts = filterProducts.filter((item) => item.brand === brand);
      }

      if (sortBy !== "empty") {
        if (sortBy === "az") {
          filterProducts.sort(ascendingItem);
        } else if (sortBy === "za") {
          filterProducts.sort(descendingItem);
        } else if (sortBy === "hl") {
          filterProducts.sort(priceHighLowItem);
        } else if (sortBy === "lh") {
          filterProducts.sort(priceLowHighItem);
        }
      }

      return {
        ...state,
        filterItems: filterProducts,
      };

    default:
      return state;
  }
};

export default filterReducer;
