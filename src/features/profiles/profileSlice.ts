import { createSlice } from "@reduxjs/toolkit";
import { myProfile, getProfileById } from "./profileActions";

interface ProfileState {
  isLoading: boolean;
  message: string;
}

const initialState: ProfileState = {
  isLoading: false,
  message: "",
};

const commentSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(myProfile.pending, (state: ProfileState) => {
        state.isLoading = true;
      })
      .addCase(myProfile.fulfilled, (state: ProfileState, action) => {
        state.isLoading = false;
        state.message = action.payload?.data?.message;
      })
      .addCase(myProfile.rejected, (state: ProfileState, action) => {
        state.isLoading = false;
        state.message = action.payload as unknown as string;
      })

      .addCase(getProfileById.pending, (state: ProfileState) => {
        state.isLoading = true;
      })
      .addCase(getProfileById.fulfilled, (state: ProfileState, action) => {
        state.isLoading = false;
        state.message = action.payload?.data?.message;
      })
      .addCase(getProfileById.rejected, (state: ProfileState, action) => {
        state.isLoading = false;
        state.message = action.payload as unknown as string;
      });
  },
});

export default commentSlice.reducer;
