import { createSlice } from "@reduxjs/toolkit";
const initialState={
    loading:true,
    channel:{},
    error:null,
    subscriptionStatus:false,
  }

const channelSlice = createSlice({
  name: "channel",
  initialState: initialState,
  reducers: {
    channel_request(state) {
      state.loading = true;
      state.error = null;
    },
    channel_success(state, action) {
      state.loading = false;
      state.channel = action.payload;
      state.error = null;
    },
    channel_fail(state, action) {
      state.loading=false;
      state.channel=null;
      state.error = action.payload;
    },
    channel_subscription_status(state,action)
    {
      state.subscriptionStatus=action.payload;
    }
  },
});
export const channelActions= channelSlice.actions;
export default channelSlice;