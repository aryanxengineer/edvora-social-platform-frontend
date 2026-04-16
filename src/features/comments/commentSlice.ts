import { createSlice } from "@reduxjs/toolkit";
import { comment, deleteComment, postComments } from "./commentActions";

interface CommentState {
  isLoading: boolean;
  message: string;
  commentsLoading: boolean;
  comments: any[] | null;
}

const initialState: CommentState = {
  isLoading: false,
  message: "",
  commentsLoading: false,
  comments: null,
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
      })

      .addCase(postComments.pending, (state: CommentState) => {
        state.commentsLoading = true;
      })
      .addCase(postComments.fulfilled, (state: CommentState, action) => {
        state.commentsLoading = false;
        state.message = action.payload?.message;
        state.comments = action.payload.data;
      })
      .addCase(postComments.rejected, (state: CommentState, action) => {
        state.commentsLoading = false;
        state.message = action.payload as unknown as string;
        state.comments = null;
      });
  },
});

export default commentSlice.reducer;
