import React from "react";
import "./power.less";
import Slider from "react-slick";
import { arraySlice } from '@/config.js';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows:false,
  slidesToShow: 1,
  slidesToScroll: 1,
  focusOnSelect:false,
  autoplay:true,
  autoplaySpeed:5000,
 
  appendDots: dots => (
    <div className="dots">
      <ul className="dots_ul"> {dots} </ul>
    </div>
  ),
  customPaging: i => <span> </span>
};

function Power({ bgList,slickList }) {
  return (
    <div className="hotel_power" id="power">
      <div className="powebg">
        <div className="main">
          <div className="list">
            <h3> {bgList.title} </h3>
            <p> {bgList.des} </p>
            <ul>
              {bgList.list.map((ele, i) => {
                return (
                  <li key={i}>
                    <h3> {ele.title} </h3>
                    <p> {ele.des} </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="power_slick">
        <div className="power_slider">
          <Slider {...settings}>
          {
            arraySlice(slickList,4).map((ele,i)=>{
                return(
                    <div key={`${i}a`} className="slider_content">
                       <ul>
                           {
                                ele.map((item,inx)=>{
                                    return(
                                        <li key={`${inx}b`}>
                                            <h3> { item.time } </h3>
                                            <p> {item.words } </p>
                                            <span> { item.by } </span>
                                        </li>
                                    )
                                })
                           }
                       </ul>
                    </div>
                )
            })
          }
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Power;
