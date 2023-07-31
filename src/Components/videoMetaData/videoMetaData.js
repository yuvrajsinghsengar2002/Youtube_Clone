import React,{useEffect} from "react";
import './_videoMetaData.scss';
import numeral from "numeral";
import moment from "moment";
import {MdThumbUp,MdThumbDown} from 'react-icons/md';
import ShowMoreText from 'react-show-more-text'
import {useDispatch, useSelector} from 'react-redux'
import {checkSubscriptionStatus, getChannelDetails} from '../../Redux/actions/channel.action'
const VideoMetaData = ({video:{snippet,statistics},videoID}) => {

  const {channelId,channelTitle,description,title,publishedAt} = snippet;
  const {viewCount,likeCount,dislikeCount}=statistics;
  
  const {snippet:channelSnippet,statistics:channelStatistics}= useSelector(state=> state.channel.channel);
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getChannelDetails(channelId));
    dispatch(checkSubscriptionStatus(channelId));
  },[channelId,dispatch])
  
  const subscriptionStatus = useSelector(state => state.channel.subscriptionStatus);
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>{title}</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(viewCount).format("0.a")} views •
            {moment(publishedAt).fromNow()}
          </span>

          <div>
            <span className="me-3">
              <MdThumbUp size={25} /> {numeral(likeCount).format("0.a")}
            </span>
            <span className="me-3">
              <MdThumbDown size={25} /> {numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex flex-row">
          <img
            src={channelSnippet?.thumbnails?.default?.url}
            alt="Avatar"
            className="mr-3 rounded-circle "
          />
          <div className="d-flex flex-coloumn ">
            <span>{channelTitle}</span>
            <span>
              {numeral(channelStatistics?.subscriberCount).format("0.a")}
              Subscribers
            </span>
          </div>
        </div>
        <button className={`btn border-0 p-2 m-2 ${subscriptionStatus && "btn-grey"}`}>{subscriptionStatus?'Subscribed':"Subscribe"}</button>
      </div>
      <div className="videoMetaData__description">
        <ShowMoreText
          lines={3}
          more="Show More"
          Less="Show Less"
          anchorClass="showMoreText"
          expanded={false}
        >
          {" "}
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
}

export default VideoMetaData;