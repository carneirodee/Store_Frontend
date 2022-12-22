import { loginAuth, logoutAuth, authenticateAuth } from '../api/auth.api';

export const GET_AUTH_REQUEST = "GET_AUTH_REQUEST";
export const GET_AUTH_SUCCESS = "GET_AUTH_SUCCESS";
export const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
export const GET_LOGOUT_SUCCESS = "GET_LOGOUT_SUCCESS";
export const GET_AUTH_ERROR = "GET_AUTH_ERROR"

export const login = (data) => async (dispatch) => {
    await dispatch({ type: GET_AUTH_REQUEST, logged: false });
    try {
        const response = await loginAuth(data);
        console.log(response)
        localStorage.setItem("token", response.data.token);

        return dispatch({
            type: GET_LOGIN_SUCCESS,
            auth: response.data,
            logged: true
        });
    } catch (err) {
        return dispatch({ type: GET_AUTH_ERROR, data: err.response.data  });
    }
};

export const logout = (data) => async (dispatch) => {
    console.log(data)
    await dispatch({ type: GET_AUTH_REQUEST, logged: false });
    try {
        const response = await logoutAuth(data);
        return dispatch({
            type: GET_LOGOUT_SUCCESS,
            auth: response.data,
            logged: false
        });
    } catch (err) {
        return dispatch({ type: GET_AUTH_ERROR, err });
    }
};

export const authenticate = (data) => async (dispatch) => {
    await dispatch({ type: GET_AUTH_REQUEST, logged: false });
    try {
        console.log('TOKEN', data);
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