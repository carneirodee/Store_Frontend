const INITIAL_STATE = {
    isLoadingProducts: true,
    products: [],
    errorData: [],
    error: false
}

export const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_REQUEST':
            console.log(action)
            return {
                ...state,
                isLoadingProducts: true,
            };
        case 'GET_PRODUCTS_SUCCESS':
            console.log(action)
            const { products } = action;

            return {
                ...state,
                isLoadingProducts: false,
                products: products,
            };
        case 'GET_PRODUCTS_ERROR':
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

