import {combineReducers} from "redux";
import {todoReducer} from "./reducer/todo";
import {todoApiReducer} from "./reducer/todo_api";

export const rootReducer = combineReducers({
   todoReducer,
   todoApiReducer
})