import React from 'react';
import './introduce.less'

function Introduce({ menu,title,des,bgImg,content }) {
 
  return (
    <div className="hotel_introduce" id="introduce">
        <ul>
            {
              menu.map((ele,i)=>{
                return( 
                  <li key={ i }>
                      <img src={ ele.img } alt="" />
                      <p> { ele.des } </p>
                  </li> 
                )
              })
            }
        </ul>
        <div className="main">  
            <div className="main_left">
                <h1> { title } </h1>
                <p className="des"> { des } </p>
                <p className="content"> { content } </p>
            </div>
            <div className="main_right">
              <img src={ bgImg } alt="" />
            </div>
        </div>
    </div>
  );
}

export default Introduce;