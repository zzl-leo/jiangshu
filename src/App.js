import React from 'react';
import Header from './common/header/index'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home/index'
import Detail from './pages/detail/index'
import store from './store'
function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />

        {/* BrowserHistory之中的内容使用路由 */}
        <BrowserRouter>
        {/* exact: 只有路径完全匹配时候，才渲染内容 */}
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail" exact component={Detail}></Route>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
