import {
    GET_FILTERS_REQUEST,
    GET_FILTERS_SUCCESS,
    GET_FILTERS_FAILURE,
    ACTIVE_FILTER
  
} from '../actions/types';

const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'

}

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILTERS_REQUEST:
            return {
                ...state,
                filtersLoadingStatus: 'loading'
            }
        case GET_FILTERS_SUCCESS:
            return {
                ...state,
                filters: action.payload,
                filtersLoadingStatus: 'idle'
            }
        case GET_FILTERS_FAILURE:
            return {
                ...state,
                filtersLoadingStatus: 'error'
            }
        case ACTIVE_FILTER:
            return {
            ...state,
            activeFilter: action.payload
        }
      
        default:
        return state
    }
}

export default filtersReducer;