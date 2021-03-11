import {FAILED_PRODUCTS, FETCH_PRODUCTS, START_PRODUCTS} from "./types";

export const startProducts = () => ({
    type: START_PRODUCTS,
});

export const failedProducts = (error) => ({
    type: FAILED_PRODUCTS,
    payload: error
});

export function fetchProducts(page, limit, search) {
    return async dispatch => {
        dispatch(startProducts())
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments`)
            const json = await response.json()
            const filteredProducts = search ? json.filter(product => product.name.match(search)) : json
            const payload = filteredProducts.slice((page - 1) * 10, page * 10)
            dispatch({
                type: FETCH_PRODUCTS,
                payload: payload,
                total: filteredProducts.length
            })
        } catch (e) {
            dispatch(failedProducts(e))
        }
    }
}
