import {GoogleAuthProvider,signInWithPopup,signOut} from "firebase/auth";

import {auth} from "../../firebase";

import { authActions } from "../auth-slice";

export const login = () => async (dispatch) => {
  try {
    dispatch(authActions.login_request());

    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
    const res = await signInWithPopup(auth,provider);
    
    const accessToken = res.user.accessToken;

    const profile = {
      name: res.user.displayName,
      photoURL: res.user.photoURL,
    };
    
    sessionStorage.setItem("ytc-access-token", accessToken);
    sessionStorage.setItem("ytc-user", JSON.stringify(profile));

    dispatch(authActions.login_success(accessToken));
    dispatch(authActions.load_profile(profile));
  } catch (error) {
    console.log(error.message);
    dispatch(authActions.login_fail(error.message));
  }
};

export const log_out = () => async (dispatch) => {
  await signOut(auth);
  dispatch(authActions.log_out());

  sessionStorage.removeItem("ytc-access-token");
  sessionStorage.removeItem("ytc-user");
};
