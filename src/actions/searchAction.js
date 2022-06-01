// import {
//     GET_SEARCH_ITEM_REQUEST,
//     GET_SEARCH_ITEM_SUCCESS,
//     GET_SEARCH_ITEM_FAILURE,
// } from './types'

// import axiosInstance from '../api/axiosInstance';


// export function getSearch (newArray)  {
// 	return  (dispatch) => {
// 		dispatch(getSearchItemRequest());
// 		axiosInstance()
// 			.patch(`fruits/`, JSON.stringify(newArray))
// 			.then((response) => {
// 				dispatch(getSearchItemSuccess(response.data));
// 			}).catch(() => {
// 				dispatch(getSearchItemFailure());
// 			});
// 	};
// }


// export const getSearchItemRequest = () => {
//     return {
//         type: GET_SEARCH_ITEM_REQUEST
//     }
// }


// export const getSearchItemSuccess = (text) => {
//     return {
//         type: GET_SEARCH_ITEM_SUCCESS,
//         payload: text
//     }
// }

// export const getSearchItemFailure = () => {
//     return {
//         type: GET_SEARCH_ITEM_FAILURE,
//     }
// }