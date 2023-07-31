import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  videos: null,
  error: null,
};

const relatedvideoslice = createSlice({
  name: "relatedvideos",
  initialState: initialState,
  reducers: {
    related_video_request(state) {
      state.loading = true;
      state.error = null;
    },
    related_video_success(state, action) {
      state.loading = false;
      state.videos = action.payload;
      state.error = null;
    },
    related_video_fail(state, action) {
        state.loading=false;
        state.error = action.payload;
    },
  },
});
export const relatedVideoActions = relatedvideoslice.actions;
export default relatedvideoslice;
