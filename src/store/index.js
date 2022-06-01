import { combineReducers } from "redux";
import commentsReducer from "../reducers/commentReducer";
import filtersReducer from "../reducers/filtersReducer";
import productsReducer from "../reducers/productsReducer";


const reducer = combineReducers({
    products: productsReducer,
    filters: filtersReducer,
    comments: commentsReducer,

});

export default reducer;