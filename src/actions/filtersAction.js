import {
    GET_FILTERS_REQUEST,
    GET_FILTERS_SUCCESS,
    GET_FILTERS_FAILURE,
	ACTIVE_FILTER
} from "./types";

import axiosInstance from "../api/axiosInstance";


export function getFilters() { 
	return (dispatch) => {
		dispatch(getFiltersRequest());
		axiosInstance().get("/filters")
			.then((response) => {
				dispatch(getFiltersSuccess(response.data));
			})
			.catch((error) => {
				dispatch(getFiltersFailure(error));
		});
	}	
}

export const getFiltersRequest = () => ({
	type: GET_FILTERS_REQUEST
}); 

export const getFiltersSuccess = (filters) => ({
	type: GET_FILTERS_SUCCESS,
	payload: filters
});

export const getFiltersFailure = (error) => ({
	type : GET_FILTERS_FAILURE,
	error: error
});

export const activeFilter = (activeFilter) => ({
	type: ACTIVE_FILTER,
	payload: activeFilter
})


