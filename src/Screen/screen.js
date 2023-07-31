import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideosBySearch } from "../Redux/actions/video.action";
import { Container } from "react-bootstrap";
import VideoHorizontal from "../Components/videoHorizontal/videoHorizontal";

const SearchScreen = ()=>{
   const {query}=useParams();
   console.log(query);
   const dispatch=useDispatch()
   useEffect(()=>{
    dispatch(getVideosBySearch(query))
   },[query,dispatch])
   
   const {videos,loading} = useSelector(state=>state.searchvideos)
   
   
   
   return(
   <Container>
    {!loading?(
        videos?.map(video=><VideoHorizontal video={video} key={video.id.videoId} searchScreen/>)
    ):<h1>Loading</h1>}
   </Container>
   )
}

export default SearchScreen;