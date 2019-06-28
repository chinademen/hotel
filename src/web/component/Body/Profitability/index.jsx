import React from "react";
import "./profitability.less";
import Slider from "react-slick";

function Profitability({ slickList  }) {

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
        customPaging: (i) => {
            return  <img  src={ slickList[i].dots } alt="" />
        }
    }; 

    return (
        <div className="profitability">
            <Slider {...settings}>
            {
                slickList.map((ele,i)=>{
                    return(
                        <div  key={i} className="profitability_main">
                            <img src={ ele.bgimg } alt="" />
                        </div>
                    )
                })
            }
         
            </Slider>
        </div>
    );
}

export default Profitability;