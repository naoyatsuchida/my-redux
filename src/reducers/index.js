import { combineReducers } from "redux";
import { counterReducer } from "./counter";
import { isLogginReducer } from "./isLoggin";

export const allReducers = combineReducers({
  counter: counterReducer,
  isLogin: isLogginReducer,
});
