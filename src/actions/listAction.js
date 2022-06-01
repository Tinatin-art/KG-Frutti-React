// import {
//     GET_LIST_REQUEST,
//     GET_LIST_SUCCESS,
//     GET_LIST_FAILURE
// } from "./types";

// import axiosInstance from "../api/axiosInstance";

// export function getLists() { 
// 	return (dispatch) => {
// 		dispatch(getListsRequest());
// 		axiosInstance().get("lists/")
// 			.then((response) => {
// 				dispatch(getListsSuccess(response.data));
// 			})
// 			.catch((error) => {
// 				dispatch(getListsFailure(error));
// 		});
// 	}	
// }



// export const getListsRequest = () => ({
// 	type: GET_LIST_REQUEST
// }); 

// export const getListsSuccess = (lists) => ({
// 	type: GET_LIST_SUCCESS,
// 	payload: lists
// });

// export const getListsFailure = (error) => ({
// 	type : GET_LIST_FAILURE,
// 	error: error
// });