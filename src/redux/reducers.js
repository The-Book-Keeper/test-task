import {FETCH_PRODUCTS} from "./types";

const initialState = {
    products: [],
    total: 0
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {...state, products: action.payload, total: action.total}
        default:
            return state
    }
}