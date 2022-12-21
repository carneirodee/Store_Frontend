import { loginAuth, logoutAuth, authenticateAuth } from '../api/auth.api';

export const GET_AUTH_REQUEST = "GET_AUTH_REQUEST";
export const GET_AUTH_SUCCESS = "GET_AUTH_SUCCESS";
export const GET_AUTH_ERROR = "GET_AUTH_ERROR"

export const login = (data) => async(dispatch) => {
    await dispatch({ type: GET_AUTH_REQUEST, logged: false });
    try {
        const response = await loginAuth(data);
        return dispatch({
            type: GET_AUTH_SUCCESS,
            auth: response.data,
            logged: true
        });
    } catch (err) {
        return dispatch({ type: GET_AUTH_ERROR, err });
    }
};

export const logout = (data) => async(dispatch) => {
    await dispatch({ type: GET_AUTH_REQUEST, logged: false });
    try {
        const response = await logoutAuth(data);
        return dispatch({
            type: GET_AUTH_SUCCESS,
            auth: response.data,
            logged: false
        });
    } catch (err) {
        return dispatch({ type: GET_AUTH_ERROR, err });
    }
};

export const authenticate = (data) => async(dispatch) => {
    try {
        const response = await authenticateAuth(data);
        return dispatch({
            type: GET_AUTH_SUCCESS,
            auth: response.data,
            logged: true
        });
    } catch (err) {
        return dispatch({ type: GET_AUTH_ERROR, err });
    }
};