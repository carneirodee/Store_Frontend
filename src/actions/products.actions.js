import { getProducts, getProduct } from '../api/products.api';

export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR"
export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_ERROR = "GET_PRODUCT_ERROR"

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

export const fetchProduct = (id) => async(dispatch) => {
    await dispatch({ type: GET_PRODUCT_REQUEST, isLoadingProducts: false });
    try {
        const response = await getProduct(id);
        return dispatch({
            type: GET_PRODUCT_SUCCESS,
            product: response.data,
        });
    } catch (err) {
        return dispatch({ type: GET_PRODUCT_ERROR, err });
    }
};