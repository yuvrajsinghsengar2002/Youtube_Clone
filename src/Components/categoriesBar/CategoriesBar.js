import React, { useState } from "react";
import "./_categoriesBar.scss";
import {getPopularVideo, getVideosByCategory} from "../../Redux/actions/video.action";
import { useDispatch } from "react-redux";
const keyWords=[
  'All',
  'React js',
  'Angular js',
  'React Native',
  'Use of API',
  'Redux',
  'Music',
  'Algorithm Art',
  'Guitar',
  'Bengali Songs',
  'Coding',
  'Cricket',
  'Football']

const CategoriesBar = () => {
  const [activeElement,setActiveElement] =useState('All');
  const dispatch=useDispatch();
  
  
  const handleClick = (value) =>{
    setActiveElement(value);

    if(value==="All")
    {
      dispatch(getPopularVideo());
    }
    else{
    dispatch(getVideosByCategory(value));
    }
    
  }

  return <div className="categoriesBar">
    {
      keyWords.map((value,i)=>(<span 
        onClick={() => handleClick(value)}
        key={i}
        className={activeElement === value ? 'active':""}>
          {value}
        </span>
    ))}
  </div>;
};
export default CategoriesBar;
