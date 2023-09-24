// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import instance from "../../api/axiosInstance";

// export const signUp = createAsyncThunk("signUp", async ({email, password}) => {
//     const response = await instance.post("/registration", {email, password});

//     localStorage.setItem("token", response.data.accessToken);

//     return response.data

// });
  
// const initialState = {
//   user: {},
//   isLoading: true, 
//   isError: false
// };

// const signUpSlice = createSlice({
//     name: "signUp",
//     initialState: initialState,
//     reducers: {},
//     extraReducers: (builder) =>  {
//       builder.addCase(signUp.pending, (state) => {
//           return {
//               ...state,
//               isLoading: true,
//               isError: false
//           }
//       })
//       builder.addCase(signUp.fulfilled, (state, action) => {
//           return {
//               ...state,
//               isError: false,
//               user: {...action.payload.data},
//               isLoading: false,
//           }
//       })
//       builder.addCase(signUp.rejected, (state) => {
//           return {
//               ...state,
//               isLoading: false,
//               isError: true
//           }
//       })
//   }
// });

// const { reducer} = signUpSlice;

// export default reducer;