import React, { useEffect } from "react";
import './_watchscreen.scss';
import {Col,Row} from "react-bootstrap";
import VideoHorizontal from "../../Components/videoHorizontal/videoHorizontal";
import VideoMetaData from "../../Components/videoMetaData/videoMetaData";
import Comments from "../../Components/comments/Comments";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedVideos, getVideoById } from "../../Redux/actions/video.action";
import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
const WatchScreen=()=>{

const {id}=useParams();
const dispatch = useDispatch();
useEffect(()=>{
  dispatch(getVideoById(id));
  dispatch(getRelatedVideos(id))
},[dispatch,id])
const {video,loading} = useSelector(state => state.playingVideo);
const {videos,loading:relatedVideosLoading}= useSelector(state=> state.relatedVideos)
console.log(video)
console.log(videos)

return (
  <Row>
    <Col lg={8}>
      <div className="watchScreen__player">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0%"
          title={video?.snippet?.title}
          allowFullScreen
          width="100%"
          height="100%"
        ></iframe>
      </div>

      {!loading ? (
        <VideoMetaData video={video} videoId={id} />
      ) : (
        <h6>Loading..</h6>
      )}

      <Comments videoId={id} totalComments={video?.statistics?.viewCount} />
    </Col>
    <Col lg={4}>
      {!relatedVideosLoading ? (
        videos
          ?.filter((video) => video.snippet)
          .map((video) => (
            <VideoHorizontal video={video} key={video.id.videoId} />
          ))
      ) : (
        <SkeletonTheme color="#343a40" highlightColor="#3c4147">
          <Skeleton width="100%" height="130px" count={15} />
        </SkeletonTheme>
      )}
    </Col>
  </Row>
);
}
export  default WatchScreen;