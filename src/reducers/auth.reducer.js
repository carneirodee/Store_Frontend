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
        case 'GET_LOGIN_SUCCESS':
            console.log(action);
            const { auth } = action;
            localStorage.setItem("id", auth.data.id);
            localStorage.setItem("name", auth.data.name);
            localStorage.setItem("email", auth.data.email);
            localStorage.setItem("type", auth.data.type);

            return {
                ...state,
                logged: true
            };
        case 'GET_LOGOUT_SUCCESS':
            console.log(action);
            return {
                ...state,
                logged: false
            };
        case 'GET_AUTH_ERROR':
            console.log(state)
            return {
                ...state,
                errorData: action.data,
                error: true
            };
        default:
            return state;
    }

}

