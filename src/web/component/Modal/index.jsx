import React ,{ Fragment,Component }from 'react';
import './modal.less'

const list = [
  "加盟条件","加盟费用","物业规模","投资金额","加盟支持","其他问题"
]

class Modal extends Component {

  state = {
    open:false,
    active:null,
  }

  changeOpen = (e) => {
    this.setState({
      open:e
    })
  }

  render(){
    const { open,active } = this.state;
    return (
      <Fragment>
      {
        open ? 
        <div className="you_fd" > 
      <div className="you_fd02">
       <div className="fd_gb" onClick = { () => this.changeOpen(false) }> 
        <img src="http://www.argylehotels.com/statics/honglan/img/icon-img06.png" /> 
       </div> 
       <form method="post" action="?m=formguide&amp;c=index&amp;a=show&amp;formid=227&amp;siteid=12" name="myform" id="myform"> 
        <div className="you_fd_one"> 
         <h3>请您留言</h3> 
         <p>我想了解：</p> 
         <ul> 
         {
           list.map((ele,i)=>{
            const cls = active == i ? 'act08':''
            return(
              <li onClick = { () => this.setState({ active:i }) } className={ cls } key={i}> <a href="javascript:;">{ ele }</a></li> 
            )
           })
         }
         </ul> 
         <p>其他：</p> 
         <input type="hidden" name="info[pro]" id="pro"  /> 
         <textarea name="info[qt]" id="qt" placeholder="在这里输入您想知道的问题 我们将尽快与您取得联系。"></textarea> 
         <input type="text" name="info[name]" id="name" size="50"  placeholder="请填写您的姓名" className="input-text" /> 
         <input type="text" name="info[tel]" id="tel" size="50" placeholder="请填写您的手机号码"  className="input-text" /> 
         <input className="fb_but" type="submit" name="dosubmit" id="dosubmit" value=" 发  送 " /> 
         <h3>400 650 9878</h3> 
        </div> 
       </form> 
      </div> 
      <h2> <img src="http://www.argylehotels.com/statics/honglan/img/icon-img08.png" /> </h2> 
     </div>
     :
     <div id="xiaoliuyan" onClick = { () => this.changeOpen(true) }>
     <img src="http://www.argylehotels.com/statics/honglan/img/xiaoliuyan.jpg" alt="" />

     </div>
      }
      
      </Fragment>
    );
  }
  
}

export default Modal;

