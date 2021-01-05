import { combineReducers } from "redux";
import simpleReducer from "./Simple";
import PlainListReducer from "../templates/PlainList/Reducers";

export default combineReducers({
  simple: simpleReducer,
  plain_list: PlainListReducer
  // plain_list: PlainListReducer
  // plain_list: PlainListReducer
});
