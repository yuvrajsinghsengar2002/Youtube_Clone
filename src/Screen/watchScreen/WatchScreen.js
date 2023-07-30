import React from "react";
import './_watchscreen.scss';
import {Col,Row} from "react-bootstrap";
import VideoHorizontal from "../../Components/videoHorizontal/videoHorizontal";
import VideoMetaData from "../../Components/videoMetaData/videoMetaData";
import Comments from "../../Components/comments/Comments";
import { useParams } from "react-router-dom";
const WatchScreen=()=>{
const {id}=useParams();

return (
  <Row>
    <Col lg={8}>
      <div className="watchScreen__player">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0%"
          title="MY VIDEO"
          allowFullScreen
          width="100%"
          height="100%"
        ></iframe>
      </div>
      <VideoMetaData />
      <Comments/>
    </Col>
    <Col lg={4}>
      { [...Array(5)].map(() => (
       <VideoHorizontal/>
      )) }
    </Col>
 </Row>
);
}
export  default WatchScreen;