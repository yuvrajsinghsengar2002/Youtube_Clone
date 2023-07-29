import React from "react";
import './_videoMetaData.scss';
import numeral from "numeral";
import moment from "moment";
import {MdThumbUp,MdThumbDown} from 'react-icons/md';
import ShowMoreText from 'react-show-more-text'

const videoMetaData = () => {
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>video Title</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(10000).format("0.a")} views •
            {moment("2020-06-08").fromNow()}
          </span>

          <div>
            <span className="me-3">
              <MdThumbUp size={25} /> {numeral(10000).format("0.a")}
            </span>
            <span className="me-3">
              <MdThumbDown size={25} /> {numeral(10000).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
            alt="Avatar"
            className="rounder-circle mr-3"
          />
          <div className="d-flex flex-coloumn">
            <span>Channel</span>
            <span> {numeral(10000).format("0.a")} </span>
          </div>
        </div>
        <button className="btn border-0 p-2 m-2">Subscribe</button>
      </div>
      <div className="videoMetaData__description">
        <ShowMoreText
        lines={3}
        more="Show More"
        Less="Show Less"
        anchorClass="showMoreText"
        expanded={false}
        > ailfhfadsgfkyuldhjfkjvsfhajkdljhjklhkbjvhcdgxszdxf
        cfvgbhnjmnhbgvfcdxszasxcdvfygbhnjmkjnhbvgfdxszdaxdcvfgbhnmjkmjnhbi
        vgfcdyxstzraxscdvfbnm,mnbivcxszaewxscdvbynumi,minubyvcdxszxs
        ecrvtybunmi,mnuybvtcrexcrvtbynumi,o.,minubiyvcdxtcdrvtbynumi,o.p,omin
        ubyvcfdvtyfgbhnmijp,okpl.;
        </ShowMoreText>
      </div>
    </div>
  );
}

export default videoMetaData;