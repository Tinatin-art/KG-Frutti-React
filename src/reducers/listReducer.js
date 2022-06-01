// import {
//     GET_LIST_REQUEST,
//     GET_LIST_SUCCESS,
//     GET_LIST_FAILURE,
  
// } from '../actions/types';

// const initialState = {
//     lists: [],
//     listsLoadingStatus: 'idle',
// }

// const listsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_LIST_REQUEST:
//             return {
//                 ...state,
//                 listsLoadingStatus: 'loading'
//             }
//         case GET_LIST_SUCCESS:
//             return {
//                 ...state,
//                 lists: action.payload,
//                 listsLoadingStatus: 'idle'
//             }
//         case GET_LIST_FAILURE:
//             return {
//                 ...state,
//                 listsLoadingStatus: 'error'
//             }
      
//         default:
//         return state
//     }
// }

// export default listsReducer;