import request from "../../api";
import { videoActions } from "../reducers/video-slice";
import { playingvideoActions} from "../reducers/playingvideo-slice"
import {relatedVideoActions} from "../reducers/relatedVideo-slice"
import { searchVideoActions } from "../reducers/searchVideo-slice";
import { subscribedChannelActions } from "../reducers/subscribedChannels-slice";
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
  dispatch(playingvideoActions.selected_video_request())
  const {data}=await request("/videos",{
    params:{
      part:'snippet,statistics',
      id:id
    }
  })
  console.log(data);
  dispatch(playingvideoActions.selected_video_success(data.items[0]))


}catch(error){
   console.log(error.message);
   dispatch(playingvideoActions.selected_video_fail(error.message))
}

} 



export const getRelatedVideos = (id) => async (dispatch) => {
  try {
    dispatch(relatedVideoActions.related_video_request());
    const { data } = await request("/search", {
      params: {
        part: "snippet",
        relatedToVideoId: id,
        maxResults: 15,
        type: "video",
      },
    });
    
    dispatch(relatedVideoActions.related_video_success(data.items));
  } catch (error) {
    console.log(error.response.data.message);
    dispatch(relatedVideoActions.related_video_fail(error.message));
  }
}; 

export const getVideosBySearch = (keyword) => async (dispatch) => {
  try {
    dispatch(searchVideoActions.search_video_request());

    const { data } = await request("/search", {
      params: {
        part: "snippet",
        maxResults: 25,
        q: keyword,
        type: "video,channel",
      },
    });
    console.log(data.items);
    dispatch(
      searchVideoActions.search_video_success(data.items)
    );
  } catch (error) {
    console.log(error.message);
    dispatch(searchVideoActions.search_video_fails(error.message));
  }
};

export const getSubscribedChannel = (id) => async (dispatch, getState) => {
  try {
     dispatch(subscribedChannelActions.subscribed_channel_request())
    const { data } = await request("/subscriptions", {
      params: {
        part: "snippet,contentDetails",
        mine: true,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    console.log(data);
    dispatch(
      subscribedChannelActions.subscribed_channel_success(data.items)
    );
  } catch (error) {
    dispatch(
      subscribedChannelActions.subscribed_channel_fail(error.response.data));
    console.log(error.response.data);
  }
};