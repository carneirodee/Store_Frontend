const INITIAL_STATE = {
    isLoadingCart: true,
    cart: [],
    errorData: [],
    error: false
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_CART_REQUEST':
            console.log(action)
            return {
                ...state,
                isLoadingCart: true,
            };
        case 'GET_CART_SUCCESS':
            console.log(action)
            const { cart } = action;

            return {
                ...state,
                isLoadingCart: false,
                id: cart._id,
                cart: cart.products,
            };
        case 'GET_CART_ERROR':
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

