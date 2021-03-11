import {combineReducers} from "redux";
import {Reducer} from "./reducers";

export const rootReducer = combineReducers({
    products: Reducer
})