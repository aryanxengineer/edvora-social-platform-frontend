import axiosInstance from "@/helpers/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const comment = createAsyncThunk(
  "post/comment",
  async (
    commentData: { postId: string; content: string },
    { rejectWithValue },
  ) => {
    try {
      const { data } = await axiosInstance.post(`/comments/`, commentData);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Rejected commenting on post",
      );
    }
  },
);

export const deleteComment = createAsyncThunk(
  "deleteComment/post",
  async (commentId: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.delete(`/comments/${commentId}`);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Rejected deleting comment on post",
      );
    }
  },
);
