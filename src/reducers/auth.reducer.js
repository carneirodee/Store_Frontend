const INITIAL_STATE = {
    logged: false,
    errorData: [],
    error: false
}

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_AUTH_REQUEST':
            console.log(action)
            return {
                ...state,
                logged: false,
            };
        case 'GET_AUTH_SUCCESS':
            console.log(action)
            
            return {
                ...state,
                logged: true
            };
        case 'GET_AUTH_ERROR':
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

