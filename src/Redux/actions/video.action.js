import request from "../../api";
import { videoActions } from "../reducers/video-slice";
export const getPopularVideo =()=> async (dispatch,getState)=>{
    try{
    dispatch(videoActions.home_video_request());
    // videoActions.home_video_request();
  const { data } = await request("/videos", {
    params: {
      part: "snippet,contentDetails,statistics",
      chart: "mostPopular",
      regionCode: "IN",
      maxResults: 20,
      pageToken: getState().video.nextPageToken,
    },
  });
    // console.log(res);
    dispatch(videoActions.home_video_success({
            videos:data.items,
            nextPageToken:data.nextPageToken,
            category:"All"
        })
    )

}catch(error){
    console.log(error.message);
    dispatch(videoActions.home_video_fails(error.message))

   }
}

export const getVideosByCategory = (keyword) => async (dispatch,getState) => {
  try {
    dispatch(videoActions.home_video_request());
    // videoActions.home_video_request();
    const { data } = await request("/search", {
      params: {
        part: "snippet",
        maxResults: 25,
        pageToken:getState().video.nextPageToken ,
        q:keyword,
        type:'video'
    },
    });
    // console.log(res);
    dispatch(
      videoActions.home_video_success({
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category:keyword,
      })
    );
  } catch (error) {
    console.log(error.message);
    dispatch(videoActions.home_video_fails(error.message));
  }
};

export const getVideoById =(id) => async (dispatch,getState)=>{
try{
  dispatch({
    type:"Selected_video_request"
  })
  const {data}=await request("/videos",{
    params:{
      part:'snippet,statistics',
      id:id
    }
  })
  console.log(data);
  dispatch({
    type:"Selected_video_success",
    payload:data.items[0]
  })


}catch(error){
   console.log(error.message);
   dispatch({
    type:"Selected_video_failed",
    payload:error.message

   })
}

} 