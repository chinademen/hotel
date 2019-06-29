import React from 'react';
import './contactUs.less'

function ContactUs() {

  return (
    <div className="contactUs" id="contactUs">
      <h3> 联系我们 </h3>
      <ul>
        <li>
          <span> 姓 名 </span> <input placeholder="请输入您的姓名" type="text" />
        </li>
        <li>
          <span> 投资规模 </span> 
          <select name="" id="">  
            <option value=""> 1000-3000万 </option>
            <option value=""> 1000-3000万 </option>
            <option value=""> 1000-3000万 </option>
          </select>
        </li>
        <li>
          <span> 电 话 </span> <input placeholder="请输入您的联系方式" type="text" />
        </li>
        <li>
          <span> 建筑面积 </span> 
          <select name="" id="">  
            <option value=""> 8000-15000平方米 </option>
            <option value=""> 8000-15000平方米 </option>
            <option value=""> 8000-15000平方米 </option>
          </select>
        </li>
        <li>
          <span> 城 市 </span> <input placeholder="请输入您的城市" type="text" />
        </li>
        <li>
          <span> 物业状态 </span> 
          <select name="" id="">  
            <option value=""> 新建持有 </option>
            <option value=""> 新建持有 </option>
            <option value=""> 新建持有 </option>
          </select>
        </li>
      </ul>
      <div className="others">
        <span> 其他说明 </span> <input placeholder="请输入其他说明" type="text" />
      </div>
      <div className="button">
        <button> 重 &nbsp; 置 </button>
        <button> 提 &nbsp; 交 </button>
      </div>
    </div>
  );
}

export default ContactUs;