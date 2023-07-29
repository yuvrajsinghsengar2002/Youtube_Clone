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
import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./auth-slice";
const store= configureStore({
  reducer:{
    auth:authSlice.reducer,
    video:videoSlice.reducer,
    
  }
})

export default store;
