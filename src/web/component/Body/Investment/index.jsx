
import React,{ Component } from "react";
import "./investment.less";
import Slider from "react-slick";

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
class Investment extends Component{

    state ={
        activeCode1 : 0,
        activeCode2 : 0,
    }

    changeCode = (e,name) =>{
        this.setState({
            [name]:e
        })
    }

    render(){
        const { investmentList1,investmentList2,casekey } = this.props;
        const { activeCode1,activeCode2 } = this.state;
        return (
            <div className="investment">
               <div className="investment_top">
                    <div className="top_main">
                        <h3> 多方位管理支持，全力保障开业收益 </h3>
                        <p> 雅阁酒店集团提供标准化和适应性的管理系统实现整店复制输出，全力保障开业收益 </p>
                        <ul className="ul_left">
                        {
                            investmentList1.map((ele,i)=>{
                                const cls = activeCode1 == i ? 'active_li':''
                                return(
                                    <li onClick={ () => this.changeCode( i ,'activeCode1' ) } className={cls} key={i}>  
                                        <h3> { ele.title } </h3>
                                        <p> { ele.des } </p>
                                    </li>
                                )
                            })
                        }
                        <img src={require('@/assets/web/notice.png')} alt="" />
                        </ul>
                        <ul className="ul_right">
                        {
                            investmentList2.map((ele,i)=>{
                                const cls = activeCode2 == i ? 'active_li':''
                                return(
                                    <li onClick={ () => this.changeCode( i ,'activeCode2' ) } className={cls} key={i}>  
                                        <h3> { ele.title } </h3>
                                        <p> { ele.des } </p>
                                    </li>
                                )
                            })
                        }
                        <img src={require('@/assets/web/notice.png')} alt="" />
                        </ul>
                       
                    </div>
               </div>

               <div className="investment_bottom">
                    <div className="bottom_main">
                        <h3> { casekey.title } </h3>
                        <p> {casekey.des } </p>
                        <div className="Slider">
                        <Slider {...settings}>
                        {
                            casekey.list.map((ele,i)=>{
                                return(
                                    <div key={ i } className="Slider_item">
                                        <img src={ ele.img } alt="" />
                                        <p> { ele.title } </p>
                                    </div>
                                )
                            })
                        }
                    
                        </Slider>
                        </div>
                    </div>
               </div>
            </div>
        ); 
    }
}


export default Investment;