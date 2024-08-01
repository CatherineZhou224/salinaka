import { combineReducers } from "redux";
import rootReducer from "./reducer";
import filterReducer from "./filterReducer";

const combinedReducer = combineReducers({
  root: rootReducer,
  filter: filterReducer,
});

export default combinedReducer;
