const INITIAL_STATE = {
    isLoadingEpisodes: true,
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
            const { episodes } = action;

            return {
                ...state,
                isLoadingEpisodes: false,
                episodes: episodes,
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

