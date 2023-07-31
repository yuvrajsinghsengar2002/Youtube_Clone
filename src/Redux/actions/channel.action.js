import request from "../../api";
import { channelActions } from "../reducers/channel-slice";
export const getChannelDetails = (id) => async dispatch => {
  try {
    dispatch(channelActions.channel_request());
    const { data } = await request("/channels", {
      params: {
        part: "snippet,statistics,contentDetails",
        id: id,
      },
    });
    console.log(data);
    dispatch(channelActions.channel_success(data.items[0]));
  }catch (error) {
    console.log(error.message);
    dispatch(channelActions.channel_fail(error.message));
  }
};


export const checkSubscriptionStatus = (id) => async (dispatch,getState) => {
  try {
    const { data } = await request("/subscriptions", {
      params: {
        part: "snippet",
        forChannelId: id,
        mine:true
      },
      headers:{
        Authorization:`Bearer ${getState().auth.accessToken}`,
      },
    });
    console.log(data);
    dispatch(channelActions.channel_subscription_status(data.items.length!==0));
  } catch(error) {
    console.log(error.message);
  }
};