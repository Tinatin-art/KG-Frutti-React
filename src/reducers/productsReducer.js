import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,

    GET_ONE_PRODUCTS_REQUEST,
    GET_ONE_PRODUCTS_SUCCESS,
    GET_ONE_PRODUCTS_FAILURE,
    
    UPDATE_RATE_REQUEST,
    UPDATE_RATE_SUCCESS,
    UPDATE_RATE_FAILURE,

    GET_PRODUCT_RECOMMEND_REQUEST,
    GET_PRODUCT_RECOMMEND_SUCCESS,
    GET_PRODUCT_RECOMMEND_FAILURE

} from '../actions/types';

const initialState = {
    products: [],
    productsRecommend: [],
    oneProduct: {},
    productsLoadingStatus: 'idle',
   
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return {
                ...state,
                productsLoadingStatus: 'loading'
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                productsLoadingStatus: 'idle'
            }
        case GET_PRODUCTS_FAILURE:
            return {
                ...state,
                productsLoadingStatus: 'error'
            }
        case GET_ONE_PRODUCTS_REQUEST:
            return {
                ...state,
                productsLoadingStatus: 'loading'
            }
        case GET_ONE_PRODUCTS_SUCCESS:
            return {
                ...state,
                oneProduct: action.payload,
                productsLoadingStatus: 'idle'
            }
        case GET_ONE_PRODUCTS_FAILURE:
            return {
                ...state,
                productsLoadingStatus: 'error'
            }
        case GET_PRODUCT_RECOMMEND_REQUEST:
            return {
                ...state,
                productsLoadingStatus: 'loading'
            }
        case GET_PRODUCT_RECOMMEND_SUCCESS:
            return {
                ...state,
                productsRecommend: action.payload,
                productsLoadingStatus: 'idle'
            }
        case GET_PRODUCT_RECOMMEND_FAILURE:
            return {
                ...state,
                productsLoadingStatus: 'error'
            }
        case UPDATE_RATE_REQUEST:
            return {
                ...state,
                productsLoadingStatus: 'loading'
            }
        case UPDATE_RATE_SUCCESS:
            return {
                ...state,
                oneProduct: action.payload,
                productsLoadingStatus: 'idle'
            }
        case UPDATE_RATE_FAILURE:
            return {
                ...state,
                productsLoadingStatus: 'error'
            }
        default:
        return state
    }
}

export default productsReducer;