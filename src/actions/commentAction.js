import { 
    GET_COMMENTS_REQUEST,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_FAILURE,

    CREATE_COMMENT_REQUEST,
    CREATE_COMMENT_SUCCESS,
    CREATE_COMMENT_FAILURE,

    UPDATE_COMMENT_REQUEST,
    UPDATE_COMMENT_SUCCESS,
    UPDATE_COMMENT_FAILURE,

    DELETE_COMMENT_REQUEST,
    DELETE_COMMENT_SUCCESS,
    DELETE_COMMENT_FAILURE,

    PATCH_LIKE_REQUEST,
    PATCH_LIKE_SUCCESS,
    PATCH_LIKE_FAILURE
} from "./types";

import axiosInstance from "../api/axiosInstance";

export function getComments() { 
	return (dispatch) => {
		dispatch(getCommentsRequest());
		axiosInstance().get("comments/")
			.then((response) => {
				dispatch(getCommentsSuccess(response.data));
			})
			.catch(() => {
				dispatch(getCommentsFailure());
		});
	}	
}

export function deleteComment (id)  {
	return  (dispatch) => {
		dispatch(deleteCommentRequest());
		axiosInstance()
			.delete(`comments/${id}`)
			.then((response) => {
				dispatch(deleteCommentSuccess(response.data));
			}).catch(() => {
				dispatch(deleteCommentFailure());
			});
	};
}

export function createComment (newComment)  {
	return  (dispatch) => {
		dispatch(createCommentRequest());
		axiosInstance()
			.post(`comments/`, JSON.stringify(newComment))
			.then((response) => {
				dispatch(createCommentSuccess(response.data));
			}).catch(() => {
				dispatch(createCommentFailure());
			});
	};
}

export function updateComment (newComment, id)  {
	return  (dispatch) => {
		dispatch(updateCommentRequest());
		axiosInstance()
			.patch(`comments/${id}`, JSON.stringify(newComment))
			.then((response) => {
				dispatch(updateCommentSuccess(response.data));
			}).catch(() => {
				dispatch(updateCommentFailure());
			});
	};
}

export function patchLike (newComment, id)  {
	return  (dispatch) => {
		dispatch(patchLikeRequest());
		axiosInstance()
			.patch(`comments/${id}`, JSON.stringify(newComment))
			.then((response) => {
				dispatch(patchLikeSuccess(response.data));
			}).catch(() => {
				dispatch(patchLikeFailure());
		    });
	};
}


export const getCommentsRequest = () => {
    return {
        type: GET_COMMENTS_REQUEST
    }
}

export const getCommentsSuccess = (comments) => {
    return {
        type: GET_COMMENTS_SUCCESS,
        payload: comments
    }
}

export const getCommentsFailure = () => {
    return {
        type: GET_COMMENTS_FAILURE,
    }
}

export const deleteCommentRequest = () => {
    return {
        type: DELETE_COMMENT_REQUEST
     
    }
}

export const deleteCommentSuccess = (id) => {
    return {
        type: DELETE_COMMENT_SUCCESS,
        payload: id
    }
}

export const deleteCommentFailure = () => {
    return {
        type: DELETE_COMMENT_FAILURE,
    }
}

export const createCommentRequest = () => {
    return {
        type: CREATE_COMMENT_REQUEST
    }
}


export const createCommentSuccess = (text) => {
    return {
        type: CREATE_COMMENT_SUCCESS,
        payload: text
    }
}

export const createCommentFailure = () => {
    return {
        type: CREATE_COMMENT_FAILURE,
    }
}

export const updateCommentRequest = () => {
    return {
        type: UPDATE_COMMENT_REQUEST
    }
}

export const updateCommentSuccess = (text) => {
    return {
        type: UPDATE_COMMENT_SUCCESS,
        payload: text
    }
}

export const updateCommentFailure = () => {
    return {
        type: UPDATE_COMMENT_FAILURE,
    }
}

export const patchLikeRequest = () => {
    return {
        type: PATCH_LIKE_REQUEST
    }
}

export const patchLikeSuccess = (like) => {
    return {
        type: PATCH_LIKE_SUCCESS,
        payload: like
    }
}

export const patchLikeFailure = () => {
    return {
        type: PATCH_LIKE_FAILURE,
    }
}




