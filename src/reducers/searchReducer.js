// import {
//     GET_SEARCH_ITEM_REQUEST,
//     GET_SEARCH_ITEM_SUCCESS,
//     GET_SEARCH_ITEM_FAILURE,
  
// } from '../actions/types';

// const initialState = {
//     search: [],
//     searchLoadingStatus: 'idle',
// }

// const searchReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_SEARCH_ITEM_REQUEST:
//             return {
//                 ...state,
//                 searchLoadingStatus: 'loading'
//             }
//         case GET_SEARCH_ITEM_SUCCESS:
//             return {
//                 ...state,
//                 search: action.payload,
//                 searchLoadingStatus: 'idle'
//             }
//         case GET_SEARCH_ITEM_FAILURE:
//             return {
//                 ...state,
//                 searchLoadingStatus: 'error'
//             }
      
//         default:
//         return state
//     }
// }

// export default searchReducer;