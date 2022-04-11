const INITIAL_STATE = {
    episodes: [],
    errorData: [],
    error: false
}

export const getEpisodes = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_EPISODES_REQUEST':
            return {
                ...state,
                episodes: action.data,
            };
        case 'GET_EPISODES_SUCCESS':
            return {
                ...state,
                episodes: action.data,
            };
        case 'GET_EPISODES_ERROR':
            return {
                ...state,
                errorData: action.data,
                error: false
            };
        default:
            return state;
    }

}

