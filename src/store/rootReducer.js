import { combineReducers } from "redux";
// import commentsReducer from "../reducers/commentReducer";
// import filtersReducer from "../reducers/filtersReducer";
import products from "../reducers/productsReducer";
import signIn from "../auth/store/SignInSlice"



const createReducer = (asyncReducer) => (state, action) => {
    const combineReducer = combineReducers({
        signIn,
        products,
   
      ...asyncReducer,
    });
  
    return combineReducer(state, action);
  };
  
  export default createReducer;