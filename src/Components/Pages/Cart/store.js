import { createStore } from "redux";
import combinedReducer from "./combineReducer";

const store = createStore(combinedReducer);

export default store;
