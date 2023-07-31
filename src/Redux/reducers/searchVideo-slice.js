import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  videos: null,
  error: null,
};

const searchvideoslice = createSlice({
  name: "searchvideos",
  initialState: initialState,
  reducers: {
    search_video_request(state) {
      state.loading = true;
      state.error = null;
    },
    search_video_success(state, action) {
      state.loading = false;
      state.videos = action.payload;
      state.error = null;
    },
    search_video_fail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const searchVideoActions = searchvideoslice.actions;
export default searchvideoslice;
