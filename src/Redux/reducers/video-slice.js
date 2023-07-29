import {createSlice} from "@reduxjs/toolkit";


const initialState={
    videos:[],
    loading:false,
    nextPageToken:null,
    activeCategory:"All",
    error:null
}
const videoSlice= createSlice({
    name:"video",
    initialState:initialState,
    reducers:{
        home_video_request(state,action){
            state.loading=true;
            state.error=null
        },
        home_video_success(state,action){
            state.videos=state.activeCategory===action.payload.category?[...state.videos,...action.payload.videos]:action.payload.videos;
            
            state.loading=false;
            state.nextPageToken=action.payload.nextPageToken;
            state.activeCategory=action.payload.category;
            state.error = null;
        },
        home_video_fails(state,action){
            state.loading=false;
            state.error=action.payload;
        }
    }
})
export const videoActions=videoSlice.actions;
export default videoSlice;