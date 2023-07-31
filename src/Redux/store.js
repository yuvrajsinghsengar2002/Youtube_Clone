// import { createStore, applyMiddleware, combineReducers } from "redux";

// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";

// import { authReducer } from "./reducers/auth.reducer";

// const rootReducer = combineReducers({
//   auth: authReducer,
// });

// const store = createStore(
//   rootReducer,
//   {},
//   composeWithDevTools(applyMiddleware(thunk))
// );
import videoSlice from "./reducers/video-slice";
import authSlice from "./auth-slice";
import playingvideoslice from "./reducers/playingvideo-slice";
import channelSlice from "./reducers/channel-slice";
import commentsSlice from "./reducers/comments-slice";
import relatedvideoslice from "./reducers/relatedVideo-slice";
import searchvideoslice from "./reducers/searchVideo-slice";
import {configureStore} from "@reduxjs/toolkit"
const store= configureStore({
  reducer:{
    auth:authSlice.reducer,
    video:videoSlice.reducer,
    playingVideo:playingvideoslice.reducer,    
    channel:channelSlice.reducer,
    comments:commentsSlice.reducer,
    relatedVideos:relatedvideoslice.reducer,
    searchvideos:searchvideoslice.reducer,
    
  }
})

export default store;
