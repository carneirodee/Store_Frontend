const INITIAL_STATE = {
    isLoadingEpisodes: false,
    episodes: [],
    errorData: [],
    error: false
}

export const episodesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_EPISODES_REQUEST':
            console.log(action)
            return {
                ...state,
                isLoadingEpisodes: true,
            };
        case 'GET_EPISODES_SUCCESS':
            console.log(action)
            return {
                ...state,
                isLoadingEpisodes: false,
                episodes: action.data,
            };
        case 'GET_EPISODES_ERROR':
            console.log(action)
            return {
                ...state,
                errorData: action.data,
                error: true
            };
        default:
            return state;
    }

}

