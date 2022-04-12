const INITIAL_STATE ={
    isLoadingInfo: false,
    info : {
    },
    errorData: [],
    error: false
}

export const infoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_INFO_REQUEST':
            console.log(action)
            return {
                ...state,
                isLoadingInfo: true,
            };
        case 'GET_INFO_SUCCESS':
            console.log(action)
            const { data } = action;
            return {
                ...state,
                info: data,
                isLoadingInfo: false,
            };
        case 'GET_INFO_ERROR':
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

