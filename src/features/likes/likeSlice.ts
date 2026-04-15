import { createSlice } from "@reduxjs/toolkit";
import { like, disLike, likes } from "./likeActions";

interface LikeState {
  isLoading: boolean;
  message: string;
  likedByUsers: string[] | null;
}

const initialState: LikeState = {
  isLoading: false,
  message: "",
  likedByUsers: null,
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(likes.pending, (state: LikeState) => {
        state.isLoading = true;
      })
      .addCase(likes.fulfilled, (state: LikeState, action) => {
        // console.log(action.payload, " likes aa gaye hain")
        const userIds =
          action.payload.data.length > 0
            ? action.payload.data.map((obj: any) => String(obj.userId))
            : [];

        state.isLoading = false;
        state.message = action.payload?.message;
        state.likedByUsers = userIds;
      })
      .addCase(likes.rejected, (state: LikeState, action) => {
        state.isLoading = false;
        state.message = action.payload as unknown as string;
      })

      .addCase(like.pending, (state: LikeState) => {
        state.isLoading = true;
      })
      .addCase(like.fulfilled, (state: LikeState, action) => {
        state.isLoading = false;
        state.message = action.payload?.message;
      })
      .addCase(like.rejected, (state: LikeState, action) => {
        state.isLoading = false;
        state.message = action.payload as unknown as string;
      })

      .addCase(disLike.pending, (state: LikeState) => {
        state.isLoading = true;
      })
      .addCase(disLike.fulfilled, (state: LikeState, action) => {
        state.isLoading = false;
        state.message = action.payload?.message;
      })
      .addCase(disLike.rejected, (state: LikeState, action) => {
        state.isLoading = false;
        state.message = action.payload as unknown as string;
      });
  },
});

export default likeSlice.reducer;
