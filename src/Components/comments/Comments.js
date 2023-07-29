import React from "react";
import "./_comments.scss";
import Comment from "../comment/Comment";
const Comments =()=>{
const handleComment =()=>{

}

return (
  <div className="comments">
    <p>1243rishgil</p>
    <div className="comments__form d-flex w-100 my-2">
      <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" 
      alt=""
      className="rounded-circle me-3"
      />

      <form 
      onSubmit={handleComment}
      className="d-flex flex-grow-1">
        <input
         type='text'
         className='flex-grow-1'
         placeholder='write a comment'
        />
        <button className="border-0 p-2">Comment</button>
      </form>
    </div>
    <div className="comments__list">
        {
            [...Array(10)].map(()=>(
                <Comment/>
            ))
        }
    </div>
  </div>
);
}

export default Comments;