import {createSlice} from '@reduxjs/toolkit';
const initialState={
    accessToken:sessionStorage.getItem("ytc-access-token")? sessionStorage.getItem("ytc-access-token"):null,
    user:sessionStorage.getItem("ytc-user")?JSON.parse(sessionStorage.getItem("ytc-user")):null,
    loading:false,
    error:null
}

const authSlice= createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        login_request(state,action){
           state.loading=true;
        },
        login_success(state,action){
            state.accessToken=action.payload;
        },
        login_fail(state,action){
            state.accessToken = null;
            state.loading=false;
            state.error=action.payload;
        },
        load_profile(state,action){
            state.user=action.payload;
        },
        log_out(state,action){
            state.accessToken = null;
            state.user = null;
        }
    }
});

export const authActions= authSlice.actions;
export default authSlice;