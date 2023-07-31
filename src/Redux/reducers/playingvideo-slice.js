import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loading:true,
    video:null,
    error:null
}

const playingvideoslice=createSlice({
    name:'playingvideo',
    initialState:initialState,
    reducers:{
        selected_video_request(state)
        {
           state.loading=true; 
           state.error=null;
        },
        selected_video_success(state,action)
        {
            state.loading=false;
            state.video=action.payload;
            state.error=null;
        },
        selected_video_fail(state,action)
        {
           state.error=action.payload;
        }


    }
})
export const playingvideoActions=playingvideoslice.actions;
export default playingvideoslice;