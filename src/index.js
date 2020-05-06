import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyle} from './style'
import {GlobalStyleIcon} from './static/iconfont/iconfont'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <App/>
    <GlobalStyle />
    <GlobalStyleIcon />
  </div>,
  document.getElementById('root')
);

serviceWorker.unregister();
