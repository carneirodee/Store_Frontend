import { getProducts } from '../api';

export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR"

export const fetchProducts = () => async(dispatch) => {
    await dispatch({ type: GET_PRODUCTS_REQUEST, isLoadingProducts: false });
    try {
        const response = await getProducts();
        return dispatch({
            type: GET_PRODUCTS_SUCCESS,
            products: response.data,
        });
    } catch (err) {
        return dispatch({ type: GET_PRODUCTS_ERROR, err });
    }
};
