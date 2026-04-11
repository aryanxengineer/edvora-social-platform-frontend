import { createSlice } from "@reduxjs/toolkit";
import { comment, deleteComment } from "./commentActions";

interface CommentState {
  isLoading: boolean;
  message: string;
}

const initialState: CommentState = {
  isLoading: false,
  message: "",
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(comment.pending, (state: CommentState) => {
        state.isLoading = true;
      })
      .addCase(comment.fulfilled, (state: CommentState, action) => {
        state.isLoading = false;
        state.message = action.payload?.data?.message;
      })
      .addCase(comment.rejected, (state: CommentState, action) => {
        state.isLoading = false;
        state.message = action.payload as unknown as string;
      })

      .addCase(deleteComment.pending, (state: CommentState) => {
        state.isLoading = true;
      })
      .addCase(deleteComment.fulfilled, (state: CommentState, action) => {
        state.isLoading = false;
        state.message = action.payload?.data?.message;
      })
      .addCase(deleteComment.rejected, (state: CommentState, action) => {
        state.isLoading = false;
        state.message = action.payload as unknown as string;
      });
  },
});

export default commentSlice.reducer;
