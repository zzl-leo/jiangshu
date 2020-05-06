// 用于整合各个部分的reducer
// import {combineReducers} from 'redux'
// 使用redux-immutable
import {combineReducers} from 'redux-immutable'
// import headerReducer from '../common/header/store/reducer'
import {reducer as headerReducer} from '../common/header/store'

export default combineReducers({ // 里面生成的数据内容是immutable
    header: headerReducer
})