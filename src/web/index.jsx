import React,{ Fragment } from 'react';
import Header from "@/web/component/Header"
import Introduce from "@/web/component/Body/Introduce"
import Power from "@/web/component/Body/Power"

function App({ config:{ header,body } }) {
  
  return (
    <Fragment>
      <Header { ...header } />
      <Introduce {...body.introduce}/>
      <Power {...body.power} />
    </Fragment>
  );
}

export default App;