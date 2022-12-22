const INITIAL_STATE = {
    isLoadingProducts: true,
    products: [],
    product: {},
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
            case 'GET_PRODUCT_REQUEST':
                console.log(action)
                return {
                    ...state,
                    isLoadingProducts: true,
                };
            case 'GET_PRODUCT_SUCCESS':
                console.log(action)
                return {
                    ...state,
                    isLoadingProducts: false,
                    product: action.product,
                };
            case 'GET_PRODUCT_ERROR':
                console.log(action)
                return {
                    ...state,
                    errorData: action.data,
                    error: true
                };
                case 'GET_PRODUCT_DELETE_REQUEST':
                    console.log(action)
                    return {
                        ...state,
                        isLoadingProducts: true,
                    };
                case 'GET_PRODUCT_DELETE_SUCCESS':
                    console.log(action)
                    return {
                        ...state,
                        isLoadingProducts: false,
                    };
                case 'GET_PRODUCT_DELETE_ERROR':
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

