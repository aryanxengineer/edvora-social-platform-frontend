import { createSlice } from "@reduxjs/toolkit";
import { createPost, getProfilePosts, getSinglePost } from "./postActions.js";
import type { PostType } from "@/@types/singlePostResponseType.js";

export interface PostState {
  isLoading: boolean;
  success: boolean;
  message: string;
  posts: [PostType] | null;
  singlePostLoading: boolean;
  postsLoading: boolean;
  singlePost: PostType | null;
  singlePostFetched: boolean;
}

const initialState: PostState = {
  isLoading: false,
  success: false,
  message: "",
  posts: null,
  singlePost: null,
  singlePostLoading: false,
  postsLoading: false,
  singlePostFetched: false,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
        state.success = false;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
        state.success = action.payload.success;
        state.posts = null;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.message = action.payload as string;
        state.posts = null;
      })

      .addCase(getProfilePosts.pending, (state) => {
        state.postsLoading = true;
        state.success = false;
      })
      .addCase(getProfilePosts.fulfilled, (state, action) => {
        state.postsLoading = false;
        state.message = action.payload.message;
        state.success = action.payload.success;
        state.posts = action.payload.data;
      })
      .addCase(getProfilePosts.rejected, (state, action) => {
        state.postsLoading = false;
        state.posts = null;
        state.success = false;
        state.message = action.payload as string;
      })

      .addCase(getSinglePost.pending, (state) => {
        state.singlePostLoading = true;
        state.singlePostFetched = false;
      })
      .addCase(getSinglePost.fulfilled, (state, action) => {
        state.singlePostLoading = false;
        state.message = action.payload.message;
        state.singlePostFetched = action.payload.success;
        state.singlePost = action.payload.data;
      })
      .addCase(getSinglePost.rejected, (state, action) => {
        state.singlePostLoading = false;
        state.singlePost = null;
        state.singlePostFetched = false;
        state.message = action.payload as string;
      });
  },
});

export default postSlice.reducer;
