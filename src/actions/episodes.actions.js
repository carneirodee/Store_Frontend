import { getEpisodes } from '../api';

export const GET_EPISODES_REQUEST = "GET_EPISODES_REQUEST";
export const GET_EPISODES_SUCCESS = "GET_EPISODES_SUCCESS";
export const GET_EPISODES_ERROR = "GET_EPISODES_ERROR"

export const fetchEpisodes = () => async(dispatch) => {
    await dispatch({ type: GET_EPISODES_REQUEST, isLoadingEpisodes: false });
    try {
        const response = await getEpisodes();
        return dispatch({
            type: GET_EPISODES_SUCCESS,
            data: response.data,
        });
    } catch (err) {
        return dispatch({ type: GET_EPISODES_ERROR, err });
    }
};
