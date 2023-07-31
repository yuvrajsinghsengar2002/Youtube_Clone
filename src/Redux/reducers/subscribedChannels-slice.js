import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    loading:true,
    channels:null,
    error:null
}

const subscribedChannelslice=createSlice({
    name:"subscribedChannels",
    initialState:initialState,
    reducers:{
        subscribed_channel_request(state,action){
            state.loading=true;
        },
        subscribed_channel_success(state,action){
           state.loading=false;
           state.channels=action.payload.item;
        },
        subscribed_channel_fail(state,action){
           state.loading=false;
           state.error=action.payload;
        },
    }
})
export const subscribedChannelActions=subscribedChannelslice.actions;
export default subscribedChannelslice;
