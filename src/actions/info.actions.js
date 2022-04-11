import axios from "axios";
import { getInfo } from '../api';

export const GET_INFO_REQUEST = "GET_INFO_REQUEST";
export const GET_INFO_SUCCESS = "GET_INFO_SUCCESS";
export const GET_INFO_ERROR = "GET_INFO_ERROR"

export const fetchCharacters = () => async dispatch => {
    await dispatch({ type: GET_INFO_REQUEST });
    try {
        const response = await getInfo()
        return dispatch({
            type: GET_INFO_SUCCESS,
            data: response.data
        });
    } catch (err) {
        return dispatch({ type: GET_INFO_ERROR, err });
    }
};
