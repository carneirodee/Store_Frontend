const INITIAL_STATE ={
    info : {
        Cast: [
        ],
        Genres: [
        ],
        ID: 0,
        Images: {
            Background: ""
        },
        Synopsis: "",
        Title: "",
        Year: 0
    },
    errorData: [],
    error: false
}

export const getInfo = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_INFO_REQUEST':
            return {
                ...state,
                episodes: action.data,
            };
        case 'GET_INFO_SUCCESS':
            return {
                ...state,
                episodes: action.data,
            };
        case 'GET_INFO_ERROR':
            return {
                ...state,
                errorData: action.data,
                error: false
            };
        default:
            return state;
    }

}

