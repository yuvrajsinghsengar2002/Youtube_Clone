import React from "react";
import numeral from "numeral";
import './_comment.scss'
const Comment=()=>{
 return (
   <div className="comment p-2 d-flex">
     <img
       src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
       alt=""
       className="rounded-circle me-3"
     />
     <div className="comment__body">
       <p className="comment__header mb-0">
         Sumit Dey • {numeral('2023-07-25').format("0.a")}
       </p>
       <p className="mb-0">
        Nice
       </p>
     </div>
   </div>
 );
}
export default Comment;