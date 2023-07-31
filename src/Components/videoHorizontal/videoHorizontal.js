import React  from "react";
import request from "../../api";
import moment from "moment/moment";
import numeral from "numeral";
import { AiFillEye } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import './_videohorizontal.scss';
import {Col, Row} from 'react-bootstrap'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const VideoHorizontal=({video,searchScreen,subScreen})=>{
    const {id,
    snippet:{channelId,channelTitle,description,title,publishAt,thumbnails}}=video
     
    const isVideo=!(id.kind==='youtube#video' || subScreen)

    const [views, setViews] = useState(null);
    const [duration, setDuration] = useState(null);
    const [channelIcon, setChannelIcon] = useState(null);
    
    
    useEffect(() => {
      const get_video_details = async () => {
        const {
          data: { items },
        } = await request("/videos", {
          params: {
            part: "contentDetails,statistics",
            id: id.videoId,
          },
        });
        setDuration(items[0].contentDetails.duration);
        setViews(items[0].statistics.viewCount);
      };
     {
         isVideo && get_video_details();
     }
    }, [id,isVideo]);

    useEffect(() => {
      const get_channel_icon = async () => {
        const {
          data: { items },
        } = await request("/channels", {
          params: {
            part: "snippet",
            id: channelId,
          },
        });
        setChannelIcon(items[0].snippet.thumbnails.default);
      };
      get_channel_icon();
    }, [channelId]);

    const seconds = moment.duration(duration).asSeconds();
    const _duration = moment.utc(seconds * 1000).format("mm:ss");
    const navigate=useNavigate()
    const clickHandler =()=>{
      isVideo?
     navigate(`/watch/${id.videoId}`):
     navigate(`/channel/${id.channelId}`)
    }
    
    const thumbnail =!isVideo && 'videoHorizontal__thumbnail-channel'

    return (
      <Row
        className="videoHorizontal m-1 py-2 align-items-center"
        onClick={clickHandler}
      >
        <Col xs={6} md={4} className="videoHorizontal__left">
          <LazyLoadImage
            src={thumbnails.medium.url}
            effect="blur"
            className={`videoHorizontal__thumbnail ${thumbnail}`}
            wrapperClassName="videoHorizontal__thumnail-wrapper"
          />
          {
          isVideo &&
          <span className="videoHorizontal__duration">{_duration}</span>
          }
        </Col>
        <Col xs={6} md={8} className="videoHorizontal__right">
          <p className="'videoHorizontal__title mb-1">{title}</p>

          {isVideo && (
            <div className="videoHorizontal__details">
              <AiFillEye /> {numeral(views).format("0.a")} views •
              {moment(publishAt).fromNow()}
            </div>
          )}

          {isVideo && <p classname="mt-1"> {description}</p>}

          <div className="videoHorizontal__channel d-flex align-items-center my-1">
            {!isVideo && <LazyLoadImage src={channelIcon} effect="blur" />}

            <p className="mb-0">{channelTitle}</p>
          </div>
        </Col>
      </Row>
    );
}

export default VideoHorizontal;