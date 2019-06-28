import React,{ Fragment } from 'react';
import Header from "@/web/component/Header"
import Introduce from "@/web/component/Body/Introduce"
import Power from "@/web/component/Body/Power"
import Profitability from "@/web/component/Body/Profitability"
import Support from "@/web/component/Body/Support"
import Investment from "@/web/component/Body/Investment"

function App({ config:{ header,body } }) {
  
  return (
    <Fragment>
      <Header { ...header } />
      <Introduce {...body.introduce}/>
      <Power {...body.power} />
      <Profitability {...body.profitability} />
      <Support {...body.support} />
      <Investment {...body.investment} />
    </Fragment>
  );
}

export default App;