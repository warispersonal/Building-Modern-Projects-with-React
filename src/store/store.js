import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "./rootReducer";
import thunkMiddleware from 'redux-thunk';

export const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);