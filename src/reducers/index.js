import { combineReducers } from "redux";
import user from "./user";
import restaurants from "./restaurant";
export default combineReducers({ user, restaurants });
