import React from 'react';
import ReactDOM from 'react-dom';
import './style'
import {GlobalStyle} from './style'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
