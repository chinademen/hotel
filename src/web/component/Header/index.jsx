import React from 'react';
import './header.less'

function Header({ logo,contact,menu,words }) {
  const { group1,group2 }  = words; 
  const  scrollToAnchor = (anchorName) => {
    if (anchorName) {
        // 找到锚点
        let anchorElement = document.getElementById(anchorName);
      
        // 如果对应id的锚点存在，就跳转到锚点
        if(anchorElement) { anchorElement.scrollIntoView({block: "end", behavior: "smooth"}); }
    }
  }

  return (
    <div className="hotel_header">
        <header className="header">
            <img className="logo" src={ logo } alt="" />
            <ul>
                {
                    menu.map((ele,i)=>{
                        return( <li onClick={ () => scrollToAnchor(ele.code) } key={ i }> { ele.title } </li> );
                    })
                }
            </ul>
            <div className="contact"> <i></i> { contact } </div>
        </header>
        <div className="content">
            <div className="content_left">
                <p> { group1.p1 } </p>
                <p> <b> { group1.p2 } </b>   { group1.p3 } </p>
                <p> { group1.p4 } </p>
            </div>
            <div className="content_right">
                <p> { group2.p1 } </p>
                <p> { group2.p2 } <b> { group2.p3 } </b> { group2.p4 }</p>
                <p> <b> { group2.p5 } </b>  { group2.p6 }</p>
                <p> <b> { group2.p7 } </b>  { group2.p8 } </p>
            </div>
            <button className="addUs"> 加盟申请 </button>
        </div>
    </div>
  );
}

export default Header;