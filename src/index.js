import React from 'react';
import ReactDOM from 'react-dom';
import { isPc } from './config.js';
import H5 from './h5'
import Web from './web'

function Root () {
    return isPc() ? <Web /> : <H5 />
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);
