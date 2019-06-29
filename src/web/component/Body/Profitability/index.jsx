import React,{ Component } from "react";
import "./profitability.less";
import Slider from "react-slick";

class Profitability extends Component {

    state = {
        ativeCode:0,
    }
    change = (e) => {
        this.setState({
            ativeCode:e
        })
    }
    render(){
        const { slickList,des } = this.props;
        const { ativeCode } = this.state;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            focusOnSelect: false,
            autoplay: true,
            autoplaySpeed: 5000,
            afterChange:(e)=> this.change(e),
            appendDots: dots => (
                <div className="dots">
                    <ul className="dots_ul"> {dots} </ul>
                </div>
            ),
            customPaging: (i) => {
                
                return <img src={slickList[i].dots} alt="" />
            }
        };
        return (
            <div className="profitability" id="profitability">
                <Slider {...settings}>
                    {
                        slickList.map((ele, i) => {
                            return (
                                <div key={i} className="profitability_main">
                                    <img src={ele.bgimg} alt="" />
                                </div>
                            )
                        })
                    }
                </Slider>
                <div className="profitability_des">
                    <div className="des_top">
                        <div className="word">
                            <h1> <b> 9 </b>   大互补品牌  </h1>
                            <h3> 精准高效投资任意选 </h3>
                            <p> 雅阁拥有全球9大酒店品牌，覆盖奢华酒店、城市精品酒店、度假村等中高端酒店品牌。 </p>
                        </div>
                    </div>
                    <div className="des_botton">
                        <div className="left">
                            <h1> { des[ativeCode].name } </h1>
                            <h3> { des[ativeCode].title } </h3>
                            <p> { des[ativeCode].des } </p>
                        </div>
                        <div className="right">
                            <p  dangerouslySetInnerHTML = {{ __html:des[ativeCode].word }}> 
                            
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Profitability;