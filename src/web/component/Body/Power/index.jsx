import React from 'react';
import './power.less'

function Power({ bgList }) {
  return (
    <div className="hotel_power">
        <div className="powebg">
            <div className="main">
                <div className="list">
                    <h3> { bgList.title } </h3>
                    <p> { bgList.des } </p>
                    <ul>
                        {
                            bgList.list.map((ele,i)=>{
                                return(
                                    <li key={i}>  
                                        <h3> { ele.title } </h3>
                                        <p> { ele.des } </p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Power;