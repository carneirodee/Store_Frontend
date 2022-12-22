const INITIAL_STATE = {
    isLoadingUser: true,
    user: {},
    errorData: [],
    error: false
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_USER_REQUEST':
            console.log(action)
            return {
                ...state,
                isLoadingUser: true,
                error: false
            };
        case 'GET_USER_SUCCESS':
            console.log(action)
            const { user } = action;
            return {
                ...state,
                isLoadingUser: false,
                user: user,
            };
        case 'GET_USER_ERROR':
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

