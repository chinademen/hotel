import React from 'react';
import './footer.less'

function Footer() {
 
  return (
    <div className="footer" id="footer">
        <div className="footer_main">
            <ul>
                <li>  
                    <img src={require('@/assets/web/logo1.png')} alt="" />
                </li>
                <li>
                    <h3> 雅阁酒店集团（北京总部）</h3>
                    <p> 北京市朝阳区朝阳门外大街22号泛利大厦1408-1409室 </p>
                    <h3> 雅阁酒店集团（广州） </h3>
                    <p> 广州市天河区珠江新城华夏路30号富力盈通大厦1902-1903室 </p>
                </li>
                <li>
                    <h3> <img src={require('@/assets/web/contact.png')} alt="" /> 400 650 9878 </h3>
                    <p>  
                        <img src={require('@/assets/web/14.png')} alt="" />
                        <img src={require('@/assets/web/15.png')} alt="" />
                        <img src={require('@/assets/web/16.png')} alt="" />
                        <img src={require('@/assets/web/17.png')} alt="" />
                    </p>
                </li>
                <li>
                    <img src={require('@/assets/web/code.png')} alt="" />
                </li>
            </ul>
            <p> COPYRIGHT © 2005-2022 ARGYLE HOTEL GROUP (AUSTRALIA), ALL RIGHTS RESERVED </p>
        </div>
    </div>
  );
}

export default Footer;