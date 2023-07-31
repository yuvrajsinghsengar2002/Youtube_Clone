import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading:true,
    comments:null,
    error:null,
}

const commentsSlice = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {
    comments_request(state) {
      state.loading = true;
      state.error = null;
    },
    comments_success(state, action) {
      state.loading = false;
      state.comments = action.payload;
      state.error = null;
    },
    comments_fail(state, action) {
      state.loading = false;
      state.comments = null;
      state.error = action.payload;
    },
    
  },
});
export const commentsActions=commentsSlice.actions;
export default commentsSlice;