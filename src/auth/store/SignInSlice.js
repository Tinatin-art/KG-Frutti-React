import {
    createAsyncThunk,
    createSlice
  } from "@reduxjs/toolkit";
  import instance from "../../api/axiosInstance";
  
  
  export const signIn = createAsyncThunk("signIn", async ({
    email, password, navigate
  }) => {
    const response = await instance.post("/login", {email, password});
    console.log(response)
    localStorage.setItem("refreshToken", response.data.refreshToken);
    localStorage.setItem("token", response.data.accessToken);

    if (response.status === 200) {
        navigate("/")
    }
  
    return response.data
  });
  
  
  const initialState = {
    user: {},
    isLoading: true, 
    isError: false
  };
  
  const signInSlice = createSlice({
    name: "signIn",
    initialState: initialState,
    reducers: {
  
    },
    extraReducers: (builder) =>  {
      builder.addCase(signIn.pending, (state) => {
          return {
              ...state,
              isLoading: true,
              isError: false
          }
      })
      builder.addCase(signIn.fulfilled, (state, action) => {
          return {
              ...state,
              isError: false,
              user: {...action.payload},
              isLoading: false,
          }
      })
      builder.addCase(signIn.rejected, (state) => {
          return {
              ...state,
              isLoading: false,
              isError: true
          }
      })
  }
  
  });
  
  export default signInSlice.reducer;