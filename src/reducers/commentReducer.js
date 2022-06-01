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
} from "../actions/types";

const initialState = {
    comments: [],
    deleteComment: [],
    isLikes: [],
    commentsLoadingStatus: 'idle'
}

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENTS_REQUEST:
            return {
                ...state,
                commentsLoadingStatus: 'loading'
            }
        case GET_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.payload,
                commentsLoadingStatus: 'idle'
            }
        case GET_COMMENTS_FAILURE:
            return {
                ...state,
                commentsLoadingStatus: 'error'
            }
        case CREATE_COMMENT_REQUEST:
            return{
                ...state,
                commentsLoadingStatus: 'loading'
            }    
        case CREATE_COMMENT_SUCCESS:
            return {
                ...state,
                comments: [action.payload,  ...state.comments],  
                commentsLoadingStatus: 'idle'
            }
        case CREATE_COMMENT_FAILURE: 
            return {
                ...state,
                commentsLoadingStatus: 'error'
            }
        case DELETE_COMMENT_REQUEST: 
            return {
                ...state,
                commentsLoadingStatus: 'loading'
            }
        case DELETE_COMMENT_SUCCESS: 
            return {
                ...state,
                deleteComment: action.payload,
                comments: [
                    ...state.comments.slice(0, action.payload),
                    ...state.comments.slice(action.payload + 1)
                ],  
                commentsLoadingStatus: 'idle'
            }
        case DELETE_COMMENT_FAILURE: 
            return {
                ...state,
                commentsLoadingStatus: 'error'
            }
        case UPDATE_COMMENT_REQUEST: 
            return {
                ...state,
                commentsLoadingStatus: 'loading'
            }
        case UPDATE_COMMENT_SUCCESS:
            const {comments} = state;
            const itemIndex = comments.findIndex(item => item.id === action.payload.id);
            const nextComments = [
                ...comments.slice(0, itemIndex),
                action.payload,
                ...comments.slice(itemIndex + 1)
            ];
            return {
                ...state,
                comments: nextComments
            }
        case UPDATE_COMMENT_FAILURE: 
            return {
                ...state,
                commentsLoadingStatus: 'error'
            }
        case PATCH_LIKE_REQUEST:
            return {
                ...state,
                commentsLoadingStatus: 'loading'
            }
        case PATCH_LIKE_SUCCESS:        
            return {
                ...state,
                isLikes: action.payload,
                commentsLoadingStatus: 'idle',
                
            }
        case PATCH_LIKE_FAILURE:
            return {
                ...state,
                commentsLoadingStatus: 'error'
            }
        default:
        return state
    }
}

export default commentsReducer;