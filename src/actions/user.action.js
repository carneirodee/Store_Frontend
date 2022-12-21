import { getUser, createUser } from '../api/user.api';

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR"

export const fetchUser = () => async(dispatch) => {
    await dispatch({ type: GET_USER_REQUEST, isLoadingUser: false });
    try {
        const response = await getUser();
        return dispatch({
            type: GET_USER_SUCCESS,
            user: response.data,
        });
    } catch (err) {
        return dispatch({ type: GET_USER_ERROR, err });
    }
};

export const registerUser = (data) => async(dispatch) => {
    await dispatch({ type: GET_USER_REQUEST, isLoadingUser: false });
    try {
        const response = await createUser(data);
        return dispatch({
            type: GET_USER_SUCCESS,
            user: response.data,
        });
    } catch (err) {
        return dispatch({ type: GET_USER_ERROR, err });
    }
};