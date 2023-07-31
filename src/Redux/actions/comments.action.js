import request from "../../api";
import { commentsActions } from "../reducers/comments-slice";
export const getCommentsById = (id) => async (dispatch, getState) => {
  try {
    dispatch(commentsActions.comments_request());
    const { data } = await request("/commentThreads", {
      params: {
        part: "snippet",
        videoId: id,
      },
    });
    console.log(data);
    dispatch(commentsActions.comments_success(data.items));
  } catch (error) {
    console.log(error.message);
    dispatch(commentsActions.comments_fail(error.message));
  }
};

export const addComment = (id,text) => async (dispatch, getState) => {
  try {
    // dispatch(commentsActions.comments_request());
     const obj = {
       snippet: {
         videoId: id,
         topLevelComment: {
           snippet: {
             textOriginal: text,
           },
         },
       },
     };
     await request.post("/commentThreads", obj, {
      params: {
        part: "snippet",
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
  
    // dispatch(commentsActions.comments_success(data.items));
    setTimeout(() => dispatch(getCommentsById(id)),5000);
   
} catch (error) {
    console.log(error.message);
    // dispatch(commentsActions.comments_fail(error.message));
  }
};
