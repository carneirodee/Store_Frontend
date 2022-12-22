import { getCart, updateCart } from '../api/cart.api';

export const GET_CART_REQUEST = "GET_CART_REQUEST";
export const GET_CART_SUCCESS = "GET_CART_SUCCESS";
export const GET_CART_ERROR = "GET_CART_ERROR"

export const fetchCart = (data) => async(dispatch) => {
    await dispatch({ type: GET_CART_REQUEST, isLoadingCart: false });
    try {
        const response = await getCart(data);
        console.log(response);
        return dispatch({
            type: GET_CART_SUCCESS,
            cart: response.data,
        });
    } catch (err) {
        return dispatch({ type: GET_CART_ERROR, err });
    }
};

export const updatingCart = () => async(dispatch) => {
    await dispatch({ type: GET_CART_REQUEST, isLoadingCart: false });
    try {
        const response = await updateCart();
        return dispatch({
            type: GET_CART_SUCCESS,
            cart: response.data,
        });
    } catch (err) {
        return dispatch({ type: GET_CART_ERROR, err });
    }
};
