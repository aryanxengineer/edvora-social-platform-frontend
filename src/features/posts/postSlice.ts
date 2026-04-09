import { createSlice } from "@reduxjs/toolkit";
import { createPost } from "./postActions.js";

export interface PostState {
  isLoading: boolean;
  success: boolean;
  message: string;
}

const initialState: PostState = {
  isLoading: false,
  success: false,
  message: "",
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
        state.success = action.payload.success;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload as string;
      });
  },
});

export default postSlice.reducer;
