import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyle} from './style'
import {GlobalStyleIcon} from './static/iconfont/iconfont'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <GlobalStyle />
    <GlobalStyleIcon />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
