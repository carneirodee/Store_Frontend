const INITIAL_STATE = {
    isLoadingUser: true,
    users: [],
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
            };
        case 'GET_USER_SUCCESS':
            console.log(action)
            const { users } = action;

            return {
                ...state,
                isLoadingUser: false,
                users: users,
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

