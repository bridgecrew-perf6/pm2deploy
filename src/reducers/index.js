import { combineReducers } from "redux";
import simpleReducer from "./Simple";

export default combineReducers({
  simple: simpleReducer
});
