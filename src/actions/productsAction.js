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
}
from "./types";

import axiosInstance from "../api/axiosInstance";

export function getProducts() { 
	return (dispatch) => {
		dispatch(getProductsRequest());
		axiosInstance.get("fruits")
			.then((response) => {
				console.log(response)
				dispatch(getProductsSuccess(response.data));
			})
			.catch((error) => {
				dispatch(getProductsFailure(error));
		});
	}	
}

export function getOneProducts(id) { 
	return (dispatch) => {
		dispatch(getOneProductsRequest());
		axiosInstance.get(`fruits/${id}`)
			.then((response) => {
				dispatch(getOneProductsSuccess(response.data));
			})
			.catch((error) => {
				dispatch(getOneProductsFailure(error));
		});
	}	
}

export function getProductRecommend() { 
	return (dispatch) => {
		dispatch(getProductRecommendRequest());
		axiosInstance.get(`fruitsRecommend`)
			.then((response) => {
				dispatch(getProductRecommendSuccess(response.data));
			})
			.catch((error) => {
				dispatch(getProductRecommendFailure(error));
		});
	}	
}

export function updateRate(newRate ,id) { 
	return (dispatch) => {
		dispatch(updateRateRequest());
		axiosInstance.patch(`fruits/${id}`, JSON.stringify(newRate))
			.then((response) => {
				dispatch(updateRateSuccess(response.data));
			})
			.catch(() => {
				dispatch(updateRateFailure());
		});
	}	
}


export const getProductsRequest = () => ({
	type: GET_PRODUCTS_REQUEST
}); 

export const getProductsSuccess = (products) => ({
	type: GET_PRODUCTS_SUCCESS,
	payload: products
});

export const getProductsFailure = (error) => ({
	type : GET_PRODUCTS_FAILURE,
	error
});

export const getOneProductsRequest = () => ({
	type: GET_ONE_PRODUCTS_REQUEST
}); 

export const getOneProductsSuccess = (products) => ({
	type: GET_ONE_PRODUCTS_SUCCESS,
	payload: products
});

export const getOneProductsFailure = (error) => ({
	type : GET_ONE_PRODUCTS_FAILURE,
	error
});

export const getProductRecommendRequest = () => ({
	type: GET_PRODUCT_RECOMMEND_REQUEST
}); 

export const getProductRecommendSuccess = (productsRecommend) => ({
	type: GET_PRODUCT_RECOMMEND_SUCCESS,
	payload: productsRecommend
});

export const getProductRecommendFailure = (error) => ({
	type : GET_PRODUCT_RECOMMEND_FAILURE,
	error
});

export const updateRateRequest = () => {
    return {
        type: UPDATE_RATE_REQUEST
    }
}

export const updateRateSuccess = (text) => {
    return {
        type: UPDATE_RATE_SUCCESS,
        payload: text
    }
}

export const updateRateFailure = () => {
    return {
        type: UPDATE_RATE_FAILURE
    }
}