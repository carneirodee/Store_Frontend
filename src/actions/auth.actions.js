import { getAuth } from '../api';

export const GET_AUTH_REQUEST = "GET_AUTH_REQUEST";
export const GET_AUTH_SUCCESS = "GET_AUTH_SUCCESS";
export const GET_AUTH_ERROR = "GET_AUTH_ERROR"

export const fetchAuth = () => async(dispatch) => {
    await dispatch({ type: GET_AUTH_REQUEST, isLoadingAuth: false });
    try {
        const response = await getAuth();
        return dispatch({
            type: GET_AUTH_SUCCESS,
            auth: response.data,
        });
    } catch (err) {
        return dispatch({ type: GET_AUTH_ERROR, err });
    }
};
