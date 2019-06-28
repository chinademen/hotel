import React from 'react';
import ReactDOM from 'react-dom';
import { isPc,webConfig } from '@/config.js';
import '@/assets/common/common.less'
import H5 from '@/h5'
import Web from '@/web'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Root () {
    return isPc() ? <Web config={ webConfig } /> : <H5 config={webConfig} />
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);
