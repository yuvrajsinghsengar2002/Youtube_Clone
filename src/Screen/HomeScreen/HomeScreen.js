import React, { useEffect } from "react";
import{Col,Container} from "react-bootstrap"
import CategoriesBar from "../../Components/categoriesBar/CategoriesBar";
import Video from "../../Components/Video/Video";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideo, getVideosByCategory } from "../../Redux/actions/video.action";
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonVideo from "../../Components/Skeleton/SkeletonVideo";


const HomeScreen = () => {
   const dispatch=useDispatch();

   useEffect(()=>{
   dispatch(getPopularVideo());
   },[dispatch])
   
  

   const {videos,activeCategory,loading}=useSelector(state=> state.video)
  
   const fetchData=()=>{
    if(activeCategory==="All")
      {dispatch(getPopularVideo());}
    else{
      dispatch(getVideosByCategory(activeCategory));
    }
   }
  
   return (
     <Container>
       <CategoriesBar />

       <InfiniteScroll
         dataLength={videos.length}
         next={fetchData}
         hasMore={true}
         Loader={
           <div className="spinner-border text-danger d-block mx-auto"></div>
         }
         className="row"
       >
         {!loading
           ? videos.map((video) => (
               <Col lg={3} md={4}>
                 <Video video={video} key={video.id} />
               </Col>
             ))
           :[...Array(20)].map(() => (
               <Col lg={3} md={4}>
                 <SkeletonVideo/>
               </Col>
             ))
          }
          
       </InfiniteScroll>
     </Container>
   );
};
export default HomeScreen;

