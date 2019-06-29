import React,{ Component } from "react";
import "./support.less";

class SupportForm extends Component {
    render(){
        return (
            <div className="form">
                <ul>
                    <li>  
                        <span> 预估房租： </span>
                        <input type="text" placeholder="如100（万元/年）" />
                    </li>
                    <li>   
                        <span> 预估房间数量： </span>
                        <input type="text" placeholder="如60（间）" />
                    </li>
                    <li>  
                        <span> 预估房价：  </span>
                        <input type="text" placeholder="如300（元/间）" />
                    </li>
                    <li>  
                        <span> 预估出租： </span>
                        <input type="text" placeholder="80%" />
                    </li>
                    <li>  
                        <span> 您的手机号： </span>
                        <input type="text" placeholder="请输入手机号" />
                    </li>
                </ul>
                <button type="button"> 提 &nbsp; 交 </button>
            </div>
        )
    }
}

function Support({ positionList  }) {

    return (
        <div className="support" id="support">
            <div className="support_main">
                <h3> <b> 7 </b>  大优势，助力无忧创业 </h3>
                <p> 雅阁酒店集团拥有成熟的运营模式和盈利模式， 帮助业主实现无忧创业 </p>
                <ul>
                    {
                        positionList.map(( ele,i )=>{
                            const style = {
                                'background': `url(${ele.img}) no-repeat center`
                            }
                            return(
                                <li style={style} key={i}> 
                                  <h3> { ele.title } </h3>
                                  <p> { ele.des } </p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="support_form">
                <h3> 投资收益评估 </h3>
                <SupportForm />
            </div>    
        </div>
    );
}

export default Support;